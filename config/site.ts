import { SiteConfig } from "types"

export const siteConfig: SiteConfig = {
    name: "Hummingbot",
}

export type NavItem = {
    title: string
    href: string
    disabled?: boolean
}

export type MainNavItem = NavItem