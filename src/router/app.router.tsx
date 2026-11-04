import { createBrowserRouter } from 'react-router'
import { StoreLayout } from '../shop/layouts/StoreLayout'
import { HomePage } from '../shop/pages/home/HomePage'
import { CatalogPage } from '../shop/pages/catalog/CatalogPage'
import { ProductPage } from '../shop/pages/product/ProductPage'
import { CartPage } from '../shop/pages/cart/CartPage'
import { CheckoutPage } from '../shop/pages/checkout/CheckoutPage'
import { NotFoundPage } from '../shop/pages/not-found/NotFoundPage'

export const AppRoutes = createBrowserRouter([
  {

    path: '/',
    element: <StoreLayout />,
    children: [

      {
        index: true,
        element: <HomePage />

      },
      {
        path: '/catalogo',
        element: <CatalogPage />

      },
      {
        path: '/producto/:slug',
        element: <ProductPage />

      },
      {
        path: '/carrito',
        element: <CartPage />

      },
      {
        path: '/checkout',
        element: <CheckoutPage />

      },
      {
        path: '*',
        element: <NotFoundPage />

      },


    ],

  }

])
