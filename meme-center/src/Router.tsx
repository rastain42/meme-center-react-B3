import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './layout/Default'
import { Home } from './pages/Home'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}

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
    ],
  },
]);
