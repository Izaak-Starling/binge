import {HydrateClient} from "~/trpc/server";
import {Orders} from "~/app/_components/kitchen/orders";

export default async function Page() {

  return (
      <HydrateClient>
        <body>
        <Orders/>
        </body>
      </HydrateClient>
  )
}