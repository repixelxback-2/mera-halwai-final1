/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration
  images: {
    // Define device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Define image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable SVG support
    dangerouslyAllowSVG: true,
    // Set content disposition type
    contentDispositionType: 'attachment',
    // Set content security policy for SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Set minimum cache TTL
    minimumCacheTTL: 60,
    // Set formats
    formats: ['image/webp', 'image/avif'],
  },
  
  // Experimental features
  experimental: {
    // Enable optimized font loading
    optimizeFonts: true,
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react'],
    // Enable server actions
    serverActions: true,
  },
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Optimize SVG loading
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
};

export default nextConfig;
