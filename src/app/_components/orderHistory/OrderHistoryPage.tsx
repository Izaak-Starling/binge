'use client'

import {api} from "~/trpc/react";
import OrderCard from "~/app/_components/orderHistory/orderCard";

// TODO: Add a back button
const OrderHistoryPage = () => {
  let userName = "";

  if (typeof window === 'object') {
    userName = window.localStorage.getItem("name") ?? "";
  }

  const {data: orders = []} = api.bean.getBeanOrdersByName.useQuery({name: userName});
  if (userName) {

    return (
        <div>
          {(orders.map(order => (
              <OrderCard key={order.orderId} order={order}/>
          )))}
        </div>
    );
  }

  return (
      <p>Username not set</p>
  );

}

export default OrderHistoryPage;