import {initTRPC} from '@trpc/server';
import {z} from "zod";

export const t = initTRPC.create();

export const beanRouter = t.router({
  orderBeans: t.procedure
  .input(
      z.object({
        beanId: z.string(),
        user: z.string()
      })
  )
  .mutation(async (opts) => {
    const {input} = opts;
    console.log("Ordering beans " + input.beanId + " for user " + input.user);
    return {
      text: "Ordering beans " + input.beanId + " for user " + input.user,
    };
  }),
});