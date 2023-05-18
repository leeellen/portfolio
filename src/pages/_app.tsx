import Head from 'next/head';
import type { AppProps } from 'next/app';
import { isMobileDevice } from '@/utils/helper';

import 'swiper/css';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/logo.svg" />
                <meta charSet="utf-8" />
                {isMobileDevice() ? (
                    <meta name="viewport" content="width=600, user-scalable=no" />
                ) : (
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                )}
            </Head>
            <Component {...pageProps} />
        </>
    );
}
