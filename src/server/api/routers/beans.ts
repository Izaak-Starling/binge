import {initTRPC} from '@trpc/server';
import {z} from "zod";

export const t = initTRPC.create();

export interface BeanOrder {
  beanId: string;
  name: string;
}

const beanOrders: BeanOrder[] = [
  {
    beanId: "1",
    name: "John"
  },
  {
    beanId: "2",
    name: "Jane"
  }
];

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

  getBeanOrders: t.procedure.query(() => {
    return beanOrders;
  }),
});

