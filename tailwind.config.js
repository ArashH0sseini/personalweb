module.exports = {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      ringWidth: {
        '10': '10px',
      },
      screens: {
        'mdd' : '900px'
      },
      colors:{
        borderColor : "#2e344e",
        siderbarBg:"#191d2b",
        primaryColor:'#037fff'
      },
      fontFamily:{
        'vazir' : 'Vazir'
      }
    },
  },
  plugins: [],
}