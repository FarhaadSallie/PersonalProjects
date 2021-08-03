//header stuff
require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE"]})
const BOT_PREFIX = '!'


client.on('ready',() => { console.log('Farhaads Bot Reporting for Duty !')} )

//basic message and response commands

client.on('message', (msg) => {
    if (msg.content === `${BOT_PREFIX}ping`){
        msg.reply("pong")
    }
})

client.on('message', (msg) => {
    if (msg.content === `${BOT_PREFIX}creator`){
        epicLore(msg)
    }
})

client.on('message', (msg) => {
    if (msg.content == "pepe"){
        msg.react('❤️')
    }
})

client.on('messageDelete', (msg) => {
    msg.channel.send("No delete message >:(");
    }
)

//commands

client.on('message', (msg) => {
    if (msg.content === `${BOT_PREFIX}mod`){
        modUser(msg.user)
    }
})
client.on('message', (msg) => {
    if (msg.content === `${BOT_PREFIX}unmod`){
        unmodUser(user)
    }
})



//functions
function modUser(user){
    msg.user.roles.add("786729947770388512")
}

function unmodUser(user){
    msg.user.roles.remove("786729947770388512")
}
function epicLore(msg){
    msg.channel.send("I am a bot created by the average Software Developer \n ***Farhaad Sallie***\nIn the year 2020")
}

//Discord documentation party tricks

                                                                    //1. revealing avatars



  // Create an event listener for messages
  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.displayAvatarURL());
    }
  });

                                                                    //2.File Handling
    
//2.1 Replying with images
client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
      // Create the attachment using MessageAttachment
      const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
      // Send the attachment in the message channel with a content
      message.channel.send(`${message.author},`, attachment);
    }
  });

client.login(process.env.BOT_TOKEN)