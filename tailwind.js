module.exports ={
    theme:{
        extend:{
            colors: {
                pinkDarkest: '#ED0677',
                pinkDark: '#E06C9F',
                pink: '#E574BC',
                pinkLight: '#F9B4ED',
                pinkLighest:'#EFBCD5',
                black:'#232735',
                greyDark: '#A1A4B1',
                grey:'#D3D4D8',
                greyLight: '#F0F1F3',
                greyLightest: '#',
                white: '#FFFFFF',
                greenDarkest: '#498467',
                greenDark: '#61B066',
                green: '#52B788',
                greenLight: '#00A265',
                greenLightest: '#BBE1C3',
                blueDarkest: '#010059',
                blueDark: '#249DC9',
                blue: '#7FDBE8',
                blueLight: '#A8E8EA',
                blueLightest: '#E0FFF7',
                redDarkest: '#92140C',
                redDark: '#D80032',
                red: '#EF233C',
                redLight: '#EC5766',
                redLightest: '#EF7674',
                orangeDarkest: '#F25C54',
                orangeDark:'#F27059',
                orange: '#F4845F',
                orangeLight: '#F79D65',
                orangeLightest: '#F7B267',
            },
            screens: {
                's': '320px',
                's-max': [{'max':'320px'}],
                'sl': '375px',
                'sm': '575px',
                'sm-600': '600px',
                'sm-land':[{'min':'667px'}],
                'md': '768px',
                'lg': '992px',
                'x': '1024px',
                'lapie': [{'min': '1024px','max':'1366px'}],
                'xl': [{'min': '1500px'}],
              },
              fonts: {
                'display':['Rubik Mono One'] ,
                'body': ['Kanit'],
              },
              textSizes: {
                'xs': '.75rem',     // 12px
                'sm': '.875rem',    // 14px
                'base': '1rem',     // 16px
                'lg': '1.125rem',   // 18px
                'xl': '1.25rem',    // 20px
                '2xl': '1.5rem',    // 24px
                '3xl': '1.875rem',  // 30px
                '4xl': '2.25rem',   // 36px
                '5xl': '3rem', 
                '7xl': '5rem'     // 48px
              },
              fontWeights: {
                'hairline': 100,
                'thin': 200,
                'light': 300,
                'normal': 400,
                'medium': 500,
                'semibold': 600,
                'bold': 700,
                'extrabold': 800,
                'black': 900,
              },
              leading: {
                'none': 1,
                'tight': 1.25,
                'normal': 1.5,
                'loose': 2,
              },
              textColors: colors,
              backgroundColors: colors,
              backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain',
              },
              borderWidths: {
                default: '1px',
                '0': '0',
                '2': '2px',
                '4': '4px',
                '8': '8px',
              },
              borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),
              borderRadius: {
                'none': '0',
                'px': '5px',
                'sm': '.125rem',
                default: '.25rem',
                'lg': '25px',
                'full': '9999px',
                'header-border': '0px 0px 220px 220px',
                'header-border-sm': '0px 0px 120px 120px'
              },
              width: {
                'auto': 'auto',
                'px': '1px',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '24': '6rem',
                '32': '8rem',
                '48': '12rem',
                '64': '16rem',
                '1/2': '50%',
                '1/3': '33.33333%',
                '2/3': '66.66667%',
                '1/4': '25%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.66667%',
                '5/6': '83.33333%',
                'full': '100%',
                'screen': '100vw',
                'img': '600px',
                '700': '700px',
                '750': '750px',
                '800': '800px'
              },
        }
    }
}