import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'

// Plugin to create 404.html for GitHub Pages SPA routing
const create404Plugin = () => {
  return {
    name: 'create-404',
    writeBundle(options) {
      const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      var pathSegmentsToKeep = 1;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>`
      const outDir = options.dir || join(process.cwd(), 'dist')
      writeFileSync(join(outDir, '404.html'), html)
    }
  }
}

export default defineConfig({
  plugins: [react(), create404Plugin()],
  base: '/personal_website/',
})