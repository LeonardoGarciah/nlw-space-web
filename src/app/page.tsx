import { User } from 'lucide-react'
import Image from 'next/image'
import nlwLogo from '../../public/images/logo.svg'
import Copyright from '@/components/Copyright'
import HeroSection from '@/components/HeroSection'
import SignIn from '@/components/SignIn'
import EmptyMemories from '@/components/EmptyMemories'
import { cookies } from 'next/headers'
import Profile from '@/components/Profile'

export default function Home() {
  const isAuthenticate = cookies().has('token')

  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className=" relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../../public/images/bg-stars.svg)] bg-cover px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        {isAuthenticate ? <Profile /> : <SignIn />}
        <HeroSection />
        <Copyright />
      </div>
      <div className="flex flex-col bg-[url(../../public/images/bg-stars.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
