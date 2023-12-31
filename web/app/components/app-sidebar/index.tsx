import React from 'react'
import NavLink from './navLink'
import AppBasic from './basic'

import type { NavIcon } from './navLink'

export type IAppDetailNavProps = {
  iconType?: 'app' | 'dataset' | 'notion'
  title: string
  desc: string
  icon: string
  icon_background: string
  navigation: Array<{
    name: string
    href: string
    icon: NavIcon
    selectedIcon: NavIcon
  }>
  extraInfo?: React.ReactNode
}

const AppDetailNav = ({ title, desc, icon, icon_background, navigation, extraInfo, iconType = 'app' }: IAppDetailNavProps) => {
  return (
    <div className="flex flex-col w-56 overflow-y-auto bg-white border-r border-gray-200 shrink-0">
      <div className="flex flex-shrink-0 p-4">
        <AppBasic iconType={iconType} icon={icon} icon_background={icon_background} name={title} type={desc} />
      </div>
      <nav className="flex-1 p-4 space-y-1 bg-white">
        {navigation.map((item, index) => {
          return (
            <NavLink key={index} iconMap={{ selected: item.selectedIcon, normal: item.icon }} name={item.name} href={item.href} />
          )
        })}
        {extraInfo ?? null}
      </nav>
    </div>
  )
}

export default React.memo(AppDetailNav)
