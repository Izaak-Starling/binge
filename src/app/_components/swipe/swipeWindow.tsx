'use client'

import Header from "~/app/_components/header";
import Offering from "~/app/_components/swipe/offering";
import React, {useState} from "react";
import {api} from "~/trpc/react";
import {LuShoppingBasket} from "react-icons/lu";


const SwipeWindow = () => {

  const [swipeIndex, setSwipeIndex] = useState<number>(0)

  const {data: beanDetails = []} = api.bean.getBeanDetails.useQuery();


  return (
      <body>
      <Header/>
      <div className="container min-h-screen flex flex-col mx-auto">
        {beanDetails?.[swipeIndex] ? (
            <Offering beanDetails={beanDetails[swipeIndex]} onSwipe={() => setSwipeIndex(swipeIndex + 1)}/>
        ) : (
            <p className="text-binge-off-black">You&apos;ve run out of beans you hungry bastard!</p>
            // TODO: Add ability to go back to the start
            // TODO: Tell izaak how stinky he is
        )}

      </div>
      <footer className="footer footer-center w-screen fixed bottom-0">
        <div className="flex justify-center pb-2">
          <div className="p-4 rounded-full shadow">
            <LuShoppingBasket size="1.5em"/>
          </div>
        </div>
      </footer>
      </body>
  )
}

export default SwipeWindow;