import { Suspense } from 'react'
import ContactFormFromQuery from '@/components/forms/ContactFormFromQuery'
import PageHero from '@/components/sections/PageHero'
import ContactChannels from '@/components/ui/ContactChannels'
import Section from '@/components/ui/Section'
import { type } from '@/components/ui/tokens'
import { contacts, pageMetadata } from '@/content/site'
import { cn } from '@/lib/cn'

export const metadata = pageMetadata('/contact')

export default function ContactPage() {
  return (
    <>
      <PageHero
        tone="light"
        eyebrow="Contact"
        title="Let’s talk"
        lead="Request a demo for your facility, plan a system for your home, get support, or ask about research and partnerships. Tell us who it is for and we will route it to the right person."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className={cn(type.h3, 'text-brand-black')}>Reach us directly</h2>
            <ContactChannels className="mt-6" />

            <div className="mt-10 rounded-2xl bg-brand-cream p-6">
              <h3 className={cn(type.h4, 'text-brand-black')}>What happens next</h3>
              <ol className="mt-4 space-y-3 text-sm leading-relaxed text-brand-gray">
                <li className="flex gap-3">
                  <span className="font-display font-medium text-brand-red">1</span>
                  <span>We read your message. {contacts.responseTime}</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-medium text-brand-red">2</span>
                  <span>For a facility, we schedule a live demo and a conversation about your rooms and the systems you run.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-medium text-brand-red">3</span>
                  <span>For a home, we set up a call with you and the people who help you, then design around their abilities.</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="lg:col-span-3" id="form">
            <Suspense fallback={<div className="rounded-2xl border border-brand-line bg-white p-8 text-brand-gray">Loading the form…</div>}>
              <ContactFormFromQuery source="/contact" />
            </Suspense>
          </div>
        </div>
      </Section>
    </>
  )
}
