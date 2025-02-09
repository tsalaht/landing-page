"use client";
import './globals.css';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './providers/redux/store'; // Fix the path if necessary
import I18nextWrapper from './i18n/I18nextWrapper';

const syneFont = localFont({
  src: [
    { path: './assets/fonts/Syne-Regular.ttf', weight: '400', style: 'normal' },
    { path: './assets/fonts/Syne-Bold.ttf', weight: '700', style: 'normal' },
    { path: './assets/fonts/Syne-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-syne',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={syneFont.variable}>
      <body>
        <Provider store={store}>
          <I18nextWrapper>{children}</I18nextWrapper>
        </Provider>
      </body>
    </html>
  );
}
