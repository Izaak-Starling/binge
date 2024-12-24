import {HydrateClient} from "~/trpc/server";
import React from "react";
import SwipeWindow from "~/app/_components/swipe/swipeWindow";

export default async function Page() {

  // TODO: Make user enter name on first visit, use in requests to BE later
  return (
      <HydrateClient>
        <SwipeWindow/>
      </HydrateClient>
  );
}
