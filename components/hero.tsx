"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowDown, Zap, Shield, Cpu, Code, Palette, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.section
      ref={ref}
      id="intro"
      className="min-h-screen flex items-center justify-center relative overflow-hidden noise-bg"
      style={{ y, opacity, scale }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"
        animate={{
          background: [
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
            "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Animated Grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </motion.div>

      {/* Floating Orbs with Framer Motion */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scanning Lines */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
        />
        <motion.div
          className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
            {/* Profile Section */}
            <motion.div
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="relative"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative w-72 h-72 lg:w-96 lg:h-96">
                {/* Holographic Frame */}
                <motion.div
                  className="absolute inset-0 border-2 border-indigo-400/50 rounded-lg"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(99, 102, 241, 0.3)",
                      "0 0 40px rgba(99, 102, 241, 0.6)",
                      "0 0 20px rgba(99, 102, 241, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Corner Brackets with Framer Motion */}
                {[
                  { top: -2, left: -2, rotate: 0 },
                  { top: -2, right: -2, rotate: 90 },
                  { bottom: -2, right: -2, rotate: 180 },
                  { bottom: -2, left: -2, rotate: 270 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 border-l-2 border-t-2 border-indigo-400"
                    style={{ ...pos }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.2, 0.8],
                      rotate: pos.rotate,
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                {/* Profile Image */}
                <motion.div
                  className="relative w-full h-full overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    fill
                    className="object-cover filter brightness-110 contrast-110"
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                {/* Scanning Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent h-8"
                  animate={{ y: [0, 350, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>

              {/* Status Indicators */}
              <div className="absolute -right-4 top-4 space-y-2">
                {[
                  { icon: Zap, color: "text-yellow-400", label: "Active" },
                  { icon: Shield, color: "text-green-400", label: "Secure" },
                  { icon: Cpu, color: "text-blue-400", label: "Processing" },
                ].map(({ icon: Icon, color, label }, i) => (
                  <motion.div
                    key={label}
                    className={`flex items-center space-x-2 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-indigo-400/30 ${color}`}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{
                      delay: 1.5 + i * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, x: -5 }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Icon className="w-3 h-3" />
                    </motion.div>
                    <span className="text-xs font-mono">{label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="space-y-6"
              >
                {/* Name with enhanced animation */}
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1.2,
                    delay: 1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(99, 102, 241, 0.8)",
                  }}
                >
                  <motion.span
                    className="gradient-text"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    NAMA ANDA
                  </motion.span>
                </motion.h1>

                {/* Subtitle with Typewriter */}
                <motion.div
                  className="text-xl md:text-2xl text-indigo-300 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  <TypeAnimation
                    sequence={[
                      "Full Stack Developer",
                      2000,
                      "UI/UX Designer",
                      2000,
                      "Creative Technologist",
                      2000,
                      "Digital Innovator",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Number.POSITIVE_INFINITY}
                  />
                </motion.div>

                {/* Skills Icons */}
                <motion.div
                  className="flex justify-center lg:justify-start space-x-6 my-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  {[
                    { icon: Code, label: "Development", color: "from-blue-500 to-cyan-500" },
                    { icon: Palette, label: "Design", color: "from-purple-500 to-pink-500" },
                    { icon: Rocket, label: "Innovation", color: "from-green-500 to-emerald-500" },
                  ].map(({ icon: Icon, label, color }, index) => (
                    <motion.div
                      key={label}
                      className="flex flex-col items-center group cursor-pointer"
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 2 + index * 0.2 }}
                      whileHover={{
                        scale: 1.1,
                        y: -5,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      variants={pulseVariants}
                      animate="animate"
                    >
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mb-2 shadow-lg`}
                        whileHover={{
                          boxShadow: "0 10px 30px rgba(99, 102, 241, 0.4)",
                          rotate: 360,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-lg text-slate-300 leading-relaxed font-light max-w-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2 }}
                >
                  Seorang developer yang passionate dalam menciptakan pengalaman digital yang memukau. Menggabungkan
                  teknologi modern dengan desain yang elegan untuk menghadirkan solusi yang tidak hanya fungsional,
                  tetapi juga menginspirasi.
                </motion.p>

                {/* CTA Button */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={scrollToProjects}
                      className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg border border-indigo-400/50 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                    >
                      <motion.span
                        className="relative z-10 flex items-center"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        Explore My Work
                        <motion.div
                          animate={{ y: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowDown className="ml-2 w-5 h-5" />
                        </motion.div>
                      </motion.span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.05 }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={scrollToProjects}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-indigo-400 to-transparent" />
          <motion.div
            className="w-2 h-2 bg-indigo-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
          <span className="text-xs text-slate-400 font-medium">Scroll</span>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
