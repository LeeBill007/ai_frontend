// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: 'https://8011-124-218-35-177.ngrok-free.app',
          changeOrigin: true,
          secure: false,
          // rewrite: path => path.replace(/^\/api/, '')
        }
      }
    }
  },
  // nitro: {
  //   devProxy: {
  //     '/api': {
  //       target: 'https://8011-124-218-35-177.ngrok-free.app',
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // },
  // routeRules: {
  //   '/api/**': {
  //     proxy: 'https://8011-124-218-35-177.ngrok-free.app/api/**',
  //   }
  // },
  'components': {
    "dirs": [
      {
        "path": "~/components/global",
        "global": true
      }
    ]
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: '/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: '/js/bootstrap.min.js',
          tagPosition: 'bodyClose'
        },
        {
          src: '/js/footer.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  css: ['@/assets/css/common.css', '@/assets/css/sweetalert2.min.css'],
})
