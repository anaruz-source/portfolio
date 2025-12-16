import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function main() {
    console.log('Starting pre-rendering...')
    try {
        const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
        const { render } = await import(toAbsolute('dist/server/entry-server.js'))

        const { html, helmet } = render()

        const helmetHead = `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
    `

        const finalHtml = template
            .replace('<!--app-head-->', helmetHead)
            .replace('<!--app-html-->', html)

        fs.writeFileSync(toAbsolute('dist/index.html'), finalHtml)
        console.log('Pre-rendered dist/index.html')

        // Optional: Remove server build to keep dist clean
        fs.rmSync(toAbsolute('dist/server'), { recursive: true, force: true })
    } catch (e) {
        console.error('Prerender error:', e)
        process.exit(1)
    }
}

main()
