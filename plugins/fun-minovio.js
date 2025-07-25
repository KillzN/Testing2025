import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  let _pp = './src/img/killurl.jpg'
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => _pp)
  let { premium, level, diamond, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
  let username = conn.getName(who)
  let name = conn.getName(who)
  let fkon = {
    key: {
      fromMe: false,
      participant: `${m.sender.split('@')[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {})
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    }
  }
  let str = `𝙀𝙎𝙏𝙀 𝙀𝙎 𝙈𝙄 𝙉𝙊𝙑𝙄𝙊, *¿𝙀𝙎 𝙃𝙀𝙍𝙈𝙊𝙎𝙊 𝙑𝙀𝙍𝘿𝘼𝘿*? 😍

@${who.replace(/@.+/, '')} 𝙀𝙍𝙀𝙎 𝙀𝙇 𝙈𝙀𝙅𝙊𝙍 𝙉𝙊𝙑𝙄𝙊 𝘿𝙀𝙇 𝙈𝙐𝙉𝘿𝙊.🫶🏻♥️`.trim()

  conn.sendFile(m.chat, pp, 'perfil.jpg', str, fkon, false, { mentions: [who] })
}

handler.help = ['minovio [@user]']
handler.tags = ['fun']
handler.command = /^minovio$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Dias ☀️*\n ', h, ' *Horas 🕐*\n ', m, ' *Minutos ⏰*\n ', s, ' *Segundos ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
