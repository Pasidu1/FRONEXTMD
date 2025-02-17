const { updateEnv, readEnv } = require('../lib/database');
const { cmd, commands } = require('../command');
const EnvVar = require('../lib/mongodbenv');

cmd({
    pattern: "settings",
    alias: ["setting","s"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return;

        const config = await readEnv();

        let work;
        switch (config.MODE) {
            case 'public':
                work = 'PUBLIC🌎';
                break;
            case 'private':
                work = 'PRIVATE👤';
                break;
            case 'groups':
                work = 'GROUP ONLY👥';
                break;
            case 'inbox':
                work = 'INBOX ONLY🫂';
                break;
            default:
                work = 'UNKOWN🛑';
        }

        let autoStatus = config.AUTO_READ_STATUS === 'true' ? '♻️ ON' : '🚫 OFF';
        let autoVoice = config.AUTO_VOICE === 'true' ? '♻️ ON' : '🚫 OFF';
        let autoSticker = config.AUTO_STICKER === 'true' ? '♻️ ON' : '🚫 OFF';
        let autoReply = config.AUTO_REPLY === 'true' ? '♻️ ON' : '🚫 OFF';
        let ownerreact = config.OWNER_REACT === 'true' ? '♻️ ON' : '🚫 OFF';
let autoreact = config.AUTO_REACT === 'true' ? '♻️ ON' : '🚫 OFF';

        const vv = await conn.sendMessage(from, {
            image: { url: 'https://i.ibb.co/T9PBtQt/2631.jpg' },
            caption: `❖ FRONEXT-MD SETTINGS ❖\n
♻️ *SETTING MENU*🚫
┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮
┣┣⃟⚟➺ 𝚆𝙾𝚁𝙺 𝚃𝚈𝙿𝙴 : *${work}*
┣┣⃟⚟➺ 𝙰𝚄𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 : *${autoVoice}*
┣┣⃟⚟➺ 𝙰𝚄𝚃𝙾 𝚂𝚃𝙲𝙺𝙴𝚁 : *${autoSticker}*
┣┣⃟⚟➺ 𝙰𝚄𝚃𝙾 𝚁𝙴𝙿𝙻𝚈 : *${autoReply}*
┣┣⃟⚟➺ 𝙰𝚄𝚃𝙾 𝚂𝙴𝙴𝙽 𝚂𝚃𝙰𝚃𝚄𝚂 : *${autoStatus}*
┣┣⃟⚟➺ 𝙰𝚄𝚃𝙾 𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙲𝚃 : *${autoreact}*
┣┣⃟⚟➺ 𝙰𝚄𝚃𝙾 𝙾𝚆𝙽𝙴𝚁 𝚁𝙴𝙰𝙲𝚃 : *${ownerreact}*
┃┗━━━━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━━━━━┛

> 🔗𝘾𝙐𝙎𝙏𝙊𝙈𝙄𝙕𝙀  𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝗦🔗⤵️

┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮

> _𝐁𝐎𝐓 𝐖𝐎𝐑𝐊 𝐓𝐘𝐏𝐄_⤵️
┣┣⃟⚟➺ 🌎 1.1 𝙿𝚄𝙱𝙻𝙸𝙲 𝚆𝙾𝚁𝙺
┣┣⃟⚟➺ 👤 1.2 𝙿𝚁𝙸𝚅𝙰𝚃𝙴 𝚆𝙾𝚁𝙺 
┣┣⃟⚟➺ 👥 1.3 𝙶𝚁𝙾𝚄𝙿 𝙾𝙽𝙻𝚈 𝚆𝙾𝚁𝙺
┣┣⃟⚟➺ 🫂 1.4 𝙸𝙽𝙱𝙾𝚇 𝙾𝙽𝙻𝚈 𝚆𝙾𝚁𝙺

> _𝐀𝐔𝐓𝐎 𝐕𝐎𝐈𝐂𝐄 𝐎𝐍/𝐎𝐅𝐅_⤵️
┣┣⃟⚟➺ ♻️ 2.1 𝙰𝚄𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 𝙾𝙽
┣┣⃟⚟➺ 🚫 2.2 𝙰𝚄𝚃𝙾 𝚅𝙾𝙸𝙲𝙴 𝙾𝙵𝙵

> _𝐀𝐔𝐓𝐎 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐎𝐍/𝐎𝐅𝐅_⤵️
┣┣⃟⚟➺ ♻️ 3.1 𝙰𝚄𝚃𝙾 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾𝙽
┣┣⃟⚟➺ 🚫 3.2 𝙰𝚄𝚃𝙾 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙾𝙵𝙵 

> _𝐀𝐔𝐓𝐎 𝐑𝐄𝐏𝐋𝐘 𝐎𝐍/𝐎𝐅𝐅_⤵️
┣┣⃟⚟➺ ♻️ 4.1 𝙰𝚄𝚃𝙾 𝚁𝙴𝙿𝙻𝚈 𝙾𝙽
┣┣⃟⚟➺ 🚫 4.2 𝙰𝚄𝚃𝙾 𝚁𝙴𝙿𝙻𝚈 𝙾𝙵𝙵

> _𝐀𝐔𝐓𝐎 𝐒𝐄𝐄𝐍 𝐒𝐓𝐀𝐓𝐔𝐒 𝐎𝐍/𝐎𝐅𝐅_⤵️
┣┣⃟⚟➺ ♻️ 5.1 𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙳 𝚂𝚃𝙰𝚃𝚄𝚂 𝙾𝙽
┣┣⃟⚟➺ 🚫 5.2 𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙳 𝚂𝚃𝙰𝚃𝚄𝚂 𝙾𝙵𝙵

> _𝐀𝐔𝐓𝐎 𝐑𝐄𝐀𝐂𝐓 𝐎𝐍/𝐎𝐅𝐅_⤵️
┣┣⃟⚟➺ ♻️ 6.1 𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙲𝚃 𝙾𝙽
┣┣⃟⚟➺ 🚫 6.2 𝙰𝚄𝚃𝙾 𝚁𝙴𝙰𝙲𝚃 𝙾𝙵𝙵

> _𝐎𝐖𝐍𝐄𝐑 𝐑𝐄𝐀𝐂𝐓 𝐎𝐍/𝐎𝐅𝐅_⤵️
┣┣⃟⚟➺ ♻️ 7.1 𝙾𝚆𝙽𝙴𝚁 𝚁𝙴𝙰𝙲𝚃 𝙾𝙽
┣┣⃟⚟➺ 🚫 7.2 𝙾𝚆𝙽𝙴𝚁 𝚁𝙴𝙰𝙲𝚃 𝙾𝙵𝙵
┃┗━━━━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━━━━━┛`
        }, { quoted: mek });

        // Auto-delete the message after 10 seconds
        setTimeout(async () => {
            await conn.sendMessage(from, { delete: vv.key });
        }, 300000); // 10 seconds timeout for deletion

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1.1':
                        reply('.update MODE:public');
                        reply('.restart');
                        break;
                    case '1.2':
                        reply('.update MODE:private');
                        reply('.restart');
                        break;
                    case '1.3':
                        reply('.update MODE:groups');
                        reply('.restart');
                        break;
                    case '1.4':
                        reply('.update MODE:inbox');
                        reply('.restart');
                        break;
                    case '2.1':
                        reply('.update AUTO_VOICE:true');
                        break;
                    case '2.2':
                        reply('.update AUTO_VOICE:false');
                        break;
                    case '3.1':
                        reply('.update AUTO_STICKER:true');
                        break;
                    case '3.2':
                        reply('.update AUTO_STICKER:false');
                        break;
                    case '4.1':
                        reply('.update AUTO_REPLY:true');
                        break;
                    case '4.2':
                        reply('.update AUTO_REPLY:false');
                        break;
                    case '5.1':
                        reply('.update AUTO_READ_STATUS:true');
                        break;
                    case '5.2':
                        reply('.update AUTO_READ_STATUS:false');
                        break;
                    case '6.1':
                        reply('.update AUTO_REACT:true');
                        break;
                    case '6.2':
                        reply('.update AUTO_REACT:false');
                        break;
                    case '7.1':
                        reply('.update OWNER_REACT:true');
                        break;
                    case '7.2':
                        reply('.update OWNER_REACT:false');
                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }
                // Auto-delete the option selection after 10 seconds
                setTimeout(async () => {
                    await conn.sendMessage(from, { delete: msg.key });
                }, 2000); // 10 seconds timeout for deletion

            }
        });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
