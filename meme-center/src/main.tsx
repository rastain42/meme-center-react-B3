import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { Router, router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

        <CartContextProvider>
          {/* <Router /> */}
          <RouterProvider router={router}/>
        </CartContextProvider>
      
    </ThemeProvider>
  </React.StrictMode>,
)
