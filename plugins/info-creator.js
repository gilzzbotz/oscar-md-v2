let handler = async(m, { conn }) => {
conn.sendContact(m.chat, numberowner, nameowner, m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner2|creator2)$/i

module.exports = handler
