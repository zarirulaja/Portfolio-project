import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { SocialLinks } from "@/components/social-links"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"

import MusicPlayer from '../components/MusicPlayer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <SocialLinks />
      <MusicPlayer />
    </main>
  )
}
