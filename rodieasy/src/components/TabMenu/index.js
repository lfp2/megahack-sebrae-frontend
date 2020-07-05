import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { pizzaMenu, bebidasMenu } from '../../config/menuItems';

export default function TabMenu({ type, value, setValue }) {
  const tabsString = type === 'Pizza' ? pizzaMenu : bebidasMenu;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      indicatorColor="primary"
      textColor="primary"
    >
      {tabsString.map((name, id) => {
        return <Tab label={name} />;
      })}
    </Tabs>
  );
}
