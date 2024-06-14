export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Amateur Games',
  description: 'A list of free games.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  navMenuItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
  ],
  links: {
    github: 'https://github.com/HoneyHanny/amateurgames',
  },
}
