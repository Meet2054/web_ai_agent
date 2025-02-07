import { query } from "./_generated/server";
import { v } from "convex/values";


export const getLastMessage = query({
  args: { chatId: v.id("chats") },
  handler: async (ctx, args) => {
    const lastMessage = await ctx.db
      .query("messages")
      .withIndex("by_chat", (q) => q.eq("chatId", args.chatId))
      .order("desc")
      .first();
    return lastMessage;
  },
});
