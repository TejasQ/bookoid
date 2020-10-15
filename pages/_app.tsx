import { AppProps } from 'next/app';
import React, { FC } from 'react';

import '../css/tailwind.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="min-h-screen bg-gray-400">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
