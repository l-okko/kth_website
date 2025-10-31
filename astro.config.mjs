// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
    },

  image: {
// Example: Allow remote image optimization from a single domain
      domains: ['astro.build'],
      layout: 'constrained'
  },
  vite: {    plugins: [tailwindcss()],  }

});