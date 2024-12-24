import {type BeanOrder, OrderState} from "~/server/api/routers/beans";
import {minsSinceDate} from "~/app/util/DateUtil";
import React from "react";

const OrderCard = (props: { order: BeanOrder }) => {

  const mapState = (state: OrderState): string => {
    switch (state) {
      case OrderState.Pending:
        return "Pending";
      case OrderState.Accepted:
        return "Accepted";
      case OrderState.Completed:
        return "Completed";
      case OrderState.Cancelled:
        return "Cancelled";
    }
    return "Unknown";
  }

  return (
      <div
          className={"max-w-sm rounded-lg bg-origin-padding overflow-hidden shadow-lg border-binge-off-black border-2 m-5" + (props.order.orderState === OrderState.Cancelled ? " shadow-red-700" : "")}
          key={props.order.orderId}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.order.beanName}</div>
          <p className="text-gray-700 text-base">
            Placed {minsSinceDate(props.order.orderPlacedDateTime)} minutes ago<br/>
            In State: {mapState(props.order.orderState)}
          </p>
        </div>
      </div>
  );
}

export default OrderCard;