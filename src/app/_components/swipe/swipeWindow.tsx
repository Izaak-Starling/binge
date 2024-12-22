'use client'

import Header from "~/app/_components/header";
import Offering from "~/app/_components/swipe/offering";
import React from "react";
import {api} from "~/trpc/react";

const SwipeWindow = () => {

  const [beanDetails] = api.bean.getBeanDetails.useSuspenseQuery();

  return (
      <body>
      <div className="container min-h-screen flex flex-col mx-auto">
        <Header/>


        {beanDetails && beanDetails.length > 0 ? (
            <Offering beanDetails={beanDetails[0]!}/>
        ) : (
            <p>You've run out of beans you hungry bastard!</p>
        )}

      </div>
      </body>
  )
}

export default SwipeWindow;