const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontFamily: {
      source: '"Source Sans Pro", sans',
      avenir: '"Avenir, Helvetica, Arial, sans-serif"',
      ptSerif: '"PT Serif", serif',
      lyonDisplay: '"Lyon Display"',
    },
    fontSize: {
      xs: ['0.75rem', '1.25'],
      sm: ['0.875rem', '1.25'],
      base: ['1rem', '1.25'],
      lg: ['1.125rem', '1.25'],
      xl: ['1.25rem', '1.25'],
      '2xl': ['1.5rem', '1.25'],
      '3xl': ['2rem', '1.25'],
      '4xl': ['2.5rem', '1.25'],
      '5xl': ['3rem', '1.25'],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',

      white: '#fff',
      black: '#000',

      celestialPlum: '#3c7ac2', // - Primary
      blueTourmaline: '#4997d0',
      malibu: '#66b7e1', // - Tertiary
      arubaGreen: '#54b490',
      greenSeduction: '#44aa33', // - Secondary
      xanthous: '#f1b42f',
      madForMango: '#f8a200', // - Primary

      theSpeedOfLight: '#F6F4F0',
      cloudDancer: '#F0EDE8',
      flintPurple: '#41404A',
      polishedApple: '#812B2B',
      bernRed: '#E10C0C',
      vampireStateBuilding: '#CC0E00',
      licoriceStick: '#B33D3D',
      indigoCarmine: '#006FC6',
      drWhite: '#FAFAFA',
      lunarRock: '#C5C5C5',
      goldBullion: '#F2E19D',
      mountainMist: '#AAE3C0',
      puppeteers: '#79CCB3',
      folkSong: '#65A19F',
      loveSpell: '#FAB6C4',
      wispyPink: '#F3EAEA',
      americanSilver: '#CECECE',
      superSilver: '#EFEFEF',
      purpleIllusion: '#B2BBFA',
      bloodmystIsle: '#F92A2A',
      vaporBlue: '#BFBEBE',
      brightGrey: '#EDEEF2',
      realDarkRed: '#00000030',
      magneticGrey: '#EEF3F5',
      trolleyGrey: '#828282',
      jupiter: '#e1e1e1',
      pastelYellow: '#FDFF90',
      fullCityRoast: '#672222',
      wetSand: '#EFECE6',
      'gray-100': 'rgb(243, 244, 246)',
      neutralDark: {
        100: '#8f9fb5',
        200: '#808fa3',
        300: '#5d6f83',
        400: '#4a5a6f',
        500: '#364454',
        600: '#283443',
        700: '#1b2530',
        800: '#111820',
        900: '#0a0e13 ',
      },
      neutralLight: {
        0: '#ffffff',
        100: '#f5f6f7',
        200: '#e9ecef',
        300: '#dee3e7',
        400: '#d3d9df',
        500: '#c8d0d8',
        600: '#bdc7d0',
        700: '#b0bdca',
        800: '#a4b4c3',
        900: '#99aabb',
      },
    },
    extend: {
      maxHeight: {
        '1/4vh': '25vh',
      },
      gridTemplateColumns: {
        // first column full, second column minimum
        'big-min': '1fr min-content',
      },
      animation: {
        'bounce-once': 'hi-there 1s ease 1',
      },
      keyframes: {
        'hi-there': {
          '10%': { transform: 'scale(1.2)' },
          '40%': { transform: 'rotate(-10deg) scale(1.2)' },
          '50%': { transform: 'rotate(10deg) scale(1.2)' },
          '60%': { transform: 'rotate(-10deg) scale(1.2)' },
          '70%': { transform: 'rotate(0deg) scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [forms],
};
