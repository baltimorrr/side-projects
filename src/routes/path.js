function path(root, subLink) {
  return `${root}${subLink}`
}

const ROOT = ''
// const ROOT_AUTHS = '/auth'
const ROOT_DASHBOARD = '/dashboard'

export const PATH_DASHBOARD = {
  root: ROOT_DASHBOARD,
  general: {
    app: path(ROOT_DASHBOARD, ''),
    ecommerce: path(ROOT, '/ecommerce'),
    analytics: path(ROOT, '/analytics'),
    booking: path(ROOT, '/booking'),
    banking: path(ROOT, '/banking'),
  },
}
