import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/ui/Container'
import { company, contacts, nav } from '@/content/site'

export default function Footer() {
  return (
    <footer className="on-dark bg-brand-black text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image src="/Logo/Tetradapt-logo-white.webp" alt="Tetradapt" width={180} height={50} className="h-10 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-cream/80">{company.description}</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <a href={`mailto:${contacts.emailGeneral}`} className="font-medium text-brand-cream underline-offset-4 hover:underline">
                  {contacts.emailGeneral}
                </a>
              </li>
              {contacts.phone && (
                <li>
                  <a href={contacts.phone.href} className="font-medium text-brand-cream underline-offset-4 hover:underline">
                    {contacts.phone.display}
                  </a>
                </li>
              )}
              {contacts.address && <li className="text-brand-cream/80">{contacts.address}</li>}
            </ul>
          </div>

          {nav.footer.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="font-display text-base font-medium text-white">{group.heading}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-brand-cream/80 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-brand-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Built with the University of Utah and the Craig H. Neilsen Rehabilitation Hospital.</p>
        </div>
      </Container>
    </footer>
  )
}
