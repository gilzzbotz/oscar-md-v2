let handler = async m => m.reply(`
╭─「 𝐃𝐨𝐧𝐚𝐬𝐢 𝐉𝐚𝐧𝐠𝐚𝐧 𝐌𝐚𝐢𝐧𝐢𝐧 𝐃𝐨𝐚𝐧𝐠:𝐯 」
│ •⛽ 𝐃𝐚𝐧𝐚 [081241056195]
│ •⛽ 𝐏𝐮𝐥𝐬𝐚 [084730794089]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
