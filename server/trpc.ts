import { initTRPC } from '@trpc/server';

const instance = initTRPC.create()

export const { router, procedure } = instance