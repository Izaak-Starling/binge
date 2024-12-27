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
        'binge-green': '#03cb46',
        'binge-red': '#e4230d',
      },
      backgroundImage: {
        'binge-beans-main': "url('/img/couple_with_beans.png')",
      },
      strokeWidth: {
        '20': '7px',
      }
    },
  },
  plugins: [],
} satisfies Config;
