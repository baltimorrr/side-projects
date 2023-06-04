import { Collapse, Stack } from '@mui/material'
import PropTypes from 'prop-types'
import { Fragment, useCallback, useState } from 'react'
import { NavItemRoot, NavItemSub } from './NavItem'

NavList.propTypes = {
  list: PropTypes.array,
}

function NavList({ list = [], isCollapse = false }) {
  const [open, setOpen] = useState(true)

  const renderContent = useCallback(
    (menuRootItem) => {
      const hasChildren = menuRootItem.children

      if (hasChildren) {
        return (
          <>
            <NavItemRoot
              item={menuRootItem}
              open={open}
              onToggle={() => setOpen(!open)}
            />

            {open && (
              <Collapse in={open} unmountOnExit timeout='auto'>
                <NavListSub list={menuRootItem.children} />
              </Collapse>
            )}
          </>
        )
      }

      return <NavItemRoot item={menuRootItem} />
    },
    [open]
  )

  return (
    <Stack spacing={0.5}>
      {list.map((item, index) => (
        <Fragment key={item?.title + index}>{renderContent(item)}</Fragment>
      ))}
    </Stack>
  )
}

function NavListSub({ list = [], subItem = false }) {
  const [open, setOpen] = useState(false)

  const renderContent = useCallback(
    (menuSubItem) => {
      const hasChildren = menuSubItem.children

      if (hasChildren) {
        return (
          <>
            <NavItemSub
              item={menuSubItem}
              open={open}
              onToggle={() => setOpen(!open)}
            />

            {open && (
              <Collapse in={open} unmountOnExit timeout='auto'>
                <NavListSub list={menuSubItem.children} subItem />
              </Collapse>
            )}
          </>
        )
      }

      return <NavItemSub item={menuSubItem} />
    },
    [open]
  )

  return (
    <Stack
      sx={{
        ...(subItem && {
          marginLeft: 2,
        }),
      }}
      spacing={0.5}
    >
      {list.map((item, index) => (
        <Fragment key={item?.title + index}>{renderContent(item)}</Fragment>
      ))}
    </Stack>
  )
}

export default NavList
