import { WithSetup } from '@/hoc/withMaster';
import '@/styles/app.css';
import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithSetup
      render={({ master }) => (
        <main className={inter.className}>
          <Component {...pageProps} {...master} />
        </main>
      )}
    />
  );
}
