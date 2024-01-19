// @mui
import { Box, Stack, Typography } from '@mui/material'

import loadable from '@loadable/component'

import useLocales from 'hooks/useLocales'

// assets
const UploadIllustration = loadable(() => import('assets/illustration_upload'))

export default function BlockContent() {
  const { translate } = useLocales()

  return (
    <Stack
      spacing={2}
      alignItems='center'
      justifyContent='center'
      direction={{ xs: 'column', md: 'row' }}
      sx={{ width: 1, textAlign: { xs: 'center', md: 'left' } }}
    >
      <UploadIllustration sx={{ width: 220 }} />

      <Box sx={{ p: 3 }}>
        <Typography gutterBottom variant='h5'>
          {translate('pages.blog.dropSelectImageMessage')}
        </Typography>

        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {translate('pages.blog.dropOrClickMessage')}&nbsp;
          <Typography
            variant='body2'
            component='span'
            sx={{ color: 'primary.main', textDecoration: 'underline' }}
          >
            {translate('common.browse')}
          </Typography>
          &nbsp;{translate('pages.blog.thoroughMachineMessage')}
        </Typography>
      </Box>
    </Stack>
  )
}
