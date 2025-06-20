"use client"

import type React from "react"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github, Play, Zap, Lock, Database, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "Modern Shopping Experience",
    description:
      "Platform e-commerce dengan fitur AI recommendations, real-time analytics, dan sistem pembayaran yang aman dan terintegrasi.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    status: "Live",
    classification: "Commercial",
    featured: true,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Task Management App",
    subtitle: "Collaborative Productivity",
    description:
      "Aplikasi manajemen tugas dengan real-time collaboration, advanced scheduling, dan AI-powered productivity insights.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    status: "Beta",
    classification: "SaaS",
    featured: true,
    rating: 4.6,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    subtitle: "Atmospheric Intelligence",
    description: "Dashboard cuaca dengan visualisasi data real-time, prediksi akurat, dan interface yang intuitif.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "D3.js", "OpenWeather API", "Chart.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    status: "Stable",
    classification: "Open Source",
    featured: false,
    rating: 4.4,
  },
  {
    id: 4,
    title: "Portfolio Website",
    subtitle: "Digital Identity",
    description: "Portfolio interaktif dengan animasi modern, responsive design, dan performance yang optimal.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project",
    status: "Active",
    classification: "Personal",
    featured: false,
    rating: 4.9,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 relative noise-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-display font-black mb-6 text-white"
            animate={{
              textShadow: [
                "0 0 20px rgba(99, 102, 241, 0.5)",
                "0 0 30px rgba(99, 102, 241, 0.8)",
                "0 0 20px rgba(99, 102, 241, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            A showcase of innovative solutions and creative implementations that demonstrate my passion for building
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
        </motion.div>

        {/* Regular Projects */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ project, featured = false }: { project: any; featured?: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]))
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]))

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const statusColors = {
    Live: "text-green-400 bg-green-400/10 border-green-400/30",
    Beta: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    Stable: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    Active: "text-purple-400 bg-purple-400/10 border-purple-400/30",
  }

  const classificationIcons = {
    Commercial: Database,
    SaaS: Zap,
    "Open Source": Lock,
    Personal: Play,
  }

  const ClassificationIcon = classificationIcons[project.classification as keyof typeof classificationIcons]

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ z: 50 }}
      className="group perspective-1000"
    >
      <Card className="bg-slate-900/50 border border-indigo-400/30 backdrop-blur-sm overflow-hidden relative transition-all duration-500 hover:border-indigo-400/60">
        {/* Header */}
        <motion.div
          className="p-4 border-b border-indigo-400/20 bg-slate-800/50"
          animate={isHovered ? { backgroundColor: "rgba(30, 27, 75, 0.7)" } : {}}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <motion.div animate={isHovered ? { rotate: 360 } : {}} transition={{ duration: 0.6 }}>
                <ClassificationIcon className="w-4 h-4 text-indigo-400" />
              </motion.div>
              <span className="text-xs font-medium text-slate-400">{project.classification}</span>
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-yellow-400 font-medium">{project.rating}</span>
              </div>
            </div>
            <motion.div
              className={`px-3 py-1 rounded-full border text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            >
              {project.status}
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <div className="relative overflow-hidden h-48 md:h-56">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"
            animate={isHovered ? { opacity: 0.8 } : { opacity: 0.4 }}
          />

          {/* Scanning Lines */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent"
                style={{ top: `${30 + i * 30}%` }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex space-x-2"
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="sm"
                className="bg-slate-800/80 backdrop-blur-sm border border-indigo-400/50 hover:bg-indigo-600/50 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="sm"
                className="bg-slate-800/80 backdrop-blur-sm border border-indigo-400/50 hover:bg-indigo-600/50 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <CardContent className="p-6 space-y-4">
          <div>
            <motion.h3
              className="text-xl font-bold text-white font-display mb-1 group-hover:text-indigo-300 transition-colors"
              whileHover={{ x: 5 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-sm text-indigo-400 font-medium">{project.subtitle}</p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex space-x-3 pt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 font-medium text-xs shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                <Play className="w-3 h-3 mr-2" />
                View Live
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="outline"
                className="border-indigo-400/30 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400/60 font-medium text-xs transition-all duration-300"
              >
                <Github className="w-3 h-3 mr-2" />
                Source
              </Button>
            </motion.div>
          </div>
        </CardContent>

        {/* Holographic Corner */}
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 overflow-hidden"
          animate={isHovered ? { opacity: 1 } : { opacity: 0.3 }}
        >
          <motion.div
            className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-transparent rotate-45"
            animate={isHovered ? { scale: 1.5, rotate: 45 } : { scale: 1, rotate: 45 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Card>
    </motion.div>
  )
}
