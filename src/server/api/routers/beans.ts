import {initTRPC} from '@trpc/server';
import {z} from "zod";

export const t = initTRPC.create();

interface BeanOrder {
  beanId: string;
  name: string;
}

const beanOrders: BeanOrder[] = [];

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

    beanOrders.push({
      beanId: input.beanId,
      name: input.user
    })
    console.log("Ordering beans " + input.beanId + " for user " + input.user);
  }),
});