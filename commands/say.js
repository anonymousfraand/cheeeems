const Discord = require("discord.js");
// code to repeat a message
module.exports.run = async (bot, messaage, args) => {

    if(!messaage.member.hasPermission("MANAGE_MESSAGES")) return Discord.Message.reply("NO");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
}

module.exports.help={
    name : "say"

}