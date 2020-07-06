import React from 'react';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import HistoryIcon from '@material-ui/icons/History';
import GroupIcon from '@material-ui/icons/Group';
import DoneIcon from '@material-ui/icons/Done';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import { Link } from 'react-router-dom';

export default function BottomMenu() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/sabores"
        label="Sabores"
        icon={<RestaurantIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/bebidas"
        label="Bebidas"
        icon={<LocalBarIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/acompanhantes"
        label="Acompanhantes"
        icon={<GroupIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/pedidos"
        label="Pedidos"
        icon={<HistoryIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/comanda"
        label="Comanda"
        icon={<DoneIcon />}
      />
    </BottomNavigation>
  );
}
