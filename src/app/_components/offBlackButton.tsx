import {FC} from "react";

interface ButtonProps {
  text: string;
}

const OffBlackButton: FC<ButtonProps> = (props) => {

  return (
      <div className="flex lg:gap-x-6">
        <a
            href="#"
            className="rounded-full bg-binge-off-black px-3.5 py-2.5 text-sm font-semibold text-binge-off-white"
        >
          {props.text}
        </a>
      </div>
  )
}


export default OffBlackButton;
