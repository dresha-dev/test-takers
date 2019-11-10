import { createMuiTheme, Theme } from '@material-ui/core/styles'

const theme: Theme = createMuiTheme({
  overrides: {
    MuiCardHeader: {
      title: {
        textTransform: 'capitalize',
      },
    },
  },
})

export default theme
