const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "CYBER PANDA MD~H4sIAAAAAAAAA5VWW1PbOhD+L3plp2hX98x05oRLCdBAWgItdPrgxkowSZxgOyShw38/szLQPpzTw0nGYyeStbvfZaWfolwUdTyNW9H5KZZV8ZA1kR+b7TKKjthbjcexEiDyrMlE55sjwGCBMAB6QL6CBKvBeUAKgMoBkQKUFtBT+o3GAxkEVBrQeSDSQCgB0QB6CxQgKFAEGsFLQCuBHFgFiBac/P4EYrn6MStGf8qLwxkwJkVyBCQDoDaA5AAVAZEFIgMYNBBxFYAYgFQAQgIdwNsUU1lAawB1yhMdoOMpPqVPykCQgOD19yfOKyuqopwcLm/jPFbZ7DRuB1lRvQ1L0v45vge0gIEzBiQLqBQozkWCtQlXkh6MBVIICoEMtZkpYLwZTr4cBANaAfLFL2qu2wM6B0gISPpNYCLjwMUbA1x84lCCalkjl0IZn9JMOeo0PdUjWQkkJfBU55hZDAiMaGByODMNRoJ2qVrrAKVJYNbFpIz5cR7Lpmi2b5ZkYoxUgkcSGNAch5dWYBGIgDSjS0BpAsuXQTESUPO4BAwKvGkZCBYUmGeZMzuGaddt+qxwfJsiideWAbji4BMXKInZ45s2YEMLMruAUWJAEMIzLCGh7yUTwHr0BthOgVKtDDUq3z6rFuXfMBxUL46e/h9BGptM7XWKSBqUBZZOsMnlnGUICQS+cZohsck8c3kB25elS6h5avlmpWCiGbRMgmEoAlj7NiAZdIZFIYvbWUaOGSELAROlqfPoACwm7dg6bHVjAI1KiLKKtQaSmJJlG5EOySvcMkix9RlziaBegcyaVfVn5WHrNe4rWoIPYCXrEM2zbiQv7lqsMD0alyAlnSxh+B3G17ddibRhDwfXIucxscxkSNPaWCteguc6Nhv3WCeBxa1dak9tT0HLGMtUJXoJTAEmnJKsJfC4lWm9QAlHjcnT3M5963mmZxq3x7no4BOIKk6KuqmypliU/J/WILL84SKOqtgkvYkPu6fqJhzfz2gnPuy6o+ziczY8O/06sfNN7+vqoL/zZTi/mvX04fS9ALGsFqNY1zHvFXWzqLb9WNfZJNai8+07iDJumlbJHE0hiHFR1c1luVrOFln+IvOXwWw0WqzK5mJbjvb5IVaiI3/9HZumKCc107kqs2p0WzzE/dusqUVnnM3q+FpgrGIuOk21iq/9fX+RM/9HaIZ7N/2eADFPuihy0RFBO0nOU9C2g/av+t2aV82Wy3dlbASIWZqFQQdpCYN3pLznmTzw9Jogr5fHJitmteiI/f4KVz+6e4dn5wdY+6Ojbj3p7k+64ldBLwJtkb8u7+veaLVzczDNvL3p5bubvXXveuAf946G5+Pl+mj39O7xvp5e9d//wyKiIy4H1/a8Ofyw3Bvu3e9enWwnZ5c7S9vbHF/ubG8WzadbfzX3/bvzS/vR3p/Oz8PnaTk+OZJlV+WP00/rrZx2h3eHfnd7v7jUX3rHB7G7fs/R8vhQjOLvwT5uJuvR4Otdc9j9cFLvDEa7Zwf9TVwXN0eDuN7vZnc/4snlbX2SrfNwNu7fNYP60/qh2717XGyGs+Z6M/3ycfaw1WeDquoXhdus+ynYi3Vnz/tIkdTEVPHPcRFTLywzJvA/qWvzZoHJJ/htiefm+m9tFLjf8xmDzyG8d6u2f0qZvGuBnjdoh+0hxFC7QVJ7ojJpgvbsbNdu+sRbbRp/7njcB3yKwKccz03rO4jlLGvGi2ouOiIr82pR5AJEtVix9I/L8eIPWXvgL3GnUGz8WVY33V+WGhbzWDfZfCk66JyzwZEmEPNtd7m8aLLmxYmiy5+DzZ14+hsyKLFaXAoAAA==",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || ".",
    BOT_NAME:              process.env.BOT_NAME || "⛁ ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ ⛁",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "94767233346",
    OWNER_NAME:            process.env.OWNER_NAME || "⛁ ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ ⛁",
    DESCRIPTION:           process.env.DESCRIPTION || "⛁ ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ ⛁",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://i.ibb.co/xqd5hcNw/Dark-E-sports-Illustrative-Panda-Face-Gaming-Logo.jpg",
    LIVE_MSG:              process.env.LIVE_MSG || "CYBER PANDA MD is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by CYBER PANDA MD",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'SILVA MD 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'ᴄʏʙᴇʀ-ᴘᴀɴᴅᴀ-ᴍᴅ').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
};
