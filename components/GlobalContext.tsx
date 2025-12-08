'use client';

import { VardhaProvider } from '@/context/VardhaContext';

export const GlobalContext = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <VardhaProvider>{children}</VardhaProvider>;
};