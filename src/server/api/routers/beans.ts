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

export interface BeanSpecifics {
  temperature: string,
  chefName: string,
  pairingSuggestion: string,
  additionalInfo: string,
}

export interface BeanDetails {
  name: string,
  description: string,
  image1Url: string,
  ingredients: BeanIngredients,
  specifics: BeanSpecifics,
}

const beanOrders: BeanOrder[] = [
];

const beanDetails: BeanDetails[] = [
  {
    name: "Succulent Beef Stew",
    description: "In a rich red wine sauce, with Thyme, Potatoes and Carrots",
    image1Url: "/img/boeuf.webp",
    ingredients: {line1: "Beef", line2: "Wine", line3: "Carrot"},
    specifics: {temperature: "Hot", chefName: "Mr Izaak Birchall But French", pairingSuggestion: "Homemade Cider (2024)", additionalInfo: "Do not consume if you have a pacemaker"}
  },
  {
    name: "배추된장국 (Ve)",
    description: "Cabbage & Soybean Paste Soup with Sticky Rice",
    image1Url: "/img/baechu-doenjang-guk.jpg",
    ingredients: {line1: "된장", line2: "Cabbage", line3: "고추장"},
    specifics: {temperature: "Hot", chefName: "Mr Izaak Birchall But Korean", pairingSuggestion: "Homemade Cider (2025)", additionalInfo: "We brought this back on the plane from Korea 3 months ago"}
  },
  {
    name: "Aubergine Curry (Ve) and Chicken Curry",
    description: "With Rice",
    image1Url: "/img/auberginecurry.avif",
    ingredients: {line1: "Aubergine", line2: "Chickpeas", line3: "Chicken (Optional)"},
    specifics: {temperature: "Hot", chefName: "Jaz From Sufra", pairingSuggestion: "Homemade Cider (2024)", additionalInfo: "We took this food instead of giving it to a homeless person"}
  }
  {
    name: "Homemade Cider (2025)",
    description: "Sweet with Lemon Tasting Notes. Approx 4.5% ABV",
    image1Url: "/img/lemoncider.png",
    ingredients: {line1: "Apples", line2: "Lemon", line3: "Germs"},
    specifics: {temperature: "Cold", chefName: "Nelly the Natural Yeast", pairingSuggestion: "Homemade Cider (2024)", additionalInfo: "1 in 5 Apples is actually a Pear"}
  },
  {
    name: "Homemade Cider (2024)",
    description: "Tangy. Approx 6% ABB",
    image1Url: "/img/homemade_cider_1.jpg",
    ingredients: {line1: "Apples", line2: "Honey", line3: "Germs"},
    specifics: {temperature: "Cold", chefName: "Nelson the Natural Yeast", pairingSuggestion: "Homemade Cider (2025)", additionalInfo: "The average spider eats 5 humans in their sleep each year"}
  },
  {
    name: "Mead",
    description: "Not fit for human consumption. Approx 97% ABV",
    image1Url: "/img/mead_1.jpg",
    ingredients: {line1: "Honey", line2: "Petrol", line3: "Lighter Fluid"},
    specifics: {temperature: "78c", chefName: "The monk we keep in the walls", pairingSuggestion: "Fomepizole 5mg", additionalInfo: "Do not consume"}
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

