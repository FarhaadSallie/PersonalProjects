require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE"]})
const BOT_PREFIX = 'bra'
const MOD_ME = "make-me-rich"

client.on('ready',() => { console.log('Farhaads Bot Reporting for Duty !')} )

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
    if (msg.content === `${BOT_PREFIX}${MOD_ME}`){
        modUser(user)
    }
})
client.on('message', (msg) => {
    if (msg.content === `${BOT_PREFIX}humble-me`){
        unmodUser(user)
    }
})
client.on('message', (msg) => {
    if (msg.content === "smart"||"5head"||"big brain"||"awesome"){
        msg.react('❤️')
    }
})

client.on('messageDelete', (msg) => {
    msg.channel.send("No delete message >:(");
    }
)
//functions
function modUser(user){
    msg.user.roles.add("783831114803839026")
}

function unmodUser(user){
    msg.user.roles.remove("783831114803839026")
}
function epicLore(msg){
    msg.channel.send("I am a bot created by the average Software Developer \n                            ***Farhaad Sallie***\n                          In the year 2020")
}
client.login(process.env.BOT_TOKEN)