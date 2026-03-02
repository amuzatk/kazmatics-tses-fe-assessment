"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import Image from "next/image";
import { navItems } from "@/utils/constants";

export default function Sidebar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = navItems.map((item) => {
    const isActive = item.exact
      ? pathname === item.key
      : pathname.startsWith(item.key);

    return {
      key: item.key,
      icon: <item.Icon stroke={isActive ? "#0A60E1" : "#636363"} />,
      label: (
        <Link href={item.key} onClick={() => setDrawerOpen(false)}>
          {item.label}
        </Link>
      ),
    };
  });

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col">
        <div className="h-18.25 flex items-center px-4 border-b border-[#F0F0F0]">
          <Image
            src="/icons/Soludesks_Logo.png"
            width={136}
            height={36}
            alt="Soludesks Logo"
          />
        </div>

        <nav className="flex-1 border-r border-[#F0F0F0] px-4">
          <ul className="space-y-2 mt-7">
            {navItems.map((item) => {
              const isActive = item.exact
                ? pathname === item.key
                : pathname.startsWith(item.key);

              return (
                <li key={item.label}>
                  <Link
                    href={item.key}
                    className={`
                      flex items-center gap-3 px-4 py-3 
                      font-inter text-[14px] leading-5
                      transition-colors
                      ${
                        isActive
                          ? "bg-[#EAF3FF] text-[#0A60E1] border-l-2 border-[#0A60E1]"
                          : "text-[#636363] hover:bg-gray-50"
                      }
                    `}
                  >
                    <item.Icon
                      stroke={isActive ? "#0A60E1" : "#636363"}
                      width={20}
                      height={20}
                    />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile Hamburger */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setDrawerOpen(true)}
          className="p-2 bg-white rounded-lg shadow-md"
        >
          <MenuOutlined className="text-xl text-[#0A60E1]" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        placement="left"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        size="80%" 
        closable={false}
        styles={{ body: { padding: 0 } }}
      >
        <div className="h-18.25 flex items-center px-4 border-b border-[#F0F0F0]">
          <Image
            src="/icons/Soludesks_Logo.png"
            width={136}
            height={36}
            alt="Soludesks Logo"
          />
        </div>

        <Menu
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
          className="border-none mt-4 [&_.ant-menu-item-selected]:bg-[#EAF3FF] [&_.ant-menu-item-selected]:text-[#0A60E1]"
        />
      </Drawer>
    </>
  );
}