import { Bot } from "../deps.deno.ts";
import "https://deno.land/std@0.218.2/dotenv/load.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN") || "");
bot.start();
