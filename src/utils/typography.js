import Typography from "typography"

const options = {
    googleFonts: [
      {
        name: `Arvo`,
        styles: [`400`, `400i`, `700`, `700i`],
      },
    ],
    baseFontSize: `17px`,
    baseLineHeight: 1.4,
    headerColor: `rgba(255,255,255,0.8)`,
    bodyColor: `rgba(255,255,255,0.7)`,
    blockMarginBottom: 0.75,
    headerFontFamily: [`Arvo`, `sans-serif`],
    bodyFontFamily: [`Arvo`, `sans-serif`],
    overrideStyles: () => {
      return {
        html: {
          overflowY: `scroll`,
        },
        h1: {
          lineHeight: 1.1,
          fontSize: `45px`
        },
        a: {
          color: `#0090da`,
        },
      }
    },
  }

const typography = new Typography(options)
// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
  }
export default typography
export const rhythm = typography.rhythm