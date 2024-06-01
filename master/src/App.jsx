import React from 'react';
import Rotas from './routes';
import { AuthProvider } from './contexts/Auth';

export default function App(){
  return(
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  )
}