'use client'

import {BeanOrder} from "~/server/api/routers/beans";
import React from "react";

const PendingOrder = (props: { order: BeanOrder, refresh: Function }) => {

  const accept = (orderId: string) => {
    console.log("Accepting order " + orderId);
  };

  const reject = (orderId: string) => {
    //TODO
  }

  return (
      <div className="max-w-sm rounded-lg bg-origin-padding overflow-hidden shadow-lg border-binge-off-black border-2 m-5" key={props.order.beanId}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.order.beanId}</div>
          <p className="text-gray-700 text-base">
            For: {props.order.name}
          </p>
          <div className="flex flex-row justify-around pt-4">
            <button className="rounded-full bg-binge-green px-3.5 py-2.5 text-sm font-semibold text-binge-off-black" onClick={() => accept(props.order.beanId)}>
              Accept
            </button>

            <button className="rounded-full bg-binge-red px-3.5 py-2.5 text-sm font-semibold text-binge-off-black" onClick={() => reject(props.order.beanId)}>
              Reject
            </button>
          </div>
        </div>
      </div>
  )

}

export default PendingOrder;