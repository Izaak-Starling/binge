'use client'

import {api} from "~/trpc/react";
import {useEffect, useState} from "react";
import {BeanOrder} from "~/server/api/routers/beans";
import PendingOrder from "~/app/_components/kitchen/pendingOrder";

export function Orders() {
  const [orders, setOrders] = useState<BeanOrder[]>([]);

  const [tempOrders] = api.bean.getBeanOrders.useSuspenseQuery();

  const refreshOrders = () => {
    setOrders(api.bean.getBeanOrders.useQuery().data ?? []);
  }

  useEffect(() => {
    setOrders(tempOrders);
  }, [tempOrders]);

  return (
      <>{
        orders ? (
            orders.map(theOrder => (<PendingOrder
                    key={theOrder.beanId}
                    order={theOrder}
                    refresh={refreshOrders}/>
            ))
        ) : (<></>)
      }
      </>
  )
}