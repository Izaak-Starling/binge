'use client'

import {PictureCard} from "~/app/_components/swipe/PictureCard";
import {type BeanDetails} from "~/server/api/routers/beans";
import MatchModal from "~/app/_components/swipe/MatchModal";
import {useState} from "react";
import {api} from "~/trpc/react";
import SwipeButton from "~/app/_components/swipe/SwipeButton";
import IngredientsCard from "~/app/_components/swipe/IngredientsCard";
import SpecificsCard from "~/app/_components/swipe/SpecificsCard";

const Offering = (props: { beanDetails: BeanDetails, userName: string, onSwipe: () => void }) => {

  const [isMatch, setIsMatch] = useState<boolean>(false);

  const orderBeans = api.bean.orderBeans.useMutation({
    onSuccess: async (response) => {
      console.log(response);
      setIsMatch(true);
    },
  });

  const onMatch = () => {
    //TODO: Set the user dynamically set from a cookie when the user opens the swipe screen
    orderBeans.mutate({beanName: props.beanDetails.name, user: props.userName});
  }

  return (
      <div className="flex flex-col bg-binge-off-white min-w-full p-8">

        {/*Bean name section*/}
        <div className="w-full">
          <p className="text-binge-off-black text-xl">{props.beanDetails.name}</p>
          <p className="text-binge-off-black text-lg">{props.beanDetails.description}</p>
        </div>

        <PictureCard beanDetails={props.beanDetails} onMatch={() => onMatch()}/>

        <IngredientsCard beanIngredients={props.beanDetails.ingredients}/>

        <SpecificsCard specifics={props.beanDetails.specifics}/>

        <SwipeButton onSwipe={() => props.onSwipe()}/>

        {/*//TODO: Make user confirm they want to order after a match. To avoid unexpected orders.*/}
        <MatchModal isOpen={isMatch} beanName={props.beanDetails.name} doOnClose={() => {
          setIsMatch(false);
          props.onSwipe();
        }}/>
      </div>
  )
}

export default Offering;