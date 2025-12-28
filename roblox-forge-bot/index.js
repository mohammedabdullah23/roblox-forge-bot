const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("ok"));

app.listen(3000, () => console.log("alive"));
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName !== "gen") return;

  // Generate username & password
  const username = `NovaChaos${Math.floor(Math.random() * 100000)}`;
  const password = `Generated$${Math.floor(Math.random() * 1000000)}`;
  const userId = Math.floor(Math.random() * 1000000000).toString();
  const createdDate = new Date().toLocaleDateString();
  const accountAge = Math.floor(Math.random() * 400);

  const embed = new EmbedBuilder()
    .setColor(0x2f3136)
    .setTitle("🟢 Your Account")
    .setDescription("Click to reveal hidden info below.")
    .addFields(
      { name: "Username", value: `\`${username}\`` },
      { name: "Password", value: `\`${password}\`` },
      { name: "User ID", value: `\`${userId}\`` },
      { name: "Created date", value: createdDate, inline: true },
      { name: "Account Age", value: `${accountAge} days`, inline: true }
    )
    .setFooter({ text: "gg/TrueAltHub • Today" })
    .setTimestamp();

  await interaction.reply({ embeds: [embed], ephemeral: true });
});

client.login(process.env.TOKEN)




