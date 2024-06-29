import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        fontFamily: {
          sans: ["var(--font-sans)", ...fontFamily.sans],
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-top-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-top-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },

        "fade-in-bottom-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bottom-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounce-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(20%, 0%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounce-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(-20%, 0%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bouncedown": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0%, -100%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, -20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-bounceup": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0%, 100%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(0%, 20%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out-down": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
        },
        "fade-out-left": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
        },
        "fade-out-top-left": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(-100%, -100%, 0)",
          },
        },
        "fade-out-top-right": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d( 100%, -100%, 0)",
          },
        },
        "fade-out-right": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(100%, 0, 0)",
          },
        },
        "fade-out-up": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadein: "fade-in 1s ease-in-out 0.25s 1",
        fadeout: "fade-out 1s ease-out 0.25s 1",
        fadeindown: "fade-in-down 1s ease-in 0.25s 1",
        fadeintopleft: "fade-in-top-left 1s ease-out 0.25s 1",
        fadeintopright: "fade-in-top-right 1s ease-out 0.25s 1",
        fadeinbottomleft: "fade-in-bottom-left 1s ease-out 0.25s 1",
        fadeinbottomright: "fade-in-bottom-right 1s ease-out 0.25s 1",
        fadeinleft: "fade-in-left 1s ease-in-out 0.25s 1",
        fadeinbouncedown: "fade-in-bouncedown 1s ease-in-out 0.25s 1",
        fadeinbounceup: "fade-in-bounceup 1s ease-in-out 0.25s 1",
        fadeinbounceright: "fade-in-bounce-right 1s ease-in-out 0.25s 1",
        fadeinbounceleft: "fade-in-bounce-left 1s ease-in-out 0.25s 1",
        fadeinright: "fade-in-right 1s ease-in-out 0.25s 1",
        fadeinup: "fade-in-up 1s ease-in-out 0.25s 1",
        fadeoutdown: "fade-out-down 1s ease-in-out 0.25s 1",
        fadeouttopleft: "fade-out-top-left 1s ease-in-out 0.25s 1",
        fadeouttopright: "fade-out-top-right 1s ease-in-out 0.25s 1",
        fadeoutleft: "fade-out-left 1s ease-in-out 0.25s 1",
        fadeoutright: "fade-out-right 1s ease-in-out 0.25s 1",
        fadeoutup: "fade-out-up 1s ease-in-out 0.25s 1",
      },
    },
  },
  plugins: ["tailwindcss-animated", nextui()],
} satisfies Config;

export default config;
