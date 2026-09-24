/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build the whole site as plain HTML, CSS and JS files (into `out/`, which the build script
  // renames to `dist/`). smartadapt.us serves those files as a static site on DigitalOcean.
  output: 'export',
  // Export each page as a folder (about/index.html) and link to /about/. DigitalOcean's static
  // hosting serves /about/ from about/index.html but never maps /about to about.html.
  trailingSlash: true,
  images: {
    // A static host has no image server, so images are served as the files in public/.
    unoptimized: true,
  },
}

module.exports = nextConfig
