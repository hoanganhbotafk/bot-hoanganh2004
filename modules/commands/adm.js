module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lý Bá Hoàng Anh",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`❀𝕋𝕙𝕠̂𝕟𝕘 𝕥𝕚𝕟 𝕟𝕘𝕦̛𝕠̛̀𝕚 𝕕𝕚𝕖̂̀𝕦 𝕙𝕒̀𝕟𝕙 𝕓𝕠𝕥:
𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜: Lý Bá Hoàng Anh
𝕌𝕤𝕖𝕣𝕟𝕒𝕞𝕖: @hoanganh2k4
𝕌𝕀𝔻: 100069337495538
𝔾𝕚𝕠̛́𝕚 𝕥𝕚́𝕟𝕙: 𝔾𝕒𝕪 ( ͡° ͜ʖ ͡°)
𝕄𝕠̂́𝕚 𝕢𝕦𝕒𝕟 𝕙𝕖̣̂: 𝔻𝕠̣̂𝕔 𝕥𝕙𝕒̂𝕟
𝕫𝕒𝕝𝕠 : 079314277❀`, event.threadID, event.messageID);