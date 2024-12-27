'use client'

import Header from "~/app/_components/header";
import Offering from "~/app/_components/swipe/offering";
import React, {useEffect, useState} from "react";
import {api} from "~/trpc/react";
import {LuShoppingBasket} from "react-icons/lu";
import NameModal from "~/app/_components/swipe/NameModal";

const SwipeWindow = () => {

  const [swipeIndex, setSwipeIndex] = useState<number>(0)
  const [name, setName] = useState<string>("");
  const {data: beanDetails = []} = api.bean.getBeanDetails.useQuery();
  const [isNameModalOpen, setIsNameModalOpen] = useState<boolean>(false);

  // TODO: Validate name was valid
  const storeNameInStorage = (name: string) => {
    if (typeof window === 'object') {
      window.localStorage.setItem("name", name);
      setIsNameModalOpen(false);
    }
  }

  useEffect(() => {
    const name = window.localStorage.getItem("name")
    setName(name ?? "");
    if (!name) {
      setIsNameModalOpen(true);
    }
  })

  return (
      <body>
      <Header/>

      {
        !name ? (<NameModal isOpen={isNameModalOpen} onNameEntered={(name: string) => storeNameInStorage(name)}/>) : ""
      }

      <div className="container min-h-screen flex flex-col mx-auto">
        {beanDetails?.[swipeIndex] ? (
            <Offering beanDetails={beanDetails[swipeIndex]} userName={name} onSwipe={() => setSwipeIndex(swipeIndex + 1)}/>
        ) : (
            <p className="text-binge-off-black">You&apos;ve run out of beans you hungry bastard!</p>
            // TODO: Add ability to go back to the start
            // TODO: Tell izaak how stinky he is
        )}

      </div>
      <footer className="footer footer-center w-screen fixed bottom-0">
        <div className="flex justify-center pb-2">
          <a href="/orderHistory">
            <div className="p-4 rounded-full shadow">
              <LuShoppingBasket size="1.5em"/>
            </div>
          </a>
        </div>
      </footer>
      </body>
  )
}

export default SwipeWindow;