'use strict';

const axios  = require('axios');
const moment = require('moment-timezone');

const REPO_URL    = 'https://github.com/CYBER-x-SACHIYA-SL-MD-BOT/CYBER-PANDA-MD-V.0.10';
const WEBSITE_URL = 'https://sachithchandra.slsachith93.workers.dev/';
const WA_CHANNEL  = 'https://chat.whatsapp.com/KySCXYNAz90Im672wK8xyf?mode=gi_t';
const SUPPORT_URL = 'https://chat.whatsapp.com/KySCXYNAz90Im672wK8xyf?mode=gi_t';

module.exports = {
    commands:    ['repo', 'repository', 'github'],
    description: 'Show CYBER PANDA MD repository info',
    permission:  'public',
    group:       true,
    private:     true,

    run: async (sock, message, args, ctx) => {
        const { contextInfo } = ctx;
        const jid = message.key.remoteJid;

        let data = null;
        try {
            const res = await axios.get(
                'https://api.github.com/repos/SilvaTechB/silva-md-bot',
                { timeout: 10000 }
            );
            data = res.data;
        } catch { /* use fallback */ }

        const caption = data
            ? `✨ *⛁ CYBER PANDA MD INFO ⛁*\n\n` +
              `📦 *Repo:* ${data.name}\n` +
              `📝 *About:* ${data.description || 'WhatsApp MD Bot'}\n\n` +
              `⭐ *Stars:* ${data.stargazers_count.toLocaleString()}\n` +
              `🍴 *Forks:* ${data.forks_count.toLocaleString()}\n` +
              `💻 *Language:* ${data.language || 'JavaScript'}\n` +
              `📦 *Size:* ${(data.size / 1024).toFixed(1)} MB\n` +
              `📜 *License:* ${data.license?.name || 'MIT'}\n` +
              `⚠️ *Open Issues:* ${data.open_issues}\n` +
              `🕒 *Updated:* ${moment(data.updated_at).fromNow()}\n\n` +
              `🔗 *GitHub:* ${REPO_URL}\n` +
              `🌐 *Website:* ${WEBSITE_URL}\n` +
              `📢 *Newsletter:* ${WA_CHANNEL}\n` +
              `💬 *Support:* ${SUPPORT_URL}\n\n` +
              `⚡ _Powered by Cyber x Sachiya_`
            : `*✨ CYBER PANDA MD — REPOSITORY*\n\n` +
              `📦 *Repo:* silva-md-bot\n` +
              `💻 *Language:* JavaScript\n` +
              `📜 *License:* MIT\n\n` +
              `🔗 *GitHub:* ${REPO_URL}\n` +
              `🌐 *Website:* ${WEBSITE_URL}\n` +
              `📢 *Newsletter:* ${WA_CHANNEL}\n` +
              `💬 *Support:* ${SUPPORT_URL}\n\n` +
              `⚡ _Powered by Cyber x Sachiya_\n\n` +
              `🐼 *_⛁ CYBER PANDA MD ⛁*_`;

        const imgUrl = 'https://i.ibb.co/xqd5hcNw/Dark-E-sports-Illustrative-Panda-Face-Gaming-Logo.jpg';

        await sock.sendMessage(jid, {
            image:   { url: imgUrl },
            caption,
            contextInfo: {
                ...contextInfo,
                externalAdReply: {
                    title:                 'CYBER PANDA MD — Open Source Bot',
                    body:                  'Star us on GitHub!',
                    thumbnailUrl:          imgUrl,
                    sourceUrl:             REPO_URL,
                    mediaType:             1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: message });
    }
};
