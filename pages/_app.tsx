import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { makeStore } from '../redux/store';
import '../styles/globals.sass';


function MyApp({ Component, pageProps}) {
  const store = makeStore()
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default withRedux(makeStore)(MyApp);
