import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'

export const metadata: Metadata = { title: 'Page not found' }

/*
 * The static host answers /about (no trailing slash) with this page, because it only serves
 * /about/ from about/index.html. Send those visitors to the slash version, which exists.
 * A path that already ends in / is a real miss, so it stays here and cannot loop.
 */
const addTrailingSlash = `(function(){var p=location.pathname;if(p.charAt(p.length-1)!=='/'&&p.split('/').pop().indexOf('.')===-1){location.replace(p+'/'+location.search+location.hash)}})();`

export default function NotFound() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: addTrailingSlash }} />
      <PageHero
      eyebrow="404"
      title="We can’t find that page"
      lead="The link may be out of date, or the page may have moved."
      actions={[
        { label: 'Go to the homepage', href: '/' },
        { label: 'Contact us', href: '/contact' },
      ]}
      />
    </>
  )
}
