import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

  softwares: defineTable({
    description: v.string(),
    image_url: v.string(),
    name: v.string(),
    price: v.float64(),
    website: v.string(),
  }),
});