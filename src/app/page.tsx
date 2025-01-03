import {HydrateClient} from "~/trpc/server";
import {OurApproachComponent} from "~/app/_components/landing/ourApproachComponent";
import Header from "~/app/_components/header";
import BingeLabsComponent from "~/app/_components/landing/BingeLabsComponent";
import UserTestimonyComponent from "~/app/_components/landing/UserTestimonyComponent";
import CareersComponent from "~/app/_components/landing/CareersComponent";

export default async function Home() {
  return (
      <HydrateClient>
        <body>
        <div className="container min-h-screen flex flex-col mx-auto overflow-hidden">
          <Header/>

          <div className="flex bg-binge-beans-main bg-no-repeat bg-cover bg-center h-screen min-w-full z-0">

            <div className="flex w-full justify-center" style={{transform: 'translateY(75vh)'}}>
              <p className="text-binge-off-white text-3xl/[1.1em] inline-block">The bean app<br/>designed to be deleted&trade;</p>
            </div>
          </div>

          <OurApproachComponent/>

          <BingeLabsComponent/>

          <UserTestimonyComponent/>

          <CareersComponent/>
        </div>
        </body>
      </HydrateClient>
  );
}


