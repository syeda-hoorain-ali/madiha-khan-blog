// /** 
//  * @type {import('next').NextConfig} 
//  */
// const nextConfig = {
//     images: {
//       domains: ['cdn.sanity.io'],
//     },
//   };
  
//   module.exports = nextConfig;


  /** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
        },
      ],
    },
  };
  
  module.exports = nextConfig;

//chatgpt

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//         port: '',
//         pathname: '/images/**', // Ensure proper image paths are allowed
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
