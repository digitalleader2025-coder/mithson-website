import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const API_ROUTES = ['availability', 'book']

// Serves the Vercel functions in /api from the Vite dev server, so booking works with `npm run dev`.
function devApi() {
  return {
    name: 'mithson-dev-api',
    configureServer(server) {
      server.middlewares.use('/api', async (req, res, next) => {
        const route = new URL(req.url, 'http://localhost').pathname.replace(/^\/|\/$/g, '')
        if (!API_ROUTES.includes(route)) return next()
        try {
          const mod = await server.ssrLoadModule(`/api/${route}.js`)
          await mod.default(req, res)
        } catch (err) {
          server.ssrFixStacktrace(err)
          next(err)
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Make .env values (SMTP, Teams, Google, Redis) visible to the dev API handlers
  for (const [key, value] of Object.entries(loadEnv(mode, process.cwd(), ''))) {
    if (process.env[key] === undefined) process.env[key] = value
  }

  return {
    plugins: [react(), devApi()],
    build: {
      // The lazy-loaded 3D library is about 950 kB on its own
      chunkSizeWarningLimit: 1000,
    },
  }
})
