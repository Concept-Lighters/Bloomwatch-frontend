module.exports = {
  purge: ['./src/*.js', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 

      fontFamily: {
        myFont: ['Inter'],
        myFont2: ['switzer'],
      },
    
      colors: {
        headercolor: '#111111',
        textcolor: '#484646',
        subheadcolor: '#111112',
        progressbarcolor: '#65558F',
        barbackgroundcolor: '#4F378B',
        borderbarcolor: '#79747E',
        antextcolor: '#130E20',
        antextcolor2: '#4A4459',
        bulbcolor: '#130E20',
        dashboardheadcolor: '#1C1B1C',
        dashboardtextcolor: '#484646',
        weatherprecolor: '#FDF7FF',
        weatherpretextcolor: '#160041',
        weatherpretextcolor2: '#432B7E',
        actioncolor1: '#FAF8F5',
        actioncolor2: '#F9FAF5',
        actioncolor3: '#FAF8F5',
        actioncolor4: '#FAF8F5',
        callcardcolor: '#410004',
        callcardbgcolor: '#F9DEDC',
        callcardbdcolor: '#B3261E',
        linkcolor: '#4F378B',
        taskbgcolor: '#F6EEFF',
        calbgcolor: '#FDF7FF', 
      },

      backgroundImage: {
        dashboard: "url('/public/Images/misc/cloud.jpg')",
       }
      
    },

  },

  variants: {
    extend: {},
  },
  plugins: [],
}
