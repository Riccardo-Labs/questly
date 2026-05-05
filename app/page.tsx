'use client'

import { useState } from 'react'
import { Hero } from '@/components/sections/Hero'
import { LogoBar } from '@/components/sections/LogoBar'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { Services } from '@/components/sections/Services'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { WhyQuestly } from '@/components/sections/WhyQuestly'
import { Faq } from '@/components/sections/Faq'
import { FinalCta } from '@/components/sections/FinalCta'
import { ContactModal } from '@/components/ui/ContactModal'

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false)
  const open = () => setModalOpen(true)
  const close = () => setModalOpen(false)

  return (
    <>
      <Hero onContactOpen={open} />
      <LogoBar />
      <Problem />
      <Solution />
      <Services />
      <Faq />
      <FinalCta onContactOpen={open} />
      <ContactModal isOpen={modalOpen} onClose={close} />
    </>
  )
}
