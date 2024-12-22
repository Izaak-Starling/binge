'use client'

import {Picture} from "~/app/_components/swipe/picture";
import {BeanDetails} from "~/server/api/routers/beans";
import MatchModal from "~/app/_components/swipe/match";
import {useState} from "react";
import {api} from "~/trpc/react";

const Offering = (props: { beanDetails: BeanDetails }) => {

  const [isMatch, setIsMatch] = useState<boolean>(false);

  const orderBeans = api.bean.orderBeans.useMutation({
    onSuccess: async (response) => {
      console.log(response);
      setIsMatch(true);
    },
  });

  const onMatch = () => {
    //TODO: Set the user dynamically set from a cookie when the user opens the swipe screen
    orderBeans.mutate({beanName: props.beanDetails.name, user: "izaak"});
  }

  return (
      <div className="flex flex-col bg-binge-off-white min-w-full z-0 p-8">

        {/*Bean name section*/}
        <div className="w-full">
          <p className="text-binge-off-black text-xl">{props.beanDetails.name}</p>
          <p className="text-binge-off-black text-lg">{props.beanDetails.description}</p>
        </div>

        <Picture beanDetails={props.beanDetails} onMatch={() => onMatch()}/>

        //TODO: Make user confirm they want to order after a match. To avoid unexpected orders.
        <MatchModal isOpen={isMatch} beanName={props.beanDetails.name} doOnClose={() => {
          setIsMatch(false);
        }}/>
      </div>
  )
}

export default Offering;