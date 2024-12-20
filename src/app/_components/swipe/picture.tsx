"use client";

import {LuBean} from "react-icons/lu";
import {api} from "~/trpc/react";

export function Picture() {

  const utils = api.useUtils();

  const orderBeans = api.bean.orderBeans.useMutation({
    onSuccess: async (response) => {
      console.log(response.text);
      await utils.post.invalidate();
    },
  });

  return (
      <div className="relative box-border bg-[url(/img/borlotti_beans_1.jpg)] bg-center bg-no-repeat bg-cover w-full aspect-square rounded-lg">
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          //TODO: error when the bean id is not set
          const beanId = formData.get('beanId') as string | "";

          orderBeans.mutate({beanId: beanId, user: "izaak"});
        }}>
          <input name="beanId" className="hidden" value="borlottiBeans" readOnly={true}/>
          <button type="submit">
            <div className="absolute bottom-0 right-0 box-border bg-binge-off-white bg-origin-padding rounded-full m-2">
              <div className="p-3">
                <LuBean size="1.5em"/>
              </div>
            </div>
          </button>
        </form>
      </div>
  )
}

