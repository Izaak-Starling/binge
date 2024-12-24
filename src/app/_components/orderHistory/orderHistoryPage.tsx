'use client'

import {api} from "~/trpc/react";
import OrderCard from "~/app/_components/orderHistory/orderCard";

const OrderHistoryPage = () => {
  const userName: string = window.localStorage.getItem("name") || "";

  let {data: orders = []} = api.bean.getBeanOrdersByName.useQuery({name: userName});
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