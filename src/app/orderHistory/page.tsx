import {HydrateClient} from "~/trpc/server";
import React from "react";
import OrderHistoryPage from "~/app/_components/orderHistory/orderHistoryPage";

export default async function Page() {

  return (
      <HydrateClient>
        <OrderHistoryPage/>
      </HydrateClient>
  );
}