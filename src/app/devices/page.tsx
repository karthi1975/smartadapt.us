import CTABanner from '@/components/sections/CTABanner'
import PageHero from '@/components/sections/PageHero'
import { FeatureCard } from '@/components/ui/Card'
import Icon from '@/components/ui/Icon'
import ProductCard from '@/components/ui/ProductCard'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import { contactHref, devices, families, inputMethods, pageMetadata } from '@/content/site'

export const metadata = pageMetadata('/devices')

const family = families.find((f) => f.slug === 'devices')!

export default function DevicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hardware"
        title={family.name}
        lead={family.summary}
        media={{
          src: '/images/hospital/digital-lab.jpg',
          alt: 'A clinician showing a patient the sip-and-puff controls in a hospital room',
        }}
        actions={[
          { label: 'Request a quote', href: contactHref({ purpose: 'quote' }) },
          { label: 'How they fit together', href: '#works-together' },
        ]}
        nextBackground="cream"
      />

      <Section background="cream" id="devices">
        <SectionHeading
          eyebrow="Tetradapt hardware"
          title="Five devices, one system"
          lead="Each device runs on its own or as part of a Smart Hospital or Smart Home installation. Ask for a quote on any of them and we will come back with options for your rooms or your home."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {devices.map((device) => (
            <ProductCard key={device.slug} product={device} cta="quote" />
          ))}
        </div>
      </Section>

      <Section id="inputs">
        <SectionHeading
          eyebrow="Supported inputs"
          title="Every way a person can say what they want"
          lead="The devices above are Tetradapt hardware. The system also works with the inputs people already use, from touch screens to eye gaze, so a room can be controlled by whatever works for that person on that day."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {inputMethods.map((method) => (
            <FeatureCard key={method.name} icon={method.icon} title={method.name} description={method.description} />
          ))}
        </div>
      </Section>

      <Section background="cream" id="works-together">
        <SectionHeading
          eyebrow="Works together"
          title="Where each device is used"
          lead="Which devices belong in a hospital room, which belong at home, and which do both."
        />
        <div className="overflow-x-auto rounded-2xl border border-brand-line bg-white">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Tetradapt devices by setting</caption>
            <thead className="bg-brand-cream text-xs uppercase tracking-[0.14em] text-brand-gray">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Device
                </th>
                <th scope="col" className="px-6 py-4 text-center font-semibold">
                  Smart Hospital
                </th>
                <th scope="col" className="px-6 py-4 text-center font-semibold">
                  Smart Home
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-line">
              {devices.map((device) => (
                <tr key={device.slug}>
                  <th scope="row" className="px-6 py-4 font-medium text-brand-black">
                    {device.name}
                  </th>
                  {(['hospital', 'home'] as const).map((track) => (
                    <td key={track} className="px-6 py-4 text-center">
                      {device.tracks.includes(track) ? (
                        <>
                          <Icon name="check" className="mx-auto h-5 w-5 text-brand-red" />
                          <span className="sr-only">Yes</span>
                        </>
                      ) : (
                        <span className="text-brand-gray">
                          <span aria-hidden="true">—</span>
                          <span className="sr-only">No</span>
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-brand-gray">
          Devices connect to the room or home system over Bluetooth or the building network. In a hospital, pairing codes and room
          devices reset on discharge through your ADT feed, so nothing carries over to the next patient.
        </p>
      </Section>

      <CTABanner audience="both" />
    </>
  )
}
