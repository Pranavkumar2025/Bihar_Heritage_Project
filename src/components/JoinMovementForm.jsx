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
    pledge: "",
    location: "",
    siteDescription: "",
    sitePhotos: [],
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
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.actionType) newErrors.actionType = "Please select an action type";

    if (formData.actionType === "volunteer" && !formData.pledge.trim()) {
      newErrors.pledge = "Pledge is required";
    }

    if (formData.actionType === "report") {
      if (!formData.location.trim()) newErrors.location = "Location is required";
      if (!formData.siteDescription.trim()) newErrors.siteDescription = "Site description is required";
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
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-[10000] mx-auto my-auto scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-6 rounded-t-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">
                Join the Heritage Movement
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-indigo-700 rounded-full transition-colors"
                aria-label="Close form"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Personal Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-indigo-900 border-b border-indigo-200 pb-3">
                Your Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <FiUser className="mr-2 text-indigo-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your full name"
                    aria-required="true"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <FiPhone className="mr-2 text-indigo-600" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your phone number"
                    aria-required="true"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                    <FiMail className="mr-2 text-indigo-600" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                    placeholder="Enter your email address"
                    aria-required="true"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Action Type Selection */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <FiFileText className="mr-2 text-indigo-600" />
                How would you like to contribute? *
              </label>
              <select
                name="actionType"
                value={formData.actionType}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                  errors.actionType ? "border-red-500" : "border-gray-200"
                }`}
                aria-required="true"
              >
                <option value="">Select an action</option>
                {actionTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.actionType && (
                <p className="text-red-500 text-xs mt-1">{errors.actionType}</p>
              )}
            </div>

            {/* Conditional Fields */}
            <AnimatePresence>
              {formData.actionType === "volunteer" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-indigo-900 border-b border-indigo-200 pb-3">
                    Volunteer Commitment
                  </h3>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiFileText className="mr-2 text-indigo-600" />
                      Your Pledge *
                    </label>
                    <textarea
                      name="pledge"
                      value={formData.pledge}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                        errors.pledge ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Share your commitment to heritage preservation..."
                      aria-required="true"
                    />
                    {errors.pledge && (
                      <p className="text-red-500 text-xs mt-1">{errors.pledge}</p>
                    )}
                  </div>
                </motion.div>
              )}

              {formData.actionType === "report" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-indigo-900 border-b border-indigo-200 pb-3">
                    Heritage Site Information
                  </h3>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiMapPin className="mr-2 text-indigo-600" />
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                        errors.location ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Enter the site location (address, landmarks, GPS)"
                      aria-required="true"
                    />
                    {errors.location && (
                      <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiFileText className="mr-2 text-indigo-600" />
                      Site Description *
                    </label>
                    <textarea
                      name="siteDescription"
                      value={formData.siteDescription}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                        errors.siteDescription ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Describe the site, its condition, and historical significance..."
                      aria-required="true"
                    />
                    {errors.siteDescription && (
                      <p className="text-red-500 text-xs mt-1">{errors.siteDescription}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiImage className="mr-2 text-indigo-600" />
                      Site Photos (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "sitePhotos")}
                        className="hidden"
                        id="sitePhotos"
                      />
                      <label
                        htmlFor="sitePhotos"
                        className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <FiUpload className="mr-2 text-indigo-600" />
                        <span className="text-sm text-gray-600">Upload Photos</span>
                      </label>
                    </div>
                    {formData.sitePhotos.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {formData.sitePhotos.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-100 p-2 rounded-lg"
                          >
                            <span className="text-sm text-gray-600 truncate">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index, "sitePhotos")}
                              className="text-red-500 hover:text-red-700 p-1"
                              aria-label={`Remove ${file.name}`}
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
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-indigo-900 border-b border-indigo-200 pb-3">
                    Story Preservation
                  </h3>
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiFileText className="mr-2 text-indigo-600" />
                      Your Story *
                    </label>
                    <textarea
                      name="story"
                      value={formData.story}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                        errors.story ? "border-red-500" : "border-gray-200"
                      }`}
                      placeholder="Share your local story, tradition, or cultural memory..."
                      aria-required="true"
                    />
                    {errors.story && (
                      <p className="text-red-500 text-xs mt-1">{errors.story}</p>
                    )}
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                      <FiImage className="mr-2 text-indigo-600" />
                      Related Photos (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, "storyPhotos")}
                        className="hidden"
                        id="storyPhotos"
                      />
                      <label
                        htmlFor="storyPhotos"
                        className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                      >
                        <FiUpload className="mr-2 text-indigo-600" />
                        <span className="text-sm text-gray-600">Upload Photos</span>
                      </label>
                    </div>
                    {formData.storyPhotos.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {formData.storyPhotos.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-100 p-2 rounded-lg"
                          >
                            <span className="text-sm text-gray-600 truncate">{file.name}</span>
                            <button
                              type="button"
                              onClick={() => removeFile(index, "storyPhotos")}
                              className="text-red-500 hover:text-red-700 p-1"
                              aria-label={`Remove ${file.name}`}
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
            <div className="flex justify-end space-x-4 pt-6 border-t border-indigo-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 text-gray-600 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-colors"
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