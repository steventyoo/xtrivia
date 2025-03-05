import { supabase } from '@app/services/supabase';
import { Session } from '@supabase/supabase-js';
import { createContext, ReactElement, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext<{
  initialized: boolean,
  session: Session | null,
}>({
  initialized: false,
  session: null,
});

export const AuthContextConsumer = AuthContext.Consumer

export const AuthContextProvider = ({ children }: {children: ReactElement}) => {

  const [initialized, setInitialzied] = useState(false)
  const [session, setSession] = useState<Session | null>(null)
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setInitialzied(true)
      setSession(session)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      authListener.subscription.unsubscribe();
    }
  }, [])
 
  return (
    <AuthContext.Provider value={{ initialized, session }}>
      {children}
    </AuthContext.Provider>
  );
 };

 export const useAuth = () => useContext(AuthContext)
