import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'lh3.googleusercontent.com',
              pathname: '/**',
          },
          {
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
              pathname: '/**',
          },
      ],
    },
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMDX(nextConfig)

// module.exports = nextConfig
