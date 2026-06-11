import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProductProvider } from './context/ProductContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { WishlistProvider } from './context/WishlistContext.tsx'
import { ToastProvider } from './context/ToastContext.tsx'
import { CartProvider } from './context/CartContext.tsx'
import { SearchProvider } from './context/SearchProvider.tsx'


if ('serviceWorker' in navigator && import.meta.env.PROD) {
  import('./pwa/registerSW.ts')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    
    <SearchProvider>
    <CartProvider>
    <ToastProvider>
    <WishlistProvider>
    <ProductProvider>
     <App />
  </ProductProvider>
  </WishlistProvider>
  </ToastProvider>
  </CartProvider>
  </SearchProvider>
   
    </BrowserRouter>
  
    

    
  </StrictMode>,
)
