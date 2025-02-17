const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    menu: 'session/MENUVOICEBYNADEEN.mp3'
        }
let dec = `*👋 Hello ${pushname}*

*╭───────────◉◉►*
*│Hey, I'm FRONEXT-MD, Created By*
*│Cyber Froly✨🍂*
*│*
*│I'm always here for help you.😇 Love │you forever ♥️*
*╰───────────◉◉►*

*╭───────────◎◎►*
│💻𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💻
*│ ─────────*
*│►.song*
*│►.video*
*│►.fb*
*│►.tt*
*│►.movie*
*│►.mediafire*
*│►.twitter*
*│►.gdrive*
*│►.apk*
*│►.img*
*│►.rvideo*
│ ─────────
│🔍𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🔎
*│─────────*
*│►.yts*
*│►.news*
*│►.githubstalk*
*│►.srepo*
*│►.weather*
│─────────
│👾𝗔𝗜 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦👾
*│─────────*
*│►.ai*
│─────────
│🌀𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦🌀
*│─────────*
*│►.convert*
*│►.trt*
│─────────
│📍𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦📍
*│─────────*
*│►.restart*
│ ─────────
│💫𝗠𝗔𝗜𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦💫
*│─────────*
*│►.menu*
*│►.alive*
*│►.ping*
*│►.repo*
*│►.owner*
*│►.about*
*│►.support*
│ ─────────
│⛓𝗢𝗧𝗛𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦⛓
*│─────────*
*│►.kylie*
*│►.hack*
*│►.define*
*│►.gpass*
│─────────
│🌝𝗙𝗨𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦👀
*│─────────*
*│►.animegirl*
*│►.dog*
*│►.fact*
*│►.joke*
*│►.quote*
│─────────
│⛥𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦⛥
*│─────────*
*│►.promote*
*│►.demote*
*│►.remove*
*│►.setpic*
*│►.del*
*│►.add*
*│►.setwelcome*
*│►.setgoodbye*
*╰───────────◎◎►*
*©𝙵𝚁𝙾𝙽𝙴𝚇𝚃 𝙼𝙳 𝙱𝚈 𝙲𝚈𝙱𝙴𝚁 𝙵𝚁𝙾𝙻𝚈ッ*`
await conn.sendMessage(from, { audio: { url: voice.menu }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })

await conn.sendMessage(from,{image:{url: `https://i.ibb.co/S4bD7TkQ/8065.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
