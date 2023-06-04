import { useMemo } from 'react'

// @mui
import { CssBaseline } from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles'

import PropTypes from 'prop-types'
import palette from './palette'
import typography from './typography'

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default function ThemeProvider({ children }) {
  const isLight = true
  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
      shape: { borderRadius: 8 },
      typography,
    }),
    [isLight]
  )
  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
