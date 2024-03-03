import { Bot } from "https://deno.land/x/grammy@v1.21.1/mod.ts";
import "https://deno.land/std@0.218.2/dotenv/load.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN"));
bot.start();
