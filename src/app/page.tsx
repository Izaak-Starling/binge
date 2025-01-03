import {HydrateClient} from "~/trpc/server";
import {Hero} from "~/app/_components/hero";
import Header from "~/app/_components/header";

export default async function Home() {
  return (
      <HydrateClient>
        <body>
        <div className="container min-h-screen flex flex-col mx-auto">
          <Header/>

          <div className="flex bg-binge-beans-main bg-no-repeat bg-cover bg-center h-screen min-w-full z-0">

            <div className="flex w-full justify-center" style={{transform: 'translateY(75vh)'}}>
              <p className="text-binge-off-white text-3xl/[1.1em] inline-block">The bean app<br/>designed to be deleted&trade;</p>
            </div>
          </div>

          <Hero/>

          <div className="bg-binge-off-white h-screen">
            <div className="relative isolate px-6 pt-14 lg:px-8">
              <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

                <p className="text-balance text-1xl font-semibold tracking-tight text-binge-purple">
                  Binge Labs
                </p>

                <p className="text-balance text-5xl font-semibold tracking-tight text-binge-off-black relative pt-9">
                  We&apos;re bean scientists
                </p>

                <p className="mt-8 text-pretty text-lg font-1xl text-binge-off-black">
                  Our Binge Labs child laborers, underpaid farmers and line cooks study beans and bean flavours out of fear of violent retaliation.
                  They&apos;ve been working on the Binge app for 3 years now, and they&apos;re still not sure what they&apos;re doing.
                </p>

              </div>
            </div>
          </div>

        </div>
        </body>
      </HydrateClient>
  );
}


