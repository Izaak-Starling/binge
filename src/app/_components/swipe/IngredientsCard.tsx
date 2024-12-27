import type {BeanIngredients} from "~/server/api/routers/beans";

const IngredientsCard = (props: { beanIngredients: BeanIngredients, onMatch: () => void }) => {

  return (
      <div className="bg-binge-off-white relative box-border border-2 border-binge-off-black w-full rounded-lg mt-4">
        <div className="p-3 pb-3 divide-y-2">
          <p className="text-binge-off-black text-xl pl-2 pb-2">Bean Ingredients</p>
          <p className="text-binge-off-black text-lg pl-3 py-2">{props.beanIngredients.line1}</p>
          <p className="text-binge-off-black text-lg pl-3 py-2">{props.beanIngredients.line2}</p>
          <p className="text-binge-off-black text-lg pl-3 py-2">{props.beanIngredients.line3}</p>
        </div>
      </div>
  )
}

export default IngredientsCard;