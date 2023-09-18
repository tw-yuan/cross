// initialize
const { token } = require("./config.json");
const { Client, GatewayIntentBits, Partials, Collection, ActivityType } = require('discord.js')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login(token)