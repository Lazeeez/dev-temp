import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "next/link"

function classNames(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ")
}

export default function ClassesDropdown({ dark = false }): JSX.Element {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <div className="relative h-full">
          <MenuButton
            className={classNames(
              "group inline-flex items-center h-full px-1 pt-1 border-b-2 border-transparent text-sm leading-6 font-medium transition ease-in-out duration-150",
              dark
                ? "hover:text-gray-200 hover:border-transparent focus:outline-none focus:text-gray-200"
                : "hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300",
              open
                ? dark
                  ? "text-gray-200"
                  : "text-gray-700"
                : dark
                ? "text-gray-400"
                : "text-gray-500"
            )}
          >
            Classes
            <ChevronDownIcon
              className={classNames(
                "h-5 w-5 ml-2 transition ease-in-out duration-150",
                dark
                  ? "group-hover:text-gray-200 group-focus:text-gray-200"
                  : "group-hover:text-gray-500 group-focus:text-gray-500",
                open
                  ? dark
                    ? "text-gray-200"
                    : "text-gray-500"
                  : "text-gray-400"
              )}
              aria-hidden="true"
            />
          </MenuButton>
          <MenuItems
            transition
            className={classNames(
              "origin-top-right absolute left-0 -mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform transition data-[closed]:opacity-0 data-[closed]:scale-95 data-[enter]:duration-100 data-[leave]:duration-75",
              dark ? "bg-gray-800" : "bg-white"
            )}
          >
            <div className="py-1">
              <MenuItem>
                <Link
                  href="/classes"
                  className={classNames(
                    "block px-4 py-2 text-sm font-medium",
                    dark
                      ? "hover:bg-gray-600 text-gray-200"
                      : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                  )}
                >
                  Live Classes
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/video-classes"
                  className={classNames(
                    "block px-4 py-2 text-sm font-medium",
                    dark
                      ? "hover:bg-gray-600 text-gray-200"
                      : "hover:bg-gray-100 hover:text-gray-900 text-gray-700"
                  )}
                >
                  Self-Study Classes
                </Link>
              </MenuItem>
            </div>
          </MenuItems>
        </div>
      )}
    </Menu>
  )
}
