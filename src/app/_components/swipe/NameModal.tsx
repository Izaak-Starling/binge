import {Button, Dialog, DialogPanel, DialogTitle, Input} from "@headlessui/react";
import React, {useRef} from "react";

const NameModal = (props: { onNameEntered: (name: string) => void, isOpen: boolean }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
      // TODO: Do not let them close the dialog, make them enter a name
      <Dialog open={props.isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => {//Noop
      }} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
                transition
                className="w-full max-w-md rounded-xl bg-binge-off-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 shadow-xl"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-binge-off-black">
                Please enter your name to continue
              </DialogTitle>

              <div
                  className="flex items-center rounded-md bg-binge-off-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <Input
                    id="userName"
                    name="userName"
                    ref={inputRef}
                    type="text"
                    placeholder="Bozo McBozoface"
                    className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-binge-off-black placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />

                <Button
                    className="inline-flex items-center gap-2 rounded-md bg-binge-off-black py-1.5 px-3 text-sm/6 font-semibold text-binge-off-white shadow-inner"
                    onClick={() => {
                      if (inputRef.current) {
                        props.onNameEntered(inputRef.current.value);
                      }
                    }}
                >
                  Save Name
                </Button>

              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
  )
}

export default NameModal;