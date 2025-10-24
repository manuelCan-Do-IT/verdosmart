/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    // Keep arbitrary value utilities used across the project
    { pattern: /gap-\[(.+)\]/ },
    { pattern: /p-\[(.+)\]/ },
    { pattern: /px-\[(.+)\]/ },
    { pattern: /py-\[(.+)\]/ },
    { pattern: /m-\[(.+)\]/ },
    { pattern: /mx-\[(.+)\]/ },
    { pattern: /my-\[(.+)\]/ },
    { pattern: /rounded-\[(.+)\]/ },
    { pattern: /shadow-\[(.+)\]/ },
    { pattern: /size-\[(.+)\]/ },
    { pattern: /w-\[(.+)\]/ },
    { pattern: /h-\[(.+)\]/ },
    { pattern: /left-\[(.+)\]/ },
    { pattern: /right-\[(.+)\]/ },
    { pattern: /top-\[(.+)\]/ },
    { pattern: /bottom-\[(.+)\]/ },
  ],
};