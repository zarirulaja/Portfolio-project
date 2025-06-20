"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Youtube, Mail, MessageCircle } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/zarirulaja",
    color: "hover:text-slate-300",
    description: "My Code & Projects",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/zarirul_/",
    color: "hover:text-pink-400",
    description: "My Daily Life",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://www.youtube.com/@izza6426",
    color: "hover:text-red-400",
    description: "My Videos & Tutorials",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/6285904390140",
    color: "hover:text-green-400",
    description: "Contact Me Directly",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:izzaahmad73@gmail.com",
    color: "hover:text-amber-400",
    description: "Send Me an Email",
  },
]

export function SocialLinks() {
  return (
    <section id="contact" className="py-20 px-6 relative noise-bg">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4 text-white glow-text font-mono"
            animate={{
              textShadow: [
                "0 0 10px rgba(99, 102, 241, 0.5)",
                "0 0 20px rgba(99, 102, 241, 0.8)",
                "0 0 10px rgba(99, 102, 241, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            [CONNECT_PROTOCOL]
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-mono">
            &gt; Establishing communication channels...
          </p>
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to collaborate on the next breakthrough project? Let's create something extraordinary together.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative flex flex-col items-center justify-center p-6 w-32 h-32 bg-slate-900/50 border border-indigo-400/30 backdrop-blur-sm text-slate-400 transition-all duration-300 ${social.color} hover:border-current hover:shadow-lg hover:shadow-current/25 glow-border group-hover:bg-slate-800/70`}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Corner Brackets */}
                <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-current opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col items-center justify-center h-full">
                  <social.icon className="w-8 h-8 mb-3" />
                  <span className="text-xs font-mono font-bold text-center">{social.description}</span>
                  <span className="text-xs text-slate-500 mt-1">{social.name}</span>
                </div>

                {/* Scanning Line */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-mono text-lg border border-indigo-400/50 glow-border group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-pulse" />
            [INITIATE_CONTACT]
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-indigo-400/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm font-mono">
            <p>&copy; 2025 ZARIRUL. All systems operational.</p>
            <p className="mt-2 md:mt-0">Built with Next.js • Powered by imagination</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
