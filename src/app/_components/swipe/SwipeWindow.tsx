'use client'

import Header from "~/app/_components/header";
import Offering from "~/app/_components/swipe/offering";
import React, {useEffect, useState} from "react";
import {api} from "~/trpc/react";
import {LuRotateCcw, LuShoppingBasket} from "react-icons/lu";
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
  }, [name, isNameModalOpen])

  return (
      <body>
      <Header/>

      {
        !name ? (<NameModal isOpen={isNameModalOpen} onNameEntered={(name: string) => storeNameInStorage(name)}/>) : ""
      }

      <div className="container min-h-screen flex flex-col mx-auto z-10">
        {beanDetails?.[swipeIndex] ? (
            <Offering beanDetails={beanDetails[swipeIndex]} userName={name} onSwipe={() => setSwipeIndex(swipeIndex + 1)}/>
        ) : (
            <div className="flex flex-col justify-center bg-binge-off-white min-w-full p-8">
              <p className="text-binge-off-black text-xl mb-6 text-center">You&apos;ve run out of beans you hungry bastard!</p>
              <div className="flex justify-center">
                <a href="/swipe">
                  <div className="p-4 rounded-full bg-binge-off-white shadow">
                    <LuRotateCcw size="1.5em"/>
                  </div>
                </a>
              </div>
            </div>
        )}

      </div>
      <footer className="footer footer-center w-screen fixed bottom-0 -z-1">
        <div className="flex justify-center pb-2">
          <a href="/orderHistory">
            <div className="p-4 rounded-full bg-binge-off-white shadow">
              <LuShoppingBasket size="1.5em"/>
            </div>
          </a>
        </div>
      </footer>
      </body>
  )
}

export default SwipeWindow;