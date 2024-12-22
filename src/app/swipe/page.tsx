import {HydrateClient} from "~/trpc/server";
import Header from "~/app/_components/header";
import React from "react";
import Offering from "~/app/_components/swipe/offering";
import {BeanDetails} from "~/server/api/routers/beans";

export default async function Page() {

  const beanDetails: BeanDetails = {
    name: "Borlotti Beans",
    description: "In a tomato sauce",
    image1Url: "/img/borlotti_beans_1.jpg",
  }

  return (
      <HydrateClient>
        <body>
        <div className="container min-h-screen flex flex-col mx-auto">
          <Header/>

          <Offering beanDetails={beanDetails}/>

        </div>
        </body>
      </HydrateClient>
  );
}
