'use client'
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from '@nextui-org/navbar'
import { Link } from '@nextui-org/link'
import { link as linkStyles } from '@nextui-org/theme'
import NextLink from 'next/link'
import clsx from 'clsx'

import { siteConfig } from '@/config/site'
import { Logo, GithubIcon } from '@/components/icons'

export const Navbar = () => {
  // const search = useRef<HTMLInputElement>(null)

  // const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     setSearchedGames(await getGamesByName(e.currentTarget.value))
  //   }
  // }

  // useEffect(() => {
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.ctrlKey && event.key === 'k') {
  //       event.preventDefault()
  //       search.current?.focus()
  //     }
  //   }
  //   window.addEventListener('keydown', handleKeyDown)
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown)
  //   }
  // }, [])

  // const searchInput = (
  //   <Input
  //     ref={search}
  //     aria-label='Search'
  //     classNames={{
  //       inputWrapper: 'bg-default-100',
  //       input: 'text-sm',
  //     }}
  //     endContent={
  //       <Kbd className='hidden lg:inline-block' keys={['command']}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement='outside'
  //     placeholder='Search...'
  //     startContent={<SearchIcon className='text-base text-default-400 pointer-events-none flex-shrink-0' />}
  //     type='search'
  //     onKeyDown={handleSearch}
  //   />
  // )

  return (
    <NextUINavbar maxWidth='xl' position='sticky'>
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand as='li' className='gap-3 max-w-fit'>
          <NextLink className='flex justify-start items-center gap-1' href='/'>
            <Logo />
            <p className='font-bold text-inherit'>Amateur Games</p>
          </NextLink>
        </NavbarBrand>
        <ul className='hidden lg:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(linkStyles({ color: 'foreground' }), 'data-[active=true]:text-primary data-[active=true]:font-medium')}
                color='foreground'
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <NextLink href={siteConfig.links.github}>
            <GithubIcon />
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent className='hidden sm:flex basis-1/5 sm:basis-full' justify='end'>
        <NavbarItem className='hidden lg:flex'>{searchInput}</NavbarItem>
      </NavbarContent> */}

      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={'foreground'} href={item.href} size='lg'>
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  )
}
