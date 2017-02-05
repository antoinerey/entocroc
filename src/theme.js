import { css } from 'glamor'

export const colors = {
  white: '#FFFCF2',
  grey: '#848484',
  black: '#374553',

  yellow: '#FFDB41',
  orange: '#FCAB13',
  red: '#D12323',

  facebook: '#3B5998',
  twitter: '#1DA1F2',
  youtube: '#CC181E',
  email: '#E2AE03',
}

export const fonts = {
  bazar: css.fontFace({
    fontFamily: 'Bazar',
    fontStyle: 'normal',
    fontWeight: 400,
    src: `${ process.env.PUBLIC_URL }/fonts/Bazar.ttf`,
  }),
}

export const setup = () => {
  css.global('*', {
    boxSizing: 'border-box',
    color: colors.black,
  })

  css.global('body', {
    fontFamily: "Open Sans, Roboto, Arial, sans-serif",
    background: colors.white,
  })
}
