import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledProvider } from 'styled-components'
import theme from '../theme/index'

const CustomThemeProvider: React.FunctionComponent = (props) => {
  const { children } = props
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledProvider theme={theme}>
          <>
            <CssBaseline />
            {children}
          </>
        </StyledProvider>
      </MuiThemeProvider>
    </StylesProvider>
  )
}

export default CustomThemeProvider
