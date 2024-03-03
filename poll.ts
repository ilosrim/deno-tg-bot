// run the bot locally
import { bot } from "./core/index.ts";

await bot.api.deleteWebhook();

bot.start();
