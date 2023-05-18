import { createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layout/Default'
import { Home } from './pages/Home'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { OrderConfirmedPage } from './pages/OrderConfirmed'
import { UploadPage } from './pages/UploadPage'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/completeOrder",
        element: <CompleteOrderPage />,
      },
      {
        path: "/completeOrder",
        element: <OrderConfirmedPage />,
      },
      {
        path: "/upload",
        element: <UploadPage />,
      },
    ],
  },
]);
