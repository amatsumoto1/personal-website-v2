import React from 'react';
import { MenuItemInfo } from '../../../types/menu';

type Props<T = MenuItemInfo> = {
  items: T[],
  getKey: (item: T) => string,
  renderItem: (item: T) => React.ReactNode,
  className?: string,
}

