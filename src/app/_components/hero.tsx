import OffBlackButton from "~/app/_components/offBlackButton";

export function Hero() {

  return (
      <div className="bg-binge-off-white h-screen">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

            <p className="text-balance text-1xl font-semibold tracking-tight text-binge-purple sm:text-7xl">
              Our Approach
            </p>

            <p className="text-balance text-5xl font-semibold tracking-tight text-binge-off-black relative pt-9">
              Eat your&nbsp;
              <span className="relative inline whitespace-normal p[0.75%]">
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                     className="w-[110%] absolute stroke-binge-purple stroke-20 -translate-x-1/2 pointer-events-none h-[110%] inset-1/2 -translate-y-1/2"
                     viewBox="0 0 243 80">
                  <ellipse rx="111" ry="35" cy="40" cx="125"/>
                </svg>
              last
              </span>
              <br/>beans.
            </p>

            <p className="mt-8 text-pretty text-lg font-1xl text-binge-off-black">
              Binge is built on the belief that anyone looking for beans should be able to find them.
              It&apos;s also built on an algorithm written on 5 pints and a pack of ciggies,
              so we can succeed in getting you beans, not keeping you on the app.
            </p>

            <div className="pt-9">
              <OffBlackButton text={"Eat"}/>
            </div>

          </div>
        </div>
      </div>
  )
}
