'use client'

import {BeanOrder} from "~/server/api/routers/beans";
import React from "react";
import {api} from "~/trpc/react";


const PendingOrder = (props: { order: BeanOrder, refreshOrders: Function }) => {

  const utils = api.useUtils();

  const acceptOrder = api.bean.acceptOrder.useMutation({
    onSuccess: async (response) => {
      console.log(response);
      utils.bean.invalidate();
    },
  });

  const reject = (orderId: string) => {
    //TODO
  }

  return (
      <div className="max-w-sm rounded-lg bg-origin-padding overflow-hidden shadow-lg border-binge-off-black border-2 m-5" key={props.order.orderId}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.order.beanName}</div>
          <p className="text-gray-700 text-base">
            For: {props.order.name}<br/>
            Placed at: {props.order.orderPlacedDateTime.toDateString()}
          </p>
          <div className="flex flex-row justify-around pt-4">
            <button className="rounded-full bg-binge-green px-3.5 py-2.5 text-sm font-semibold text-binge-off-black" onClick={() => acceptOrder.mutate({orderId: props.order.orderId})}>
              Accept
            </button>

            <button className="rounded-full bg-binge-red px-3.5 py-2.5 text-sm font-semibold text-binge-off-black" onClick={() => reject(props.order.orderId)}>
              Reject
            </button>
          </div>
        </div>
      </div>
  )

}

export default PendingOrder;