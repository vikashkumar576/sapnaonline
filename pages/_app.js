import '../styles/globals.css'
import 'boxicons/css/boxicons.min.css'
import 'swiper/css'
import { Provider } from 'react-redux'
import store from '@/redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
