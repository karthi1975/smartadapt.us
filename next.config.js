/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build the whole site as plain HTML, CSS and JS files (into `out/`, which the build script
  // renames to `dist/`). smartadapt.us serves those files as a static site on DigitalOcean.
  output: 'export',
  images: {
    // A static host has no image server, so images are served as the files in public/.
    unoptimized: true,
  },
}

module.exports = nextConfig
