import Layout from 'layouts'
import { AnalyticsPage } from 'pages/AnalyticsPage'
import { BankingPage } from 'pages/BankingPage'
import { BookingPage } from 'pages/BookingPage'
import { DashboardPage } from 'pages/DashboardPage'
import { EcommercePage } from 'pages/EcommercePage'
import { HomePage } from 'pages/HomePage'
import { useRoutes } from 'react-router-dom'

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'dashboard',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <DashboardPage />,
        },
      ],
    },
    {
      path: 'ecommerce',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <EcommercePage />,
        },
      ],
    },
    {
      path: 'analytics',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <AnalyticsPage />,
        },
      ],
    },
    {
      path: 'booking',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <BookingPage />,
        },
      ],
    },
    {
      path: 'banking',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <BankingPage />,
        },
        {
          path: '/banking/list',
          element: <BankingPage />,
          children: [
            {
              path: '/banking/list/now',
              element: <BankingPage />,
            },
            {
              path: '/banking/list/here',
              element: <BankingPage />,
            },
          ],
        },
        {
          path: '/banking/add',
          element: <BankingPage />,
        },
      ],
    },
  ])
}
