"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "intro", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: 360,
      transition: { duration: 0.6 },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      color: "#ffffff",
      transition: { type: "spring", stiffness: 400 },
    },
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md border-b border-indigo-400/30 shadow-lg shadow-indigo-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            variants={logoVariants}
            whileHover="hover"
            onClick={() => scrollToSection("intro")}
          >
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(99, 102, 241, 0.3)",
                  "0 0 30px rgba(99, 102, 241, 0.6)",
                  "0 0 20px rgba(99, 102, 241, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <motion.span
              className="text-xl font-bold text-white font-display"
              animate={{
                textShadow: [
                  "0 0 10px rgba(99, 102, 241, 0.5)",
                  "0 0 20px rgba(99, 102, 241, 0.8)",
                  "0 0 10px rgba(99, 102, 241, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Portfolio
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                custom={index}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className="relative px-6 py-2 text-slate-300 transition-colors font-medium text-sm group"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg border border-indigo-400/30 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-300 hover:text-white border border-indigo-400/30 hover:border-indigo-400/60"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-indigo-400/20"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-slate-300 hover:text-white hover:bg-indigo-500/10 transition-all duration-200 font-medium border-l-2 border-transparent hover:border-indigo-400"
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
