'use client'

import {api} from "~/trpc/react";
import {useEffect, useState} from "react";
import {BeanOrder, OrderState} from "~/server/api/routers/beans";
import PendingOrder from "~/app/_components/kitchen/pendingOrder";
import AcceptedOrder from "~/app/_components/kitchen/acceptedOrder";
import CompletedOrder from "~/app/_components/kitchen/completedOrder";

interface SplitOrders {
  pending: BeanOrder[],
  accepted: BeanOrder[],
  completed: BeanOrder[]
}

export function Orders() {
  const [splitOrders, setSplitOrders] = useState<SplitOrders>({pending: [], accepted: [], completed: []});

  const [orders] = api.bean.getBeanOrders.useSuspenseQuery();

  const calcOrders = (): SplitOrders => {
    const tSplitOrders: SplitOrders = {pending: [], accepted: [], completed: []};
    // const orders = fetchOrders.query()

    for (const order of orders) {
      console.log("order: ", order);
      switch (order.orderState) {
        case OrderState.Pending:
          tSplitOrders.pending.push(order);
          break;
        case OrderState.Accepted:
          tSplitOrders.accepted.push(order);
          break;
        case OrderState.Completed:
          tSplitOrders.completed.push(order);
          break;
      }
    }

    console.log("Split orders: ", tSplitOrders);

    return tSplitOrders;
  }

  const refreshOrders = () => {
    console.log("Refreshing orders");

    setSplitOrders(calcOrders);
  }

  useEffect(() => setSplitOrders(calcOrders()), [orders]);

  return (
      //TODO: Fix three columns to 1/3 of the screen width
      <div className="flex flex-row justify-around grow">

        <div className="flex flex-col items-center grow">
          {/*  Pending orders*/}
          <p className="justify-center grow-0">Pending</p>
          <div className="flex flex-row">
            {
              splitOrders.pending ? (splitOrders.pending.map(pendingOrder => (
                  <PendingOrder key={pendingOrder.orderId} order={pendingOrder} refreshOrders={refreshOrders}/>
              ))) : (<></>)
            }
          </div>
        </div>

        <div className="flex flex-col items-center grow">
          {/* Accepted Orders */}
          <p className="justify-center grow-0">Accepted</p>
          <div className="flex flex-col">
            {
              splitOrders.pending ? (splitOrders.accepted.map(acceptedOrder => (
                  <AcceptedOrder key={acceptedOrder.orderId} order={acceptedOrder} refreshOrders={refreshOrders}/>
              ))) : (<></>)
            }
          </div>
        </div>

        <div className="flex flex-col items-center grow">
          {/* Completed Orders */}
          <p className="justify-center grow-0">Completed</p>
          <div className="flex flex-col">
            {
              splitOrders.completed ? (splitOrders.completed.map(completedOrder => (
                  <CompletedOrder key={completedOrder.orderId} order={completedOrder}/>
              ))) : (<></>)
            }
          </div>
        </div>

      </div>
  )
}