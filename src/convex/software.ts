import { v } from "convex/values";
import { mutation, query } from "./_generated/server"



export const getSoftwares = query({
    async handler(ctx, args_0) {
        return await ctx.db.query("softwares").collect();
    },
})

export const enlistSoftware = mutation({
    args: {
        name: v.string(),
        description: v.string(),
        price: v.float64(),
        image_url: v.string(),
        website: v.string(),
    },
    async handler(ctx, args) {
        return await ctx.db.insert("softwares", args);
    },
})