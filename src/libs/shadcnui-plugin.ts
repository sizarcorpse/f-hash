import plugin from "tailwindcss/plugin";

export const shadcnPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ":root": {
        "--background": "327, 73%, 97%", // rose-50
        "--foreground": "24, 10%, 10%", // stone-900

        "--muted": "210 40% 96.1%",
        "--muted-foreground": "215.4 16.3% 46.9%",

        "--popover": "0 0% 100%",
        "--popover-foreground": "222.2 84% 4.9%",

        "--card": "326, 78%, 95%", // rose-100
        "--card-foreground": "24, 10%, 10%", // stone-900

        "--border": "214.3 31.8% 91.4%",
        "--input": "214.3 31.8% 91.4%",

        "--primary": "333, 71%, 51%", // rose-500
        "--primary-foreground": "326, 78%, 95%", // rose-100
        "--primary-400": "329, 86%, 70%",
        "--primary-500": "330, 81%, 60%",
        "--primary-700": "335, 78%, 42%",
        "--primary-800": "336, 74%, 35%",
        "--primary-900": "336, 84%, 17%",

        "--secondary": "60, 9%, 98%",
        "--secondary-foreground": "24, 10%, 10%",

        "--accent": "210 40% 96.1%",
        "--accent-foreground": "222.2 47.4% 11.2%",

        "--destructive": "347, 77%, 50%", // red-600
        "--destructive-foreground": "356, 100%, 97%", // red-100

        "--ring": "215 20.2% 65.1%",
        "--radius": "0.5rem",
      },
      ".dark": {
        "--background": "222.2 84% 4.9%",
        "--foreground": "210 40% 98%",

        "--muted": "217.2 32.6% 17.5%",
        "--muted-foreground": "215 20.2% 65.1%",

        "--popover": "222.2 84% 4.9%",
        "--popover-foreground": "210 40% 98%",

        "--card": "222.2 84% 4.9%",
        "--card-foreground": "210 40% 98%",

        "--border": "217.2 32.6% 17.5%",
        "--input": "217.2 32.6% 17.5%",

        "--primary": "333, 71%, 51%", // rose-500
        "--primary-foreground": "326, 78%, 95%", // rose-100
        "--primary-400": "329, 86%, 70%",
        "--primary-500": "330, 81%, 60%",
        "--primary-700": "335, 78%, 42%",
        "--primary-800": "336, 74%, 35%",
        "--primary-900": "336, 84%, 17%",

        "--secondary": "217.2 32.6% 17.5%",
        "--secondary-foreground": "210 40% 98%",

        "--accent": "217.2 32.6% 17.5%",
        "--accent-foreground": "210 40% 98%",

        "--destructive": "0 62.8% 30.6%",
        "--destructive-foreground": "0 85.7% 97.3%",

        "--ring": "217.2 32.6% 17.5%",
        "--radius": "0.5rem",
      },
    });

    addBase({
      "*": {
        "@apply border-border": {},
      },
      body: {
        "@apply bg-background text-foreground": {},
      },
      h1: {
        "@apply text-3xl font-bold my-3 sm:text-4xl lg:text-5xl lg:font-extrabold":
          {},
      },
      h2: {
        "@apply text-2xl font-bold my-3 lg:text-3xl": {},
      },
      h3: {
        "@apply text-xl font-bold": {},
      },
      h4: {
        "@apply text-lg font-bold": {},
      },
      h5: {
        "@apply text-base font-medium": {},
      },
      p: {
        "@apply text-base": {},
      },
    });
  },
  {
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
            400: "hsl(var(--primary-400))",
            500: "hsl(var(--primary-500))",
            700: "hsl(var(--primary-700))",
            800: "hsl(var(--primary-800))",
            900: "hsl(var(--primary-900))",
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
        backgroundImage: {
          "primary-button-gradient":
            "radial-gradient(100% 100% at 100% 0, hsl(var(--primary-400)) 0%, hsl(var(--primary)) 100%)",
          "secondary-button-gradient":
            "radial-gradient(100% 100% at 100% 0, hsl(var(--secondary)) 0%, hsl(var(--secondary)) 100%)",
        },
        boxShadow: {
          "primary-button-shadow":
            "rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset",
          "primary-button-shadow-hover":
            "rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, hsl(var(--primary-700)) 0 -3px 0 inset",
          "primary-button-shadow-active":
            "hsl(var(--primary-700)) 0 3px 7px inset",
          "secondary-button-shadow":
            "rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset",
          "secondary-button-shadow-hover":
            "rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, hsl(var(--primary-700)) 0 -3px 0 inset",
          "secondary-button-shadow-active": "#64748b 0 3px 7px inset",
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
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
  }
);
