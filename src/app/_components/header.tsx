'use client'

import {Bars2Icon, XMarkIcon} from "@heroicons/react/24/outline";
import OffBlackButton from "~/app/_components/offBlackButton";
import {Dialog, DialogPanel} from "@headlessui/react";
import {useState} from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    {name: 'Mission', href: 'https://en.wikipedia.org/wiki/Gunpowder_Plot'},
    {name: 'Careers', href: 'https://www.spellingmistakescostlives.com/single-post/the-great-ai-hoax'},
    {name: 'Labs', href: 'https://lcc.org.uk/'},
    {name: 'Impact', href: 'https://www.theguardian.com/environment/2022/jun/03/car-tyres-produce-more-particle-pollution-than-exhausts-tests-show'},
  ]

  return (
      <>
        <header className="inset-x-0 sticky top-0 z-50 bg-binge-off-white left-0 w-full drop-shadow-sm">

          <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
            <div className="hidden lg:flex-1">
              {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                    {item.name}
                  </a>
              ))}
            </div>
            <div className="flex lg:hidden">
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars2Icon aria-hidden="true" className="size-9 stroke-binge-off-black"/>
              </button>
            </div>
            <div className="lg:gap-6">
              <p className="text-4xl tracking-tight text-binge-off-black sm:text-[5rem]">Binge</p>
            </div>
            <OffBlackButton text="Eat"/>
          </nav>

          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50"/>
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-binge-off-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-9 stroke-binge-off-white"/>
              </button>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold text-binge-off-white"
                        >
                          {item.name}
                        </a>
                    ))}
                  </div>
                </div>
              </div>


            </DialogPanel>
          </Dialog>
        </header>
      </>
  )
}

export default Header;