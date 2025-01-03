const BingeLabsComponent = () => {

  return (
      <div className="bg-binge-off-white h-screen">
        <div className="relative isolate px-6 pt-1 lg:px-8">
          <div className="mx-auto max-w-2xl py-0 sm:py-48 lg:py-56">

            <div style={{backgroundImage: `url(/img/beanman.webp)`}}
                 className="bg-[image:var(--background-image-url)] relative box-border bg-center bg-no-repeat bg-cover w-[20rem] aspect-square rounded-lg mt-4 mb-10 ml-28">
            </div>

            <p className="text-balance text-1xl font-semibold tracking-tight text-binge-purple">
              Binge Labs
            </p>

            <p className="text-balance text-5xl tracking-tight text-binge-off-black font-serif relative pt-9">
              We&apos;re bean scientists
            </p>

            <p className="mt-8 text-pretty text-lg font-1xl text-binge-off-black">
              Our Binge Labs child laborers, underpaid farmers and line cooks study beans and bean flavours out of fear of violent retaliation.
              They&apos;ve been working on the Binge app for 3 years now, and they&apos;re still not sure what they&apos;re doing.
            </p>

          </div>
        </div>
      </div>
  )
}

export default BingeLabsComponent;