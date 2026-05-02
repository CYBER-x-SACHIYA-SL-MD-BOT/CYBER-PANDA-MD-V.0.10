'use strict';

/**
 ⛁ CYBER PANDA MD ⛁
 */

const { downloadContentFromMessage } = require('@whiskeysockets/baileys');

const TYPE_MAP = {
    imageMessage:     'image',
    videoMessage:     'video',
    audioMessage:     'audio',
    documentMessage:  'document',
    stickerMessage:   'sticker',
    ptvMessage:       'video',
};

async function dlBuffer(msgContent, mediaType) {
    const stream = await downloadContentFromMessage(msgContent, mediaType);
    const chunks = [];
    for await (const chunk of stream) chunks.push(chunk);
    const buf = Buffer.concat(chunks);
    if (!buf.length) throw new Error('Downloaded media buffer is empty');
    return buf;
}

async function dlAuto(msgObj) {
    // Check direct message
    for (const [key, type] of Object.entries(TYPE_MAP)) {
        if (msgObj?.[key]) {
            return { buffer: await dlBuffer(msgObj[key], type), mediaType: type, msgContent: msgObj[key] };
        }
    }
    // Check inside quoted context
    const quoted = msgObj?.extendedTextMessage?.contextInfo?.quotedMessage;
    for (const [key, type] of Object.entries(TYPE_MAP)) {
        if (quoted?.[key]) {
            return { buffer: await dlBuffer(quoted[key], type), mediaType: type, msgContent: quoted[key] };
        }
    }
    throw new Error('No downloadable media found in this message');
}

module.exports = { dlBuffer, dlAuto, TYPE_MAP };
