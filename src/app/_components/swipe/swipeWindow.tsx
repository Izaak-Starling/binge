'use client'

import Header from "~/app/_components/header";
import Offering from "~/app/_components/swipe/offering";
import React, {useState} from "react";
import {api} from "~/trpc/react";

const SwipeWindow = () => {

  const [swipeIndex, setSwipeIndex] = useState<number>(0)

  const [beanDetails] = api.bean.getBeanDetails.useSuspenseQuery();


  return (
      <body>
      <Header/>
      <div className="container min-h-screen flex flex-col mx-auto">
        {beanDetails && beanDetails[swipeIndex] ? (
            <Offering beanDetails={beanDetails[swipeIndex]!} onSwipe={() => setSwipeIndex(swipeIndex + 1)}/>
        ) : (
            <p>You've run out of beans you hungry bastard!</p>
            // TODO: Add ability to go back to the start
            // TODO: Tell izaak how stinky he is
        )}

      </div>
      </body>
  )
}

export default SwipeWindow;