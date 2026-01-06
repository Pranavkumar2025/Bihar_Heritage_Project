import React, { useState, useEffect } from "react";
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
  FiCheck,
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

  // Update actionType when selectedAction changes (ensures pre-selection from card click)
  useEffect(() => {
    setFormData((prev) => ({ ...prev, actionType: selectedAction || "" }));
  }, [selectedAction]);

  // Lock background scroll when modal is open (professional fix)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.actionType)
      newErrors.actionType = "Please select an action type";

    if (formData.actionType === "volunteer" && !formData.pledge.trim()) {
      newErrors.pledge = "Pledge is required";
    }

    if (formData.actionType === "report") {
      if (!formData.location.trim()) newErrors.location = "Location is required";
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
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
        onClick={onClose}
        onWheel={(e) => e.stopPropagation()}           // ← Prevent mouse wheel pass-through
  onTouchMove={(e) => e.stopPropagation()}   
      >
        {/* Modal Container - Constrained Height + Internal Scroll */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="bg-[#fdf5e6] rounded-xl shadow-2xl border-4 border-double border-amber-600 w-full max-w-3xl max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fixed Header */}
          <div className="bg-gradient-to-br from-amber-900 to-amber-700 text-amber-100 px-6 py-8 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold tracking-wide">
                  Join the Heritage Movement
                </h2>
                <p className="mt-1 text-amber-200 text-lg font-serif">
                  Help preserve our shared cultural legacy
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 bg-amber-800/50 hover:bg-amber-800/70 rounded-full transition-all"
                aria-label="Close form"
              >
                <FiX size={24} />
              </button>
            </div>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto flex-1 px-6 py-8">
            <form onSubmit={handleSubmit} className="space-y-8 pb-8">
              {/* Personal Information */}
              <section className="bg-white/50 rounded-lg p-6 border-2 border-amber-300 shadow-md">
                <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4 flex items-center">
                  <FiUser className="mr-2 text-amber-600" size={24} />
                  Your Details
                </h3>
                <hr className="border-amber-300 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                      <FiUser className="mr-2 text-amber-600" size={16} />
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.name ? "border-red-400" : "border-amber-300"
                      } focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all bg-white`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                      <FiPhone className="mr-2 text-amber-600" size={16} />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.phone ? "border-red-400" : "border-amber-300"
                      } focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all bg-white`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                      <FiMail className="mr-2 text-amber-600" size={16} />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.email ? "border-red-400" : "border-amber-300"
                      } focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all bg-white`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
              </section>

              {/* Action Type Selection */}
              <section className="bg-white/50 rounded-lg p-6 border-2 border-amber-300 shadow-md">
                <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                  <FiFileText className="mr-2 text-amber-600" size={16} />
                  How would you like to contribute? <span className="text-red-500">*</span>
                </label>
                <select
                  name="actionType"
                  value={formData.actionType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.actionType ? "border-red-400" : "border-amber-300"
                  } focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all bg-white font-serif`}
                >
                  <option value="">Select an action</option>
                  {actionTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.actionType && <p className="text-red-600 text-sm mt-1">{errors.actionType}</p>}
              </section>

              {/* Conditional Fields */}
              <AnimatePresence mode="wait">
                {formData.actionType === "volunteer" && (
                  <motion.section
                    key="volunteer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/50 rounded-lg p-6 border-2 border-amber-300 shadow-md space-y-6"
                  >
                    <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                      Volunteer Commitment
                    </h3>
                    <hr className="border-amber-300 mb-4" />
                    <div>
                      <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                        <FiFileText className="mr-2 text-amber-600" size={16} />
                        Your Pledge <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="pledge"
                        value={formData.pledge}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.pledge ? "border-red-400" : "border-amber-300"
                        } focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all bg-white`}
                        placeholder="Share your commitment to heritage preservation..."
                      />
                      {errors.pledge && <p className="text-red-600 text-sm mt-1">{errors.pledge}</p>}
                    </div>
                  </motion.section>
                )}

                {formData.actionType === "report" && (
                  <motion.section
                    key="report"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/50 rounded-lg p-6 border-2 border-amber-300 shadow-md space-y-6"
                  >
                    <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                      Heritage Site Information
                    </h3>
                    <hr className="border-amber-300 mb-4" />
                    <div>
                      <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                        <FiMapPin className="mr-2 text-amber-600" size={16} />
                        Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.location ? "border-red-400" : "border-amber-300"
                        } focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all bg-white`}
                        placeholder="Enter the site location (address, landmarks, GPS)"
                      />
                      {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                        <FiFileText className="mr-2 text-amber-600" size={16} />
                        Site Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="siteDescription"
                        value={formData.siteDescription}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.siteDescription ? "border-red-400" : "border-amber-300"
                        } focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all bg-white`}
                        placeholder="Describe the site, its condition, and historical significance..."
                      />
                      {errors.siteDescription && (
                        <p className="text-red-600 text-sm mt-1">{errors.siteDescription}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                        <FiImage className="mr-2 text-amber-600" size={16} />
                        Site Photos (Optional)
                      </label>
                      <div className="border-2 border-dashed border-amber-400 rounded-lg p-6 text-center hover:border-amber-600 transition-all bg-white/80">
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
                          className="cursor-pointer inline-flex items-center px-5 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all font-serif"
                        >
                          <FiUpload className="mr-2" size={16} />
                          Choose Photos
                        </label>
                        <p className="mt-2 text-sm text-gray-600 font-serif">Or drag and drop images here</p>
                      </div>
                      {formData.sitePhotos.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                          {formData.sitePhotos.map((file, index) => (
                            <div
                              key={index}
                              className="relative group bg-white rounded-md overflow-hidden border border-amber-300 shadow-sm"
                            >
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="w-full h-28 object-cover"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                  type="button"
                                  onClick={() => removeFile(index, "sitePhotos")}
                                  className="p-1.5 bg-red-600 text-white rounded-full hover:bg-red-700"
                                >
                                  <FiX size={14} />
                                </button>
                              </div>
                              <p className="text-xs p-1 text-center truncate bg-amber-50 font-serif">{file.name}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.section>
                )}

                {formData.actionType === "preserve" && (
                  <motion.section
                    key="preserve"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white/50 rounded-lg p-6 border-2 border-amber-300 shadow-md space-y-6"
                  >
                    <h3 className="text-2xl font-serif font-bold text-amber-900 mb-4">
                      Story Preservation
                    </h3>
                    <hr className="border-amber-300 mb-4" />
                    <div>
                      <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                        <FiFileText className="mr-2 text-amber-600" size={16} />
                        Your Story <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="story"
                        value={formData.story}
                        onChange={handleInputChange}
                        rows={7}
                        className={`w-full px-4 py-3 rounded-md border ${
                          errors.story ? "border-red-400" : "border-amber-300"
                        } focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all bg-white`}
                        placeholder="Share your local story, tradition, or cultural memory..."
                      />
                      {errors.story && <p className="text-red-600 text-sm mt-1">{errors.story}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-serif font-medium text-gray-800 mb-2 flex items-center">
                        <FiImage className="mr-2 text-amber-600" size={16} />
                        Related Photos (Optional)
                      </label>
                      <div className="border-2 border-dashed border-amber-400 rounded-lg p-6 text-center hover:border-amber-600 transition-all bg-white/80">
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
                          className="cursor-pointer inline-flex items-center px-5 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-all font-serif"
                        >
                          <FiUpload className="mr-2" size={16} />
                          Choose Photos
                        </label>
                        <p className="mt-2 text-sm text-gray-600 font-serif">Or drag and drop images here</p>
                      </div>
                      {formData.storyPhotos.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                          {formData.storyPhotos.map((file, index) => (
                            <div
                              key={index}
                              className="relative group bg-white rounded-md overflow-hidden border border-amber-300 shadow-sm"
                            >
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="w-full h-28 object-cover"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button
                                  type="button"
                                  onClick={() => removeFile(index, "storyPhotos")}
                                  className="p-1.5 bg-red-600 text-white rounded-full hover:bg-red-700"
                                >
                                  <FiX size={14} />
                                </button>
                              </div>
                              <p className="text-xs p-1 text-center truncate bg-amber-50 font-serif">{file.name}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>

              {/* Fixed Submit Buttons at Bottom */}
              <div className="flex flex-col sm:flex-row gap-4 justify-end pt-6 border-t-2 border-amber-300">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border-2 border-amber-400 text-amber-800 rounded-md hover:bg-amber-100 font-serif font-medium transition-all shadow-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-md font-serif font-medium hover:from-amber-800 hover:to-amber-950 shadow-md hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <FiCheck className="mr-2" size={18} />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
};

export default JoinMovementForm;