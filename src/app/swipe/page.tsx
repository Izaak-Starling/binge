import {api, HydrateClient} from "~/trpc/server";
import Header from "~/app/_components/header";
import {Hero} from "~/app/_components/hero";

export default async function Page() {

  void api.post.getLatest.prefetch();

  return (
      <HydrateClient>
        <body>
        <div className="container min-h-screen flex flex-col mx-auto">
          <Header/>

          <div className="flex bg-binge-off-white h-screen min-w-full z-0">

            {/*Bean name section*/}
            <div className="flex w-screen">
              <p className="text-binge-off-black text-xl">Borlotti Beans</p>
              <p className="text-binge-off-black text-lg">In a tomato sauce</p>
            </div>

            <div className="flex w-full justify-center" style={{transform: 'translateY(75vh)'}}>
              <p className="text-binge-off-white text-3xl/[1.1em] inline-block">The bean app<br/>designed to be deleted&trade;</p>
            </div>
          </div>

          <Hero/>
        </div>
        </body>
      </HydrateClient>
  );
}
