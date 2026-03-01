// src/components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import Image from "next/image";

import {
  DashboardIcon,
  CoursesIcon,
  ClassesIcon,
  AssessmentsIcon,
  CertificationIcon,
  SettingsIcon,
} from '@/src/svg';

const navItems = [
  { key: '/dashboard', label: 'Dashboard', Icon: DashboardIcon, exact: true },
  { key: '/dashboard/courses', label: 'Courses/Materials', Icon: CoursesIcon },
  { key: '/dashboard/classes', label: 'Classes', Icon: ClassesIcon },
  { key: '/dashboard/assessments', label: 'Assessments', Icon: AssessmentsIcon },
  { key: '/dashboard/my-certification', label: 'My Certification', Icon: CertificationIcon },
  { key: '/dashboard/settings', label: 'Settings', Icon: SettingsIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = navItems.map((item) => {
    const isActive = item.exact 
      ? pathname === item.key 
      : pathname.startsWith(item.key);

    return {
      key: item.key,
      icon: (
        <item.Icon 
          stroke={isActive ? "#0A60E1" : "#636363"} 
        />
      ),
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
          <Image src="/icons/Soludesks_Logo.png" width={136} height={36} alt="Soludesks Logo" />
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
                      ${isActive
                        ? 'bg-[#EAF3FF] text-[#0A60E1] border-l-2 border-[#0A60E1]'
                        : 'text-[#636363] hover:bg-gray-50'
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
        size="default"
        closable={false}
        styles={{ body: { padding: 0 } }}
      >
                <div className="h-18.25 flex items-center px-4 border-b border-[#F0F0F0]">
          <Image src="/icons/Soludesks_Logo.png" width={136} height={36} alt="Soludesks Logo" />
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





// // src/components/layout/Sidebar.tsx
// 'use client';

// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import { Menu, Drawer } from 'antd';
// import { MenuOutlined } from '@ant-design/icons';
// import { useState } from 'react';

// const navItems = [
//   { key: '/dashboard', label: 'Dashboard', icon: '/icons/dashboard.png' },
//   { key: '/dashboard/courses', label: 'Courses/Materials', icon: '/icons/courses.png' },
//   { key: '/dashboard/classes', label: 'Classes', icon: '/icons/classes.png' },
//   { key: '/dashboard/assessments', label: 'Assessments', icon: '/icons/assessments.png' },
//   { key: '/dashboard/my-certification', label: 'My Certification', icon: '/icons/certification.png' },
//   { key: '/dashboard/settings', label: 'Settings', icon: '/icons/settings.png' },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const menuItems = navItems.map((item) => ({
//     key: item.key,
//     icon: (
//       <Image
//         src={item.icon}
//         alt=""
//         width={20}
//         height={20}
//         className={pathname.startsWith(item.key) ? 'brightness-0 invert' : ''}
//       />
//     ),
//     label: (
//       <Link href={item.key} onClick={() => setDrawerOpen(false)}>
//         {item.label}
//       </Link>
//     ),
//   }));

//   return (
//     <>
//       {/* Desktop Sidebar – restored original look + dynamic active */}
//       <aside 
//     //   className="hidden lg:flex lg:w-64 lg:flex-col lg:bg-white h-screen border-r border-[#F0F0F0]"
//     className="hidden lg:flex lg:w-64 lg:flex-col "
//       >
//         <div className="h-18.25 flex items-center px-4 border-b border-[#F0F0F0]">
//           <Image src="/icons/Soludesks_Logo.png" width={136} height={36} alt="Soludesks Logo" />
//         </div>

//               {/* Navigation */}
//         <nav 
//         className="flex-1 border-r border-[#F0F0F0] px-4"
//         >
//           <ul 
//         className="space-y-2 mt-7"
//           >
//             {navItems.map((item) => (
//               <li key={item.label}>
//                 <Link
//                   href={item.key}
//                   className={`
//                     flex items-center gap-3 px-4 py-3 
//                     font-inter text-[14px] leading-5
//                     transition-colors
//                     ${
//                       pathname.startsWith(item.key)
//                         ? 'bg-[#EAF3FF] text-[#0A60E1] border-l-2 border-[#0A60E1]'
//                         : 'text-[#636363] hover:bg-gray-50'
//                     }
//                   `}
//                 >
//                   <Image
//                     src={item.icon}
//                     alt=""
//                     width={20}
//                     height={20}
//                     className={pathname.startsWith(item.key) ? 'brightness-0 invert' : ''}
//                   />
//                   <span>{item.label}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </aside>

//       {/* Mobile Hamburger */}
//       <div className="lg:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setDrawerOpen(true)}
//           className="p-2 bg-white rounded-lg shadow-md"
//         >
//           <MenuOutlined className="text-xl text-[#0A60E1]" />
//         </button>
//       </div>

//       {/* Drawer for mobile */}
//       <Drawer
//         placement="left"
//         onClose={() => setDrawerOpen(false)}
//         open={drawerOpen}
//         size="default"
//         closable={false}
//         styles={{ body: { padding: 0 } }}
//       >
//         <div className="h-18.25 flex items-center px-4 border-b border-[#F0F0F0]">
//           <Image src="/icons/Soludesks_Logo.png" width={136} height={36} alt="Soludesks Logo" />
//         </div>
//         <Menu
//           mode="inline"
//           selectedKeys={[pathname]}
//           items={menuItems}
//           className="border-none mt-4 [&_.ant-menu-item-selected]:bg-[#EAF3FF] [&_.ant-menu-item-selected]:text-[#0A60E1]"
//         />
//       </Drawer>
//     </>
//   );
// }







// //src/components/layout/sidebar.tsx PREVIOUS VERSION
// import Link from "next/link";
// import {
//   BookOpen,
//   Users,
//   FileCheck,
//   Award,
//   Settings,
//   LayoutDashboard,
// } from "lucide-react";
// import Image from "next/image";

// const navItems = [
//   { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
//   { icon: BookOpen, label: "Courses/Materials", href: "/dashboard/courses", active: true },
//   { icon: Users, label: "Classes", href: "/dashboard/classes" },
//   { icon: FileCheck, label: "Assessments", href: "/dashboard/assessments" },
//   { icon: Award, label: "My Certification", href: "/dashboard/my-certification" },
//   { icon: Settings, label: "Settings", href: "/dashboard/settings" },
// ];

// export default function Sidebar() {
//   return (
//     <aside className="w-64 flex flex-col ">
//       {/* Logo */}
//       <div className="h-18.25 flex  px-4 border-b border-[#F0F0F0]">
//         <Image src={"/icons/Soludesks_Logo.png"} width={136} height={36}  alt={"Soludesks Logo"}   />
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 border-r border-[#F0F0F0] px-4">
//         <ul 
//         // className="space-y-5 mt-8"
//         className="space-y-2 mt-7"
//         >
//           {navItems.map((item) => {
//             const Icon = item.icon;

//             return (
//                 // <></>
//               <li key={item.label}>
//                 <Link
//                   href={item.href}
//                   className={`
//                     flex items-center gap-3 px-4 py-3
//                     font-inter text-[14px] leading-5
//                     transition-colors duration-200
//                     ${
//                       item.active
//                         ? "bg-[#EAF3FF] text-[#0A60E1] border-l-2 border-[#0A60E1]"
//                         : " text-[#636363] hover:bg-gray-50"
//                     }
//                   `}
//                 >
//                   <Icon className="h-5 w-5 shrink-0" />
//                   <span className="align-middle">{item.label}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </aside>
//   );
// }
