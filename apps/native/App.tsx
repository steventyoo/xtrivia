import { useEffect } from 'react';
import AppScreenRoot from './app/AppScreenRoot';
import "./global.css"
import { verifyInstallation } from 'nativewind';
import { AuthContextProvider } from '@app/hooks/AuthProvider';
import { GluestackUIProvider } from './app/components/ui/gluestack-ui-provider';

export default function App() {

  verifyInstallation()

  return (
    // <GluestackUIProvider>
      <AuthContextProvider>
        <AppScreenRoot />
      </AuthContextProvider>
    // </GluestackUIProvider>        
  );
}