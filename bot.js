﻿const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Broadcast Bot- Script By : Bot_maker`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Bot_maker ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame("$bc")
client.user.setStatus("Online")
});
                     
client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("#FA8072")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__برودكاست بوت | Version 0.1__ 
            برودكاست عادي : ${prefix}bc
            دعوة البوت لسيرفرك : ${prefix}invite
            معلومات عن السيرفر : ${prefix}server
            برودكاست للأونلاين فقط : ${prefix}bco
            رابط سيرفر الدعم الفني : https://discord.gg/GvwzwyQ
            **`);
            message.channel.sendEmbed(help); // رابط السيرفر يعود الى سيرفر CODES .
}
});


client.login(process.env.BOT_TOKEN);
