import {type Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        'binge-off-white': '#fffefd',
        'binge-off-black': '#1a1a1a',
        'binge-purple': '#67295f',
      },
      backgroundImage: {
        //TODO: Use a darker image to make the text pop more
        'binge-beans-main': "url('/img/beans.jpg')",
      },
      strokeWidth: {
        '20': '7px',
      }
    },
  },
  plugins: [],
} satisfies Config;
