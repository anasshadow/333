const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
console.log("Scrpit By Shadow");
const myid = ['677966251175444483'];
const prefix = ['!'];
const mess = ['sss يح'];
const room = ['677966782807408672'];


client.on('message', message => {
    if(message.content === prefix+'r'){
        message.channel.send("#rep "+"<@" + myid + ">")
    }
});

client.on('message', message => {
    if(message.content === 'هاي'){
        message.channel.send("يوووووووووه ابن المتناكة دا تاني")
    }
});

client.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send("#daily")
    }
});


client.on('message', message => {
    if(message.content === 'هلا'){
        message.channel.send("هلا في طيزك")
    }
});

client.on('message', message => {
    if(message.content === 'credit'){
        message.channel.send("#credit")
    }
});


client.on('message', message => {
if (message.content === prefix+'spam') {
        let letters = "ههههههخول".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 6000);
}
});





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "s") {
let rank = message.guild.member(message.author).roles.find('name', 'spamer'); //لازم تعمل الرتبه دي في السيرفر  spamer
if (!rank) return message.reply(' ')
  message.channel.send(args.join("  "))
    message.delete();
  }
});

 
    
client.login(process.env.BOT_TOKEN);
