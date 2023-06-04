import { Box, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import NavList from './NavList'
import { pxToRem } from 'utils/getFontValue'

export default function NavSectionVertical({ navConfig = [] }) {
  const theme = useTheme()

  return (
    <Stack
      direction='row'
      justifyContent='center'
      sx={{ width: 280, borderRight: `1px dashed ${theme.palette.grey[400]}` }}
      spacing={0.5}
    >
      {navConfig.map((item, index) => (
        <Box sx={{ width: 1, padding: 2 }} key={item?.subheader + index}>
          <Typography
            variant='subtitle2'
            sx={{
              textTransform: 'uppercase',
              fontSize: pxToRem(11),
              color: theme.palette.grey[500],
              paddingBottom: theme.spacing(1.5),
              '&:hover': {
                color: theme.palette.grey[800],
              },
            }}
          >
            {item?.subheader}
          </Typography>

          <NavList list={item?.items} />
        </Box>
      ))}
    </Stack>
  )
}
