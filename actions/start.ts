import { bot } from "../core/bot.ts";

bot.command("start", (ctx) => {
  ctx.reply(`Salom ${ctx.from?.first_name}, botimizga hush kelibsiz`);
});
