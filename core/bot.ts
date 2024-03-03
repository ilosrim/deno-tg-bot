import { Bot } from "https://deno.land/x/grammy@v1.21.1/mod.ts";
import "https://deno.land/std@0.218.2/dotenv/load.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

export const bot = new Bot(Deno.env.get("BOT_TOKEN"));

const app = new Application(); // or whatever you're using

// Make sure to specify the framework you use.
app.use(webhookCallback(bot, "oak"));
