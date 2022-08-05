import { NavItemInfo } from '../types/header';

export const NavLinks: NavItemInfo[] = [
  {
    text: 'Home',
    path: '/',
    ariaLabel: 'Home'
  },
  {
    text: 'About',
    path: '/about',
    ariaLabel: 'About Andrew Matsumoto'
  },
  {
    text: 'Projects',
    path: '/projects',
    ariaLabel: 'Andrew Matsumoto\'s Projects'
  },
  {
    text: 'Contact',
    path: '/contact',
    ariaLabel: 'Andrew Matsumoto\'s Contact Info'
  }
];

export const LogoNavInfo = NavLinks[0];