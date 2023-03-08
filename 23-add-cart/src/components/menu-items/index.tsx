import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import { useNavigate } from 'react-router-dom'

const MenuItems = () => {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate('/')}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary='Dashboard' />
      </ListItemButton>
      <ListItemButton onClick={() => navigate('/products')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary='Products' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary='Customers' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary='Reports' />
      </ListItemButton>
    </React.Fragment>
  )
}

export default MenuItems
