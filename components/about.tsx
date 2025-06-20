"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, Palette, Rocket, Users, Coffee, Heart, Cpu, Shield, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"

const skills = [
  {
    category: "FRONTEND_CORE",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    level: 95,
  },
  {
    category: "BACKEND_SYSTEMS",
    technologies: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    level: 88,
  },
  {
    category: "DESIGN_MATRIX",
    technologies: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Prototyping"],
    icon: Palette,
    color: "from-purple-500 to-pink-500",
    level: 82,
  },
  {
    category: "DEV_TOOLS",
    technologies: ["Git", "Docker", "AWS", "Vercel", "VS Code"],
    icon: Users,
    color: "from-orange-500 to-red-500",
    level: 90,
  },
]

const personalStats = [
  { label: "LOCATION", value: "Jakarta, Indonesia", icon: Shield },
  { label: "EXPERIENCE", value: "3+ Years", icon: Zap },
  { label: "EDUCATION", value: "S1 Teknik Informatika", icon: Cpu },
  { label: "STATUS", value: "Available for Hire", icon: Heart },
]

export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={ref} id="about" className="py-20 px-6 relative noise-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />

      {/* Animated Background Elements */}
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            [SYSTEM_PROFILE]
          </motion.h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto font-mono">
            &gt; Analyzing developer specifications and capabilities...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border border-indigo-400/30 backdrop-blur-sm h-full glow-border">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-mono">[ORIGIN_STORY]</h3>
                </div>

                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p className="font-mono text-sm">
                    <span className="text-indigo-400">&gt;</span> Initializing personal narrative...
                  </p>
                  <p>
                    Perjalanan saya dimulai dari ketertarikan mendalam terhadap bagaimana teknologi dapat mengubah cara
                    manusia berinteraksi dengan dunia digital. Dari coding pertama hingga menciptakan pengalaman yang
                    immersive, setiap baris kode adalah langkah menuju masa depan yang lebih connected.
                  </p>
                  <p>
                    Saya mengkhususkan diri dalam menciptakan interface yang tidak hanya functional, tetapi juga
                    memberikan pengalaman yang memorable dan futuristik. Setiap project adalah eksperimen dalam
                    menggabungkan teknologi cutting-edge dengan human-centered design.
                  </p>

                  <motion.div
                    className="flex items-center text-indigo-300 mt-6 p-3 bg-indigo-500/10 rounded border border-indigo-400/20"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Coffee className="w-5 h-5 mr-2" />
                    <span className="text-sm font-mono">STATUS: Powered by coffee and curiosity</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-900/50 border border-indigo-400/30 backdrop-blur-sm h-full glow-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono">[SYSTEM_SPECS]</h3>
                <div className="space-y-6">
                  {personalStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-indigo-400/20"
                    >
                      <div className="flex items-center">
                        <stat.icon className="w-5 h-5 text-indigo-400 mr-3" />
                        <span className="text-slate-400 font-mono text-sm">{stat.label}:</span>
                      </div>
                      <span className="text-white font-semibold font-mono">{stat.value}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="mt-8 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded border border-indigo-400/20"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(99, 102, 241, 0.1)",
                      "0 0 30px rgba(99, 102, 241, 0.2)",
                      "0 0 20px rgba(99, 102, 241, 0.1)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <p className="text-slate-300 text-sm leading-relaxed font-mono">
                    <span className="text-indigo-400">[CLASSIFIED]</span> Passionate about emerging technologies, AI
                    integration, dan creating digital experiences yang blur the line between reality dan imagination.
                    Currently exploring Web3, AR/VR, dan neural interfaces.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white font-mono glow-text">[CAPABILITY_MATRIX]</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-slate-900/50 border border-indigo-400/30 backdrop-blur-sm h-full group hover:border-indigo-400/60 transition-all duration-300 glow-border">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 font-mono">{skill.category}</h4>

                    {/* Skill Level Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>PROFICIENCY</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {skill.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs border border-indigo-500/30 mr-2 mb-2 font-mono"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
