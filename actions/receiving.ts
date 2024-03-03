import { bot } from "../core/bot.ts";

bot.on("message", async (ctx) => {
  const chatId = ctx.chat.id;
  const msg = ctx.message.text;
  await ctx.api.sendMessage(
    chatId,
    `<b>Hi!</b> <i>Welcome</i> to <pre>${msg}</pre>`,
    {
      parse_mode: "HTML",
    }
  );
});
