"use client"

import type React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ExternalLink, Github, Play, Zap, Lock, Database, Star, Cpu, Code2, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Sistem Rekrutmen Karyawan",
    subtitle: "Aplikasi Rekrutmen Berbasis Web",
    description:
      "Sistem rekrutmen karyawan berbasis web yang dibangun dengan Laravel dan MySQL, menawarkan manajemen pelamar, jadwal interview, dan tracking kandidat.",
    image: "/projects/recruitment.jpg",
    technologies: ["Laravel", "MySQL", "PHP", "TailwindCSS"],
    liveUrl: "https://rekruitmen-karyawan-production.up.railway.app/",
    githubUrl: "https://github.com/zarirulaja/rekruitmen-karyawan.git",
    status: "Live",
    classification: "Web Application",
    featured: true,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Easy Timer",
    subtitle: "Aplikasi Stopwatch Sederhana",
    description:
      "Aplikasi stopwatch sederhana yang dibangun dengan Python Tkinter, menawarkan antarmuka yang mudah digunakan dengan fungsi dasar stopwatch.",
    image: "/projects/timer.jpg",
    technologies: ["Python", "Tkinter"],
    liveUrl: "https://bisa.ai/portofolio/detail/NjQ0OA",
    githubUrl: "",
    status: "Demo",
    classification: "Desktop Application",
    featured: true,
    rating: 4.0,
  },
  {
    id: 3,
    title: "Sistem Monitoring Suhu",
    subtitle: "Monitoring Suhu Real-time dengan ESP32",
    description:
      "Sistem monitoring suhu menggunakan sensor DHT22 dan ESP32, dengan backend cloud untuk visualisasi data suhu dan kelembaban secara real-time.",
    image: "/projects/temp-monitor.jpg",
    technologies: ["ESP32", "DHT22", "C", "Cloud Computing"],
    liveUrl: "https://bisa.ai/portofolio/detail/NjEyMg",
    githubUrl: "",
    status: "Demo",
    classification: "IoT Project",
    featured: true,
    rating: 4.3,
  }
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

      <div className="container mx-auto relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12 sm:mb-16 px-2"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black mb-4 sm:mb-6 text-white"
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
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            A showcase of innovative solutions and creative implementations that demonstrate my passion for building
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="w-full">
                <ProjectCard project={project} featured />
              </motion.div>
            ))}
        </motion.div>

        {/* Regular Projects */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <motion.div key={project.id} variants={itemVariants} className="w-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  status: string;
  classification: string;
  featured: boolean;
  rating: number;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
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
    "Web Application": Code2,
    "Desktop Application": Cpu,
    "IoT Project": Cpu,
    "Mobile App": Cpu,
    "API Service": Cpu,
    "CLI Tool": Cpu,
    "Game Development": Cpu,
    "Data Science": Cpu,
    "DevOps": Cpu,
    "UI/UX Design": Palette,
    "Other": Code2
  }

  const ClassificationIcon = classificationIcons[project.classification as keyof typeof classificationIcons]

  return (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(prev => !prev)}
      className="group perspective-1000 w-full"
    >
      <Card className="bg-slate-900/50 border border-indigo-400/30 backdrop-blur-sm overflow-hidden relative transition-all duration-300 sm:hover:border-indigo-400/60 h-full">
        {/* Header */}
        <motion.div
          className="p-3 sm:p-4 border-b border-indigo-400/20 bg-slate-800/50"
          animate={isHovered ? { backgroundColor: "rgba(30, 27, 75, 0.7)" } : {}}
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <motion.div 
                animate={isHovered ? { rotate: 360 } : {}} 
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <ClassificationIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
              </motion.div>
              <span className="text-[11px] sm:text-xs font-medium text-slate-400 truncate max-w-[120px] sm:max-w-none">
                {project.classification}
              </span>
              <div className="flex items-center space-x-1 flex-shrink-0">
                <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
                <span className="text-[11px] sm:text-xs text-yellow-400 font-medium">{project.rating}</span>
              </div>
            </div>
            <motion.div
              className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border text-[10px] sm:text-xs font-medium whitespace-nowrap ${statusColors[project.status as keyof typeof statusColors]}`}
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
            >
              {project.status}
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
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
            className="absolute top-2 right-2 sm:top-4 sm:right-4 flex space-x-1 sm:space-x-2"
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {project.liveUrl && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="sm"
                  className="bg-slate-800/80 backdrop-blur-sm border border-indigo-400/50 hover:bg-indigo-600/50 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </motion.div>
            )}
            {project.githubUrl && (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  size="sm"
                  className="bg-slate-800/80 backdrop-blur-sm border border-indigo-400/50 hover:bg-indigo-600/50 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <Github className="w-4 h-4" />
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>

        <CardContent className="p-6 space-y-4 sm:p-8">
          <div className="p-3 sm:p-4">
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="pr-2">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 sm:mb-1 line-clamp-1">{project.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 line-clamp-1">{project.subtitle}</p>
              </div>
              {featured && (
                <div className="bg-indigo-500/20 text-indigo-400 text-[10px] sm:text-xs font-medium px-2 py-0.5 sm:px-3 sm:py-1 rounded-full whitespace-nowrap">
                  Featured
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.technologies.map((tech, index) => (
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
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <span className="text-[10px] sm:text-xs text-slate-500 whitespace-nowrap">
                  {project.status === 'Live' ? 'Live on' : 'Demo at'}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[10px] sm:text-xs text-indigo-400 hover:text-indigo-300 transition-colors flex items-center truncate max-w-[120px] sm:max-w-none border border-indigo-400/30 hover:bg-indigo-500/10 hover:border-indigo-400/60 font-medium h-auto py-1 px-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <Github className="w-3 h-3 mr-1" />
                  Source
                </Button>
              </div>
            </div>
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
