// import Iconify from 'components/Iconify'
import SvgIconStyle from 'components/SvgIconStyle'
import { PATH_DASHBOARD } from 'routes/path'

const getIcon = (name) => (
  <SvgIconStyle
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
)
// const getIconify = (icon) => <Iconify icon={icon} width='100%' height='100%' />

const ICONS = {
  analytics: getIcon('ic_analytics'),
  banking: getIcon('ic_banking'),
  blog: getIcon('ic_blog'),
  booking: getIcon('ic_booking'),
  calendar: getIcon('ic_calendar'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  ecommerce: getIcon('ic_ecommerce'),
  invoice: getIcon('ic_invoice'),
  kanban: getIcon('ic_kanban'),
  mail: getIcon('ic_mail'),
  menu: getIcon('ic_menu'),
  user: getIcon('ic_user'),
  dashboard: getIcon('ic_dashboard'),
}

const navConfig = [
  {
    subheader: 'Overview',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
      },
      {
        title: 'ecommerce',
        path: PATH_DASHBOARD.general.ecommerce,
        icon: ICONS.ecommerce,
      },
      {
        title: 'analytics',
        path: PATH_DASHBOARD.general.analytics,
        icon: ICONS.analytics,
      },
      {
        title: 'booking',
        path: PATH_DASHBOARD.general.booking,
        icon: ICONS.booking,
      },
      {
        title: 'banking',
        path: PATH_DASHBOARD.general.banking,
        icon: ICONS.banking,
        children: [
          {
            title: 'list banking',
            path: '/banking/list',
            children: [
              {
                title: 'list banking now',
                path: '/banking/list/now',
              },
              {
                title: 'list banking hia',
                path: '/banking/list/here',
              },
            ],
          },
          {
            title: 'add banking',
            path: '/banking/add',
          },
        ],
      },
    ],
  },
]

export default navConfig
