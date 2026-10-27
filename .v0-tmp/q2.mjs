import fs from 'fs'
const sp = {
  'rolinha-roxa': 'Columbina talpacoti', 'risadinha': 'Camptostoma obsoletum', 'sabia-do-campo': 'Mimus saturninus',
  'sai-andorinha': 'Tersina viridis', 'sanhacu-cinzento': 'Thraupis sayaca', 'sanhaco-do-coqueiro': 'Thraupis palmarum',
  'tie-preto': 'Tachyphonus coronatus', 'trinca-ferro': 'Saltator similis', 'tucano-de-bico-verde': 'Ramphastos dicolorus',
  'tucanucu': 'Ramphastos toco', 'alma-de-gato': 'Piaya cayana', 'andorinha-serradora': 'Stelgidopteryx ruficollis',
  'irere': 'Dendrocygna viduata', 'joao-de-barro': 'Furnarius rufus',
}
const H = { headers: { 'User-Agent': 'DiagnosticoTCC/1.0 (https://github.com/Bry4n19/diagnostico; educational)' } }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const strip = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
async function get(url) {
  for (let i = 0; i < 6; i++) {
    const res = await fetch(url, H)
    const txt = await res.text()
    try { return JSON.parse(txt) } catch { await sleep(8000 * (i + 1)) }
  }
  throw new Error('rate limited: ' + url)
}
const F = '/tmp/wm.json'
const out = fs.existsSync(F) ? JSON.parse(fs.readFileSync(F, 'utf8')) : {}
for (const [id, n] of Object.entries(sp)) {
  if (out[id]?.thumb) continue
  try {
    await sleep(3000)
    const r = await get(`https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&piprop=name&titles=${encodeURIComponent(n)}`)
    const p = Object.values(r.query.pages)[0]
    await sleep(3000)
    const m = await get(`https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=1600&titles=File:${encodeURIComponent(p.pageimage)}`)
    const ii = Object.values(m.query.pages)[0].imageinfo?.[0]
    const e = ii?.extmetadata || {}
    out[id] = { n, title: p.title, file: p.pageimage, thumb: ii?.thumburl, page: ii?.descriptionurl, artist: strip(e.Artist?.value), lic: strip(e.LicenseShortName?.value) }
    fs.writeFileSync(F, JSON.stringify(out, null, 1))
    console.log(id, '|', p.title, '|', p.pageimage, '|', out[id].artist, '|', out[id].lic)
  } catch (err) {
    console.log('ERR', id, err.message)
  }
}
