"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Instagram,
  ArrowUpRight,
  Church,
  Heart,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Contact: React.FC = () => {
  return (
    <main className="pt-32 pb-24 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Scripture Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
            <Heart className="text-secondary fill-secondary/20" size={24} />
          </div>
          <p className="text-primary/60 italic font-medium text-center max-w-lg leading-relaxed">
            "For where two or three are gathered together in my name, there am I
            in the midst of them."
            <span className="block mt-2 font-bold not-italic text-xs uppercase tracking-[0.2em]">
              Matthew 18:20
            </span>
          </p>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary mb-4 md:mb-6">
            Join Our <span className="text-secondary">Fellowship</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            We are here to support you in your spiritual journey. Reach out for
            wisdom, fellowship, or to share how we can grow together in faith.
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
            <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 shadow-premium hover:border-primary/20 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Church size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                Worship With Us
              </h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                Plot number 1, Shanti Nagar
                <br />
                Bhagyalatha Colony, Vanasthapuram
                <br />
                Hyderabad - 500070, Telangana, India
              </p>
            </div>

            <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 shadow-premium hover:border-secondary/20 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Phone size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                Speak With Us
              </h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                96666 66249
              </p>
            </div>

            <div className="glass p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-primary/5 shadow-premium hover:border-accent/20 transition-colors group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                <Mail size={20} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                Write To Us
              </h3>
              <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed">
                mail2church@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50/50 p-6 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-premium h-full relative overflow-hidden backdrop-blur-sm">
              {/* Subtle Cross Pattern in background of the card */}
              <div className="absolute top-10 right-10 opacity-[0.03] select-none pointer-events-none">
                <Church size={200} />
              </div>

              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 text-primary">
                Digital Ministry
              </h2>
              <p className="text-gray-500 mb-8 md:mb-10 max-w-lg leading-relaxed font-light">
                Stay updated with our latest messages, daily inspiration, and
                special events.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative z-10">
                {[
                  {
                    name: "Facebook",
                    icon: Facebook,
                    href: "https://www.facebook.com/Epaphrasministrieshyd/",
                    color: "bg-blue-600",
                    label: "Join the conversation",
                  },
                  {
                    name: "YouTube",
                    icon: Youtube,
                    href: "https://www.youtube.com/channel/UCtBqdgXf6fmgAVYT1X-_aDA",
                    color: "bg-red-600",
                    label: "Watch our messages",
                  },
                  {
                    name: "Instagram",
                    icon: Instagram,
                    href: "https://www.instagram.com/devunisparsha/",
                    color:
                      "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600",
                    label: "Daily inspiration",
                  },
                  {
                    name: "WhatsApp",
                    icon: BsWhatsapp,
                    href: "https://whatsapp.com/channel/0029Va9abgn2phHNWwktr839",
                    color: "bg-green-500",
                    label: "Receive updates",
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col items-start gap-3 md:gap-4"
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${social.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <social.icon size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                        {social.name}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-400 font-medium whitespace-nowrap">
                        {social.label}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                      <ArrowUpRight size={16} className="text-secondary" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Fellowship Note */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                  <Heart size={14} className="text-primary/40" />
                </div>
                <p className="text-xs text-gray-400 font-medium">
                  We look forward to connecting with you and sharing God's love.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
