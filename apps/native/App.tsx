import AppScreenRoot from './app/AppScreenRoot';
import "./global.css"
import { verifyInstallation } from 'nativewind';

export default function App() {

  verifyInstallation()
  
  return (
    <AppScreenRoot />
  );
}