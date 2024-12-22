import {BeanOrder} from "~/server/api/routers/beans";
import React from "react";

const CompletedOrder = (props: { order: BeanOrder }) => {

  return (
      <div className="max-w-sm rounded-lg bg-origin-padding overflow-hidden shadow-lg border-binge-off-black border-2 m-5" key={props.order.orderId}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.order.beanName}</div>
          <p className="text-gray-700 text-base">
            For: {props.order.name}<br/>
            Placed at: {props.order.orderPlacedDateTime.toDateString()}
          </p>
        </div>
      </div>
  )

}

export default CompletedOrder;