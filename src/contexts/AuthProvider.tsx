import { Session } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabaseClient } from 'services/supabase';

type ContextProps = {
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
  // user null = loading
  const [session, setSession] = useState<Session | null>(null);
  console.tron.log({ session });

  useEffect(() => {
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      async (event, sess) => {
        console.tron.log(`Supabase auth event: ${event}`);
        setSession(sess);
      }
    );
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    (async () => {
      const sess = await supabaseClient.auth.getSession();
      if (sess.error) return;
      setSession(sess.data.session);
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        session,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuthContext };
