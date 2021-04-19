import PropTypes from 'prop-types';
import MomentAdapter from '@material-ui/pickers/adapter/moment';
import { LocalizationProvider } from '@material-ui/pickers';
// import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient({
  defaultConfig: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <StylesProvider injectFirst>
        <LocalizationProvider dateAdapter={MomentAdapter} locale={'en'}>
          {/* TODO: install @selectquotelabs/sqcomponents when ready */}
          {/* <MuiThemeProvider theme={muiTheme}> */}
          <Component {...pageProps} />
          {/* </MuiThemeProvider> */}
        </LocalizationProvider>
      </StylesProvider>
    </QueryClientProvider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType])
    .isRequired,
  pageProps: PropTypes.object,
};

export default App;
