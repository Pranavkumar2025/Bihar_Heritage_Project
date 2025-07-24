import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiUpload,
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiFileText,
  FiImage,
} from "react-icons/fi";

const JoinMovementForm = ({ isOpen, onClose, selectedAction }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    actionType: selectedAction || "",
    // Volunteer specific
    pledge: "",
    // Report site specific
    location: "",
    siteDescription: "",
    sitePhotos: [],
    // Preserve stories specific
    story: "",
    storyPhotos: [],
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      [type]: [...prev[type], ...files],
    }));
  };

  const removeFile = (index, type) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.actionType)
      newErrors.actionType = "Please select an action type";

    // Action-specific validations
    if (formData.actionType === "volunteer" && !formData.pledge.trim()) {
      newErrors.pledge = "Pledge is required";
    }

    if (formData.actionType === "report") {
      if (!formData.location.trim())
        newErrors.location = "Location is required";
      if (!formData.siteDescription.trim())
        newErrors.siteDescription = "Site description is required";
    }

    if (formData.actionType === "preserve" && !formData.story.trim()) {
      newErrors.story = "Story is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission here
      alert("Thank you for joining the movement! We'll be in touch soon.");
      onClose();
    }
  };

  const actionTypes = [
    { value: "volunteer", label: "Become a Volunteer" },
    { value: "report", label: "Report a Site" },
    { value: "support", label: "Support the Cause" },
    { value: "educate", label: "Educate & Spread Awareness" },
    { value: "preserve", label: "Preserve Local Stories" },
  ];

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-[10000] mx-auto my-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxHeight: "90vh",
            overflowY: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-800">
                Join the Movement
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FiUser className="inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    <FiPhone className="inline mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <FiMail className="inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Action Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                How would you like to contribute? *
              </label>
              <select
                name="actionType"
                value={formData.actionType}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  errors.actionType ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select an action</option>
                {actionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.actionType && (
                <p className="text-red-500 text-sm mt-1">{errors.actionType}</p>
              )}
            </div>

            {/* Conditional Fields Based on Action Type */}
            <AnimatePresence>
              {formData.actionType === "volunteer" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Volunteer Commitment
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Pledge *
                    </label>
                    <textarea
                      name="pledge"
                      value={formData.pledge}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.pledge ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Write your commitment pledge to heritage preservation..."
                    />
                    {errors.pledge && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.pledge}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {formData.actionType === "report" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Site Information
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FiMapPin className="inline mr-2" />
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.location ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter the site location (address, landmarks, GPS coordinates)"
                    />
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FiFileText className="inline mr-2" />
                      Site Description *
                    </label>
                    <textarea
                      name="siteDescription"
                      value={formData.siteDescription}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.siteDescription
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Describe the heritage site, its current condition, historical significance..."
                    />
                    {errors.siteDescription && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.siteDescription}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FiImage className="inline mr-2" />
                      Site Photos
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "sitePhotos")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {formData.sitePhotos.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {formData.sitePhotos.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 p-2 rounded"
                          >
                            <span className="text-sm text-gray-600">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(index, "sitePhotos")}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FiX size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {formData.actionType === "preserve" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                    Story Preservation
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FiFileText className="inline mr-2" />
                      Your Story *
                    </label>
                    <textarea
                      name="story"
                      value={formData.story}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                        errors.story ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Share your local story, tradition, oral history, or cultural memory..."
                    />
                    {errors.story && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.story}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <FiImage className="inline mr-2" />
                      Related Photos
                    </label>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, "storyPhotos")}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                    {formData.storyPhotos.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {formData.storyPhotos.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 p-2 rounded"
                          >
                            <span className="text-sm text-gray-600">
                              {file.name}
                            </span>
                            <button
                              type="button"
                              onClick={() => removeFile(index, "storyPhotos")}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FiX size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      {createPortal(modalContent, document.body)}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default JoinMovementForm;
