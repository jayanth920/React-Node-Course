import { z } from "zod";
import { adminProcedure, t } from "../trpc";
import { userRouter } from "./users";

export const stringCheckProcedure = t.procedure.input(z.string());

export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hi";
  }),
  log: stringCheckProcedure.mutation((req) => {
    console.log(`Client says: ${req.input} `);
    return true;
  }),
  secretData: adminProcedure.query(({ctx})=>{
    console.log(ctx.user)
    return "Super Secret Admin Data"

  }),
  users: userRouter,
});

