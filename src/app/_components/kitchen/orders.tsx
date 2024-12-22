'use client'

import {api} from "~/trpc/react";
import {useEffect, useState} from "react";
import {BeanOrder, OrderState} from "~/server/api/routers/beans";
import PendingOrder from "~/app/_components/kitchen/pendingOrder";
import AcceptedOrder from "~/app/_components/kitchen/acceptedOrder";

interface SplitOrders {
  pending: BeanOrder[],
  accepted: BeanOrder[],
  ready: BeanOrder[]
}

export function Orders() {
  const [splitOrders, setSplitOrders] = useState<SplitOrders>({pending: [], accepted: [], ready: []});

  const [orders] = api.bean.getBeanOrders.useSuspenseQuery();

  const calcOrders = (): SplitOrders => {
    const tSplitOrders: SplitOrders = {pending: [], accepted: [], ready: []};
    // const orders = fetchOrders.query()

    for (const order of orders) {
      console.log("order: ", order);
      switch (order.orderState) {
        case OrderState.Pending:
          console.log("Pending")
          tSplitOrders.pending.push(order);
          break;
        case OrderState.Accepted:
          console.log("accepted")
          tSplitOrders.accepted.push(order);
          break;
        case OrderState.Ready:
          console.log("Ready");
          tSplitOrders.ready.push(order);
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
              splitOrders.pending ? (splitOrders.accepted.map(pendingOrder => (
                  <AcceptedOrder key={pendingOrder.orderId} order={pendingOrder} refreshOrders={refreshOrders}/>
              ))) : (<></>)
            }
          </div>
        </div>

        <div className="flex flex-row">
          {/* Ready Orders */}
        </div>

      </div>
  )
}