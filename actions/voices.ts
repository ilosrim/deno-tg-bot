import { bot } from "../core/bot.ts";

bot.on("message:voice", async (ctx) => {
  const voice = ctx.msg.voice;

  const duration = voice.duration; // in seconds
  await ctx.reply(`Your voice message is ${duration} seconds long.`);

  const fileId = voice.file_id;
  await ctx.reply("The file identifier of your voice message is: " + fileId);

  const file = await ctx.getFile(); // valid for at least 1 hour
  const path = file.file_path; // file path on Bot API server
  await ctx.reply("Download your own file again: " + path);
});
