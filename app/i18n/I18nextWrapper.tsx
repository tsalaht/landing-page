// I18nextWrapper.tsx
"use client";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Your i18n configuration file

interface I18nextWrapperProps {
  children: React.ReactNode;
}

export default function I18nextWrapper({ children }: I18nextWrapperProps) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}