import {initTRPC} from '@trpc/server';
import {z} from "zod";

export enum OrderState {
  Pending,
  Accepted,
  Completed
}

export interface BeanOrder {
  orderId: string,
  beanName: string;
  name: string;
  orderState: OrderState,
  orderPlacedDateTime: Date
}

export interface BeanDetails {
  name: string,
  description: string,
  image1Url: string,
}

const beanOrders: BeanOrder[] = [
  {
    orderId: "abc",
    beanName: "Borlotti Beans",
    name: "John",
    orderState: OrderState.Pending,
    orderPlacedDateTime: new Date(),
  },
  {
    orderId: "def",
    beanName: "Homemade Cider",
    name: "Jane",
    orderState: OrderState.Accepted,
    orderPlacedDateTime: new Date(),
  }
];

const beanDetails: BeanDetails[] = [
  {
    name: "Borlotti Beans",
    description: "In a tomato sauce",
    image1Url: "/img/borlotti_beans_1.jpg",
  }
]


const t = initTRPC.create({isServer: true});

export const beanRouter = t.router({
  orderBeans: t.procedure
  .input(
      z.object({
        beanName: z.string(),
        user: z.string()
      })
  )
  .mutation(async (opts) => {
    const {input} = opts;

    beanOrders.push({
      orderId: crypto.randomUUID(),
      beanName: input.beanName,
      name: input.user,
      orderState: OrderState.Pending,
      orderPlacedDateTime: new Date(),
    })
    console.log("Ordering beans " + input.beanName + " for user " + input.user);
  }),

  acceptOrder: t.procedure
  .input(
      z.object({
        orderId: z.string()
      })
  ).mutation(async (opts) => {
    const {input} = opts;

    const order = beanOrders.find(order => order.orderId === input.orderId);
    if (order) {
      order.orderState = OrderState.Accepted;
    }
  }),

  completeOrder: t.procedure
  .input(
      z.object({
        orderId: z.string()
      })
  ).mutation(async (opts) => {
    const {input} = opts;

    const order = beanOrders.find(order => order.orderId === input.orderId);
    if (order) {
      order.orderState = OrderState.Completed;
    }
  }),

  getBeanOrders: t.procedure.query(() => {
    return beanOrders;
  }),
});

