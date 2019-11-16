const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
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
