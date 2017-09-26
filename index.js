const  Discord = require('discord.js');
const bot = new Discord.Client();
var fs = require('fs');
const prefix = "sc!"
const sql = require("sqlite");
sql.open("./score.sqlite");

bot.login('MzYxMzAzMTE4NzY1MzU5MTA1.DKsD2w.hUpIcSVfBXc0R307L2kI8177RlY');


let disabled = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));


bot.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (!message.guild || message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err);
  }

});






bot.on("message", (message) => {
sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}`)
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (message.content.startsWith(prefix + "points")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("sadly you do not have any points yet!");
      message.reply(`you currently have ${row.points} messages sent, good going!`);

});
};
});



bot.on("message", (message) => {
  if (message.content === prefix + "help") {
    message.channel.send("You have got mail!")
    const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
var embed = new Discord.RichEmbed()
.setTitle("Fun Commands:")
.setColor(randomColor)
.setThumbnail(`${message.author.displayAvatarURL}`)
.addField("sc!avatar", "Get a user's avatar")
.addField("sc!calculator", "Do your homework!")
.addField("sc!dm", "DM you something random :P")
.addField("sc!emoji", "Put text as emoji's!")
.addField("sc!flip", "Flip text!")
.addField("sc!google", "Google something random in your head!")
.addField("sc!react", "Reacts to YOUR last message!")
.addField("sc!roll", "Roll a die")
.addField("sc!say", "Says something random in the channel.")
.addField("sc!setgame", "Sets the bot's game, remember it puts -suggested by (your username), so dont be cheeky ;)")
.addField("sc!totinos", "Puts the totinos lyrics in chat, useless command am i right")
message.author.send({ embed: embed });
var embed2 = new Discord.RichEmbed()
.setTitle("Utility Commands:")
.setColor(randomColor)
.addField("sc!serverinfo", "Gives you the bot's info")
.addField("sc!changeName", "Changes the name of the channel the command was sent in, restricted to people who have manage channels permissions.")
.addField("sc!changeTopic", "Changes the topic of the channel the command was sent in, restricted to people who have manage channels permissions.")
.addField("sc!invite", "DM's you the invite link of the bot")
.addField("sc!ping", "Sends your ping")
.addField("sc!listemojis", "Lists all the emojis in the server")
.addField("sc!poll", "Creats a poll in a channel called poll, restricted to moderators.")
.addField("sc!suggest", "Suggests something in a channel called suggestions")
.addField("sc!userinfo", "Gives the info of the user mentioned.")
.addField("sc!help", "Brings up this menu again.")
.addField("sc!points", "Shows you how many messages you sent")
.addField("sc!contact", "Gives you an email to contact if you contact an error")
message.author.send({ embed: embed2 });
var embed3 = new Discord.RichEmbed()
.setTitle("Moderation Commands (I have just started on these, thats why there are alot of WIP's)")
.setColor(randomColor)
.addField("sc!ban", "Bans a user with a reason")
.addField("sc!kick", "Kicks users with a reason")
.addField("sc!blacklist", "Blacklists a user from using the bot's commands (WIP)")
.addField("sc!mute", "Mutes a user with a reason (WIP)")
.addField("sc!warn", "Warn's a user, after 10 warns, they get muted forever, unless you unmute them, of course.")
.addField("sc!unban", "Unbans a user (WIP)")
.addField("sc!unblacklist", "Unblacklists a user from using the bot's commands (WIP)")
.addField("sc!unmute", "Unmutes a user")
.addField("sc!advertising", "Enable advertising other discord servers, disabled by default.")
message.author.send({ embed: embed3 });
}});

bot.on('ready', (message) => {
console.log(`Ready to server in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`);
bot.user.setGame(`Type sc!help for help!`);
});

bot.on("message", (message) => {
  if (message.content === "sc!contact") {
    message.author.send("Contact `ScroogeMcBot@gmail.com` if you contact any errors, anything like ***You have a really bad bot 0/10***, they will be largley ignored, as this bot is in beta, second, please accept that nothing is perfect in this bot, and try to give constructive criticism, thanks in advance, \n -ThatMajesticGuy")
}});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  var textArray = [
    `${member.user} has come here`,
    `${member.user},my man, you have entered the realm of severe depression`,
    `${member.user} you have entered the realm of the totino gods, do you have anything to say?`,
    `${member.user} Welcome to the discord. You must be crazy for joining.`,
    `${member.user} Welcome to ${message.guild.name}.. you are ugly`,
    `${member.user} has entered hell :)`,
    `${member.user} is possibly mentally retarted cause he came here...`,
    `${member.user} came here, i am running out of ideas please help`,
    `${member.user} has entered the meme magic`,
    `${member.user} has had a bad case of idiocity cause he is here`,
    `${member.user} is very loud, but ey, he came here`,
    `${member.user} came here, Error 404 ${member.user} not found`,
    `${member.user} is a noob, jk he came here`,
    `${member.user} has come here to do everything that his destiny tells him to.`
  ];
  var Meme = Math.floor(Math.random()*textArray.length);
  channel.send(`${textArray[Meme]}`)
});

bot.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  var textArray = [
    `***${member.user.tag}*** has died in the death zone`,
    `***${member.user.tag}*** has left the state of severe deppression`,
    `***${member.user.tag}*** you have entered the realm of the totino gods, do you have anything to say?`,
    `Did ***${member.user.tag}*** leave or did he accidently hit the leave button instead of the change nickname button?`,
    `***${member.user.tag}*** was abused cause he was ugly, so he hit that leave button.`,
    `***${member.user.tag}*** joined, got triggered, left, simple math.`,
    `***${member.user.tag}*** has ragequit`,
    `***${member.user.tag}*** has came here, but left cause of all the toxicity`,
    `***${member.user.tag}*** has left the meme magic`,
    `***${member.user.tag}*** has died, rip`,
    `***${member.user.tag}*** is very loud, but ey, he came here`,
    `***${member.user.tag}*** went away, oh noes`,
    `***${member.user.tag}*** went away cause this server is bad, jk it isnt dont sue me plz`,
    `***${member.user.tag}*** has left... Dinkleburg...`
  ];
  var math = Math.floor(Math.random()*textArray.length);
  channel.send(`${textArray[math]}`)
});

bot.on("message", (message) => {
  if (message.content === "sc!blacklist") {
    let member = message.mentions.members.first();
    if (!member) return message.reply("Mention someone to blacklist them!")
  const blacklist = message.guild.roles.find('name', 'Blacklisted');
  if (!blacklist) return message.reply("Make a role called Blacklisted!")
  member.addRole(blacklist.id)
  message.channnel.send("User has been blacklisted!")
}});

bot.on("message", (message) => {
  if (message.content === "sc!unblacklist") {
    let member = message.mentions.members.first();
    if (!member) return message.reply("Mention someone to unblacklist them!")
  member.removeRole(blacklist.id)
  message.channnel.send("User has been unblacklisted!")
}});

bot.on("guildCreate", guild => {
  const channel3 = guild.channels.find('name', 'general');
  if (!channel3) return guild.owner.send("Oh why hello there! Thank you for inviting me to this server! Here are a few things to get started! \n First, make a channel called #mod-log exactly like that if you are planning to use commands, if you dont and use the command, you will need to create the channel and waste time while a bad person is raiding your server. \n Secondly, if you want welcome messages, make a channel called #welcome exactly like that, it will also have goodbye messages also, for right now, we have pre made welcome messages, soon I will try to make it so you can make your own welcome message. \n Third. Make sure nobody blocks the bot, as some commands will not function if they have to DM the user. \n Finally, you MIGHT want to disable advertising by doing sc!advertising no, then it will block advertising discord servers. \nThat is it, join our offical server: https://discord.gg/YMtWCNR, have fun!")
  channel3.send("Oh why hello there! Thank you for inviting me to this server! Here are a few things to get started! \n First, make a channel called #mod-log exactly like that if you are planning to use commands, if you dont and use the command, you will need to create the channel and waste time while a bad person is raiding your server. \n Secondly, if you want welcome messages, make a channel called #welcome exactly like that, it will also have goodbye messages also, for right now, we have pre made welcome messages, soon I will try to make it so you can make your own welcome message. \n Third. Make sure nobody blocks the bot, as some commands will not function if they have to DM the user. \n Finally, you MIGHT want to disable advertising by doing sc!advertising no, then it will block advertising discord servers. \nThat is it, join our offical server: https://discord.gg/YMtWCNR, have fun!")
});
