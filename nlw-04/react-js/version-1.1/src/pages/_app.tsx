import GlobalStyles from '../styles/global';

import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
  );
}

export default MyApp;
