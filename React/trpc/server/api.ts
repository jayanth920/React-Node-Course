import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";
import { createContext } from "./context";
// import { applyWSSHandler } from '@trpc/server/adapters/ws';
// import ws from "ws"; 


//----APP
const app = express();
const port = 8080;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext
  })
);

const server = app.listen(port, () => {
  console.log(`SERVER listening at http://localhost:${port}`);
});

// applyWSSHandler({
//     wss: new ws.Server({ server }),
//     router: appRouter,
//     createContext
// })

export type AppRouter = typeof appRouter;

