// Generate on-brand images for Amanda Telford Fitness using Google Imagen.
// Reads GOOGLE_GENERATIVE_AI_API_KEY from the repo-root .env.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const repoEnvPath = 'C:/Users/Zac/OneDrive/ZCubed/.env'

function loadEnv(envPath) {
  const text = fs.readFileSync(envPath, 'utf8')
  const out = {}
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/)
    if (!m) continue
    let v = m[2]
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    out[m[1]] = v
  }
  return out
}

const env = loadEnv(repoEnvPath)
const apiKey = env.GOOGLE_GENERATIVE_AI_API_KEY
if (!apiKey) {
  console.error('GOOGLE_GENERATIVE_AI_API_KEY missing from .env')
  process.exit(1)
}

const jobs = [
  {
    outFile: 'hero.jpg',
    aspectRatio: '3:4',
    prompt:
      'Editorial photograph of a vibrant indoor dance fitness class in full swing. A group of women in their 30s–60s, diverse body types and ethnicities, holding glowing neon pink and purple light sticks raised in the air, mid-dance. Atmospheric dark community hall with colourful club lighting — magenta and electric violet beams cutting through a slight haze. Joyful, smiling faces, genuine movement, motion blur on arms. One central woman in the foreground slightly out of focus, others behind. Shot on a 50mm lens, shallow depth of field, cinematic colour grading with rich magenta and deep plum shadows, warm skin tones. Absolutely no text, no logos, no watermarks, no captions. Looks like a real photo, not illustration.',
  },
  {
    outFile: 'about.jpg',
    aspectRatio: '3:4',
    prompt:
      'Warm editorial portrait of a friendly female dance fitness instructor in her 40s, British, athletic but approachable build, shoulder-length dark hair, smiling naturally at the camera. Wearing a black fitted workout top. Standing in a community hall interior with soft magenta and warm pink ambient light behind her creating a bokeh of colourful class lights. Slight lens flare. Warm, inviting, confident pose — hands relaxed. Shot on a 85mm lens, shallow depth of field, cinematic colour grading leaning plum and coral tones. Absolutely no text, no logos, no watermarks, no captions. Looks like a real professional photograph.',
  },
]

async function generate(job) {
  const model = 'imagen-4.0-generate-001'
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:predict?key=${apiKey}`
  const body = {
    instances: [{ prompt: job.prompt }],
    parameters: {
      sampleCount: 1,
      aspectRatio: job.aspectRatio,
      personGeneration: 'allow_adult',
    },
  }

  console.log(`Generating ${job.outFile} (${job.aspectRatio})...`)
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`${res.status} ${res.statusText}: ${errText}`)
  }
  const data = await res.json()
  const pred = data.predictions?.[0]
  const b64 = pred?.bytesBase64Encoded
  if (!b64) {
    throw new Error(`No image bytes returned: ${JSON.stringify(data).slice(0, 400)}`)
  }
  const outPath = path.join(projectRoot, 'public', job.outFile)
  fs.writeFileSync(outPath, Buffer.from(b64, 'base64'))
  const kb = Math.round(fs.statSync(outPath).size / 1024)
  console.log(`  wrote ${outPath} (${kb} KB)`)
}

for (const job of jobs) {
  await generate(job)
}
console.log('Done.')
