import {api, HydrateClient} from "~/trpc/server";
import {Hero} from "~/app/_components/hero";
import Header from "~/app/_components/header";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
      <HydrateClient>
        <body>
        <div className="container min-h-screen flex flex-col mx-auto">
          <Header/>

          <div className="bg-binge-beans-main bg-no-repeat bg-cover bg-center bg-fixed h-screen w-screen"></div>

            <Hero/>
        </div>
        </body>
      </HydrateClient>
  );
}


