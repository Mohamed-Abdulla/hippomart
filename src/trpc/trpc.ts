import { initTRPC } from "@trpc/server";

//api endpoint
const t = initTRPC.context().create();
export const router = t.router;
//public endpoint
export const publicProcedure = t.procedure;
