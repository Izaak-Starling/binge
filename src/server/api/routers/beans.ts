import {initTRPC} from '@trpc/server';
import {z} from "zod";

export enum OrderState {
  Pending,
  Accepted,
  Completed,
  Cancelled
}

export interface BeanOrder {
  orderId: string,
  beanName: string;
  name: string;
  orderState: OrderState,
  orderPlacedDateTime: Date
}

export interface BeanIngredients {
  line1: string,
  line2: string,
  line3: string,
}

export interface BeanDetails {
  name: string,
  description: string,
  image1Url: string,
  ingredients: BeanIngredients,
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
    ingredients: {line1: "Glue", line2: "Glue", line3: "Glue"}
  },
  {
    name: "Homemade Cider",
    description: "Tangy",
    image1Url: "/img/homemade_cider_1.jpg",
    ingredients: {line1: "Apples", line2: "Honey", line3: "Germs"}
  },
  {
    name: "Mead",
    description: "Not fit for human consumption",
    image1Url: "/img/mead_1.jpg",
    ingredients: {line1: "Honey", line2: "Petrol", line3: "Lighter Fluid"}
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

  rejectOrder: t.procedure
  .input(
      z.object({
        orderId: z.string()
      })
  ).mutation(async (opts) => {
    const {input} = opts;

    const order = beanOrders.find(order => order.orderId === input.orderId);
    if (order) {
      order.orderState = OrderState.Cancelled;
    }
  }),

  getBeanOrders: t.procedure.query(() => {
    return beanOrders;
  }),

  getBeanOrdersByName: t.procedure
  .input(z.object({
    name: z.string(),
  }))
  .query(async (opts) => {
    const {input} = opts;

    return beanOrders.filter(order => order.name === input.name);
  }),

  getBeanDetails: t.procedure.query(() => {
    return beanDetails;
  })
});

