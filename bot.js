const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Shadow");
const myid = ['677966251175444483'];
const prefix = ['!'];
const mess = ['sss يح'];



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

 
    
client.login(process.env.BOT_TOKEN);
