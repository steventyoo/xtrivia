import { useEffect } from 'react';
import AppScreenRoot from './app/AppScreenRoot';
import "./global.css"
import { verifyInstallation } from 'nativewind';
import { AuthContextProvider } from '@app/hooks/AuthProvider';

export default function App() {

  verifyInstallation()

  return (
    <AuthContextProvider>
      <AppScreenRoot />
    </AuthContextProvider>    
  );
}