import {type BeanOrder} from "~/server/api/routers/beans";

export const sortOrdersByDateAsc = (orders: BeanOrder[]): BeanOrder[] => {
  return orders.sort((a, b) => b.orderPlacedDateTime.getTime() - a.orderPlacedDateTime.getTime());
}
