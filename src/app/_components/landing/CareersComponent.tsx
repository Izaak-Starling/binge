const CareersComponent = () => {

  return (
      <div className="bg-binge-off-white h-screen/2">
        <div className="relative isolate px-6 pt-1 lg:px-8">
          <div className="mx-auto max-w-2xl py-0 sm:py-48 lg:py-56">

            <div className="w-full flex justify-center mt-24">
              <div style={{backgroundImage: `url(/img/miners.jpeg)`}}
                   className="bg-[image:var(--background-image-url)] relative box-border bg-center bg-no-repeat bg-cover w-[25rem] h-[15rem] rounded-lg mt-4 mb-10">
              </div>
            </div>

            <p className="text-balance text-1xl font-semibold tracking-tight text-binge-purple pt-3">
              Work at Binge
            </p>

            <p className="text-balance text-5xl font-semibold tracking-tight text-binge-off-black relative pt-9">
              Let&apos;s work together
            </p>

            <p className="mt-8 text-pretty text-lg font-1xl text-binge-off-black pb-40">
              We&apos;re looking for people that want to make beans addictive. Like, turn of the 19th century Coke-a-Cola, addictive.
            </p>
          </div>
        </div>
      </div>
  )
}

export default CareersComponent;