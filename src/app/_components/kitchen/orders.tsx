'use client'

import {api} from "~/trpc/react";
import {useEffect, useRef, useState} from "react";
import {type BeanOrder, OrderState} from "~/server/api/routers/beans";
import PendingOrder from "~/app/_components/kitchen/pendingOrder";
import AcceptedOrder from "~/app/_components/kitchen/acceptedOrder";
import CompletedOrder from "~/app/_components/kitchen/completedOrder";

interface SplitOrders {
  pending: BeanOrder[],
  accepted: BeanOrder[],
  completed: BeanOrder[]
}

export function Orders() {
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [splitOrders, setSplitOrders] = useState<SplitOrders>({pending: [], accepted: [], completed: []});
  const utils = api.useUtils();
  const {data: orders = []} = api.bean.getBeanOrders.useQuery();

  const musicPlayers = useRef<HTMLAudioElement | undefined>(
      typeof Audio !== "undefined" ? new Audio("/audio/maccas.m4a") : undefined
  );

  const calcOrders = (): SplitOrders => {
    console.log("Calcing orders " + isFirstRender);
    const tSplitOrders: SplitOrders = {pending: [], accepted: [], completed: []};
    // const orders = fetchOrders.query()

    for (const order of orders) {
      switch (order.orderState) {
        case OrderState.Pending:
          tSplitOrders.pending.push(order);
          break;
        case OrderState.Accepted:
          tSplitOrders.accepted.push(order);
          break;
        case OrderState.Completed:
        case OrderState.Cancelled:
          tSplitOrders.completed.push(order);
          break;
      }
    }

    if (!isFirstRender && (orders.length) > (splitOrders.pending.length + splitOrders.accepted.length + splitOrders.completed.length)) {
      // New order present, play beep sound
      void musicPlayers.current?.play();
    }

    if (isFirstRender) {
      setIsFirstRender(false);
    }

    return tSplitOrders;
  }

  // TODO: FInd why this is broken
  useEffect(() => setSplitOrders(calcOrders()), [orders]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      void utils.bean.invalidate().then((orders) => {
        //No-op
      });
    }, 10000); // Poll every 10 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [orders]);

  return (
      <div className="flex flex-row justify-around w-full h-screen overflow-y-hidden">
        <div className="flex flex-col items-center w-1/3 overflow-auto">
          {/*  Pending orders*/}
          <p className="justify-center">Pending</p>
          <div className="flex flex-col">
            {
              splitOrders.pending ? (splitOrders.pending.map(pendingOrder => (
                  <PendingOrder key={pendingOrder.orderId} order={pendingOrder}/>
              ))) : (<></>)
            }
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3 overflow-auto">
          {/* Accepted Orders */}
          <p className="justify-center">Accepted</p>
          <div className="flex flex-col">
            {
              splitOrders.pending ? (splitOrders.accepted.map(acceptedOrder => (
                  <AcceptedOrder key={acceptedOrder.orderId} order={acceptedOrder}/>
              ))) : (<></>)
            }
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3 overflow-auto">
          {/* Completed Orders */}
          <p className="justify-center">Completed</p>
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