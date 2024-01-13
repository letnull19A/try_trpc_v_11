import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";
import { db } from "./database";
import { procedure, router } from "./trpc";
import cors from 'cors';

const appRouter = router({
    userList: procedure
        .query(async () => {
            const users = await db.user.findMany();
            return users;
        }),
    userById: procedure
        .input(z.string())
        .query(async (opts) => {
            const { input } = opts;
            const user = await db.user.findById(input);
            return user;
        }),
    userCreate: procedure
        .input(z.object({ name: z.string() }))
        .mutation(async (opts) => {
            const { input } = opts;
            const user = await db.user.create(input);
            return user;
        }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
    middleware: cors(),
    router: appRouter,
});

console.log('server started now')

server.listen(3000);