import {HydrateClient} from "~/trpc/server";
import Header from "~/app/_components/header";
import {Picture} from "~/app/_components/swipe/picture";

export default async function Page() {
  return (
      <HydrateClient>
        <body>
        <div className="container min-h-screen flex flex-col mx-auto">
          <Header/>

          <div className="flex flex-col bg-binge-off-white min-w-full z-0 p-8">

            {/*Bean name section*/}
            <div className="w-full">
              <p className="text-binge-off-black text-xl">Borlotti Beans</p>
              <p className="text-binge-off-black text-lg">In a tomato sauce</p>
            </div>

            <Picture/>

          </div>
        </div>
        </body>
      </HydrateClient>
  );
}
