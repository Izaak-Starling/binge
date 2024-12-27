'use client'

import {api} from "~/trpc/react";
import OrderCard from "~/app/_components/orderHistory/orderCard";
import React, {useEffect, useState} from "react";
import {LuBean} from "react-icons/lu";
import Header from "~/app/_components/header";

const OrderHistoryPage = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (typeof window === 'object') {
      setUserName(window.localStorage.getItem("name") ?? "");
    }
  })

  const {data: orders = []} = api.bean.getBeanOrdersByName.useQuery({name: userName});
  if (!userName) {
    return (
        <p>Username not set</p>
    );
  }

  return (
      <>
        <Header/>

        <div className="z-0 p-8">
          <p className="text-binge-off-black text-xl ">Your Matches!</p>
          {orders.length === 0 ? (<p>You dont have any matches :(</p>) : ""}
          <div>
            {(orders.map(order => (
                <OrderCard key={order.orderId} order={order}/>
            )))}
          </div>
        </div>

        <footer className="footer footer-center w-screen fixed bottom-0">
          <div className="flex justify-center pb-2">
            <a href="/swipe">
              <div className="p-4 bg-binge-off-white rounded-full shadow">
                <LuBean size="1.5em"/>
              </div>
            </a>
          </div>
        </footer>
      </>
  );
}

export default OrderHistoryPage;