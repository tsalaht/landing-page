"use client";
import './globals.css';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './providers/redux/store';
import I18nextWrapper from './i18n/I18nextWrapper';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const syneFont = localFont({
  src: [
    { path: './assets/fonts/Syne-Regular.ttf', weight: '400', style: 'normal' },
    { path: './assets/fonts/Syne-Bold.ttf', weight: '700', style: 'normal' },
    { path: './assets/fonts/Syne-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './assets/fonts/Syne-ExtraBold.ttf', weight: '800', style: 'normal' },
  ],
  variable: '--font-syne',
});

const geSSTwoFont = localFont({
  src: [
    { path: './assets/fonts/GE-SS-Two-Medium.otf', weight: '400', style: 'normal' },
    { path: './assets/fonts/GE-SS-Two-Bold.otf', weight: '700', style: 'normal' },
    { path: './assets/fonts/GE-SS-Two-Light.otf', weight: '200', style: 'normal' },
  ],
  variable: '--font-ge-ss-two',
});


export default function RootLayout({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  const isArabic = i18n.language === 'ar';

  return (
    <html lang={i18n.language} className={classNames(isArabic ? geSSTwoFont.variable : syneFont.variable)}>
      <body>
        <Provider store={store}>
          <I18nextWrapper>{children}</I18nextWrapper>
        </Provider>
      </body>
    </html>
  );
}
