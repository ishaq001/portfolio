import Clients from "@/components/Clients"
import Experience from "@/components/Experience"
import Grid from "@/components/Grid"
import Hero from "@/components/Hero"
import RecentProjects from "@/components/RecentProjects"
import { FloatingNav } from "@/components/ui/FloatingNav"
import { navItems } from "@/data"

export default function Home() {
  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mr-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <FloatingNav
          className=' w-full'
          navItems={[
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Testimonials", link: "#testimonials" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
      </div>
    </main>
  )
}
