import GlobalStyle from './styles/global'
import ReactDOM from 'react-dom/client'
import React from 'react'

import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './routes/index.tsx';
import { Toaster } from 'sonner';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <Toaster 
        position="bottom-left" 
        duration={1000}
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)