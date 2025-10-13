// config.js
import fs from 'fs'
import 'dotenv/config'

const file = './lib/configdb.json'

function loadRaw() {
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : { config: {} }
}

function get(key, fallback) {
  const db = loadRaw()
  return db.config?.[key] ?? fallback
}

export default {
  get PREFIX() { return get('prefix', '!') },
  get MODE() { return get('mode', 'public') },
  get CREATOR() { return get('creator', '2349133354644@s.whatsapp.net') },
  get OWNER_NUMBERS() { return get('owner_numbers', ['2349133354644']) },
  get MONGODB_URI() { return get('mongodb_uri', '') },
  get BOT_NAME() { return get('bot_name', 'Xylo-MD') },
  get FOOTER() { return get('footer', '© Powered by DavidX') },
  get ANTIDELETE_MODE() { return get('antidelete_mode', 'off') },
  get AUTOVIEW_STATUS() { return get('autoview_status', false) },
  get AUTOLIKE_STATUS() { return get('autolike_status', false) },
  get SESSION_ID() { return process.env.SESSION_ID || 'DAVE-S*F=3HL2Y3HYRL' }
}
