import GlobalStyles from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
