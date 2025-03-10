import { Profile } from '@app/models/Profile';
import { supabase } from '@app/services/supabase';
import { Session } from '@supabase/supabase-js';
import { createContext, ReactElement, useContext, useEffect, useMemo, useState } from 'react';

export const AuthContext = createContext<{
  initialized: boolean,
  session: Session | null,

  authUserId?: string,
  authProfile?: Profile | null
  updateAuthProfile?: (profile: Profile | null) => void
}>({
  initialized: false,
  session: null,
  authUserId: undefined,
  updateAuthProfile: undefined
});

export const AuthContextConsumer = AuthContext.Consumer

export const AuthContextProvider = ({ children }: {children: ReactElement}) => {

  const [initialized, setInitialzied] = useState(false)
  const [session, setSession] = useState<Session | null>(null)

  const [profile, setProfile] = useState<Profile | null>(null)

  const authUserId = useMemo(() => {
    return session?.user?.id
  }, [session])
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)

      if (session?.user) {
         supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()
            .then(({ data }) => {
              setProfile(data)
              setInitialzied(true)
            })
      } else {
        setInitialzied(true)
      }
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      authListener.subscription.unsubscribe();
    }
  }, [])
 
  return (
    <AuthContext.Provider value={{
      initialized, session, authUserId,
      authProfile: profile,
      updateAuthProfile: setProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
 };

 export const useAuth = () => useContext(AuthContext)
