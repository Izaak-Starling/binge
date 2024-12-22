import {HydrateClient} from "~/trpc/server";
import React from "react";
import SwipeWindow from "~/app/_components/swipe/swipeWindow";

export default async function Page() {


  return (
      <HydrateClient>
        <SwipeWindow/>
      </HydrateClient>
  );
}
