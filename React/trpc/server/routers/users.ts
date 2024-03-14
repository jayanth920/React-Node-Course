import { t } from "../trpc";
import { z } from "zod";


const userProcedure = t.procedure.input(
  z.object({
    userId: z.string(),
  })
);

// const eventEmitter  = new EventEmitter();

export const userRouter = t.router({
    
  getUser: userProcedure.query((req) => {
    return { id: req.input.userId };
  }),

  update: userProcedure
    .input(z.object({ name: z.string() })) //  OR update: t.procedure.input(z.object({ name: z.string(), userId: z.string() }))
    .output(z.object({ name: z.string(), id: z.string() }))
    .mutation((req) => {
      // eventEmitter.emit("update", req.input.userId)
      console.log(
        `Client mutation: ${req.input.userId} said that his name is ${req.input.name}`
      );
      return { id: req.input.userId, name: req.input.name };
    }),

    // onUpdate: t.procedure.subscription(() => {
    //   return observable<string>(emit => {
    //     eventEmitter.on("update", emit.next)

    //     return () => {
    //       eventEmitter.off("update", emit.next)
    //     }
    //   })
    // })
});
