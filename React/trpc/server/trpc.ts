import { TRPCError, inferAsyncReturnType, initTRPC } from "@trpc/server";
import { createContext } from "./context";

export const t = initTRPC
  .context<inferAsyncReturnType<typeof createContext>>()
  .create();

const isAdminMiddleware = t.middleware(async ({ ctx, next }) => {
  // Wrap the synchronous logic in a Promise
  await Promise.resolve();
    if (!ctx.isAdmin) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return await next({ ctx: { user: { id: 1 } } });
});

export const adminProcedure = t.procedure.use(isAdminMiddleware);
