import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function CustomDrawer({ AuthConsumer, ...props }) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={() => {
          AuthConsumer.setSigned(false);
        }}
      />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
