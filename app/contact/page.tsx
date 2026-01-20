"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    prayer: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implementation for submitting
    alert("Thank you for your prayer request. We will be praying for you.");
  };

  return (
    <main className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary mb-4 md:mb-6">
            Get in <span className="text-secondary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            We are here to support you in your spiritual journey. Reach out for prayer, questions, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4 md:space-y-6"
          >
            <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 shadow-premium">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 md:mb-6">
                <MapPin size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Visit Us</h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                Plot number 1, Shanti Nagar<br />
                Bhagyalatha Colony, Vanasthapuram<br />
                Hyderabad - 500070, Telangana, India
              </p>
            </div>

            <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 shadow-premium">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 md:mb-6">
                <Phone size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Call Us</h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                96666 66249
              </p>
            </div>

            <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 shadow-premium">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4 md:mb-6">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">Email Us</h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                mail2church@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-6 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-premium"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-6 md:mb-8 text-primary">Send a Prayer Request</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2 mb-8 md:mb-10">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Prayer Request</label>
                <textarea
                  name="prayer"
                  value={formData.prayer}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-xl md:rounded-2xl px-5 md:px-6 py-3 md:py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all resize-none"
                  placeholder="Tell us how we can pray for you..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-primary text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg hover:bg-primary-dark transition-all shadow-premium flex items-center justify-center gap-3 group"
              >
                Submit Request
                <Send size={18} className="md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
