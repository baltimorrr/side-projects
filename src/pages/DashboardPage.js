import { Card, Container } from '@mui/material'
import HeaderBreadcrumbs from 'components/HeaderBreadcrumbs'
import Page from 'components/Page'
import { PATH_DASHBOARD } from 'routes/path'

export function DashboardPage() {
  return (
    <Page title='Dashboard'>
      <Container>
        <HeaderBreadcrumbs
          heading='Dashboard'
          links={[
            { name: 'dashboard', href: PATH_DASHBOARD.general.banking },
            { name: 'detail asd' },
          ]}
          sx={{
            px: 2,
          }}
        />

        <Card>test</Card>
      </Container>
    </Page>
  )
}
