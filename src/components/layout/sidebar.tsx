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
//   { icon: BookOpen, label: "Courses/Materials", href: "/courses", active: true },
//   { icon: Users, label: "Classes", href: "/classes" },
//   { icon: FileCheck, label: "Assessments", href: "/assessments" },
//   { icon: Award, label: "My Certification", href: "/my-certification" },
//   { icon: Settings, label: "Settings", href: "/settings" },
// ];

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-white flex flex-col border-r border-[#F0F0F0]">
      
//       {/* Logo Section */}
//       <div className="mt-5 px-4 border-b border-[#F0F0F0] pb-4">
//         <Image
//           src="/icons/Soludesks_Logo.png"
//           alt="Soludesks Logo"
//           width={200}
//           height={60}
//           className="h-10 w-auto"
//           priority
//         />
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 mt-8 px-4">
//         <ul className="space-y-5">
//           {navItems.map((item) => {
//             const Icon = item.icon;

//             return (
//               <li key={item.label}>
//                 <Link
//                   href={item.href}
//                   className={`
//                     flex items-center gap-3 px-4 py-3
//                     font-inter text-[14px] font-semibold leading-5
//                     transition-colors duration-200
//                     ${
//                       item.active
//                         ? "bg-[#EAF3FF] text-[#0A60E1] border-l-[1.5px] border-[#0A60E1]"
//                         : "bg-white text-[#636363] hover:bg-gray-50"
//                     }
//                   `}
//                 >
//                   <Icon className="h-5 w-5 shrink-0" />
//                   <span>{item.label}</span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>
//     </aside>
//   );
// }





import Link from "next/link";
import {
  BookOpen,
  Users,
  FileCheck,
  Award,
  Settings,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
  { icon: BookOpen, label: "Courses/Materials", href: "/dashboard/courses", active: true },
  { icon: Users, label: "Classes", href: "/dashboard/classes" },
  { icon: FileCheck, label: "Assessments", href: "/dashboard/assessments" },
  { icon: Award, label: "My Certification", href: "/dashboard/my-certification" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 flex flex-col ">
      {/* Logo */}
      <div className="h-18.25 flex  px-4 border-b border-[#F0F0F0]">
        <Image src={"/icons/Soludesks_Logo.png"} width={136} height={36}  alt={"Soludesks Logo"}   />
            {/* <Image
          src="/icons/Soludesks_Logo.png"
          alt="Soludesks Logo"
          width={136}
          height={36}
          className=" w-auto"
          priority
        /> */}
      </div>

      {/* Navigation */}
      <nav className="flex-1 border-r border-[#F0F0F0] px-4">
        <ul className="space-y-5 mt-8">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
                // <></>
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3
                    font-inter text-[14px] leading-5
                    transition-colors duration-200
                    ${
                      item.active
                        ? "bg-[#EAF3FF] text-[#0A60E1] border-l-2 border-[#0A60E1]"
                        : " text-[#636363] hover:bg-gray-50"
                    }
                  `}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="align-middle">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
