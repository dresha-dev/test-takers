import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../store/index'
import { Notifs } from 'redux-notifications'
import { Store } from 'redux'
import ThemeProvider from '../components/ThemeProvider'
import { Container } from '@material-ui/core'

interface IProps {
  store: Store
}

class MyApp extends App<IProps> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <Provider store={store}>
        <ThemeProvider>
          <Container>
            <Component {...pageProps} />
            <Notifs store={store} />
          </Container>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(initStore)(MyApp)
