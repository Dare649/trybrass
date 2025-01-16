import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '280px',
      'md': '768px',
      'lg': '1024px',
    },
    extend: {
      colors: {
        'black-0': '#000000',
        'black-1': '#1a1c1f',
        'black-2': '#060809',
        'green-1': '#0bce5a',
        'white-1': '#fff',
        'gray-1': '#8f96a3',
        'gray-2': '#656b76',
        'gray-3': '#1a1c1f',
      },
      backgroundColor: {
        'black-0': '#000000',
        'black-1': '#1a1c1f',
        'black-2': '#060809',
        'green-1': '#0bce5a',
        'white-1': '#fff',
        'gray-1': '#8f96a3',
        'gray-2': '#656b76',
        'gray-3': '#1a1c1f',
      },
      h1: '32px',
      h2: '24px',
      h3: '18.72px',
      h4: '16px',
      h5: '13.28px',
      h6: '10.72px',
    },
  },
  plugins: [],
} satisfies Config;
