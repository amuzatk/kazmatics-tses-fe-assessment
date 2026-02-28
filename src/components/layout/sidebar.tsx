import Link from "next/link";
import {
  BookOpen,
  Users,
  FileCheck,
  Award,
  Settings,
  LayoutDashboard,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
  { icon: BookOpen, label: "Courses/Materials", href: "/courses", active: true },
  { icon: Users, label: "Classes", href: "/classes" },
  { icon: FileCheck, label: "Assessments", href: "/assessments" },
  { icon: Award, label: "My Certification", href: "/my-certification" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white flex flex-col border-r border-[#F0F0F0]">
      {/* Logo */}
      <div className="h-18.25 flex items-center justify-center border-b border-[#F0F0F0]">
        <h1 className="text-2xl font-bold text-[#0A60E1]">Solodesks</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3
                    font-inter text-[14px]  leading-5
                    transition-colors duration-200
                    ${
                      item.active
                        ? "bg-[#EAF3FF] text-[#0A60E1] border-l-2 border-[#0A60E1]"
                        : "bg-white text-[#636363] hover:bg-gray-50"
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




// // Very simplified – adjust icons/links from Figma
// import Link from "next/link";
// import { BookOpen, Users, FileCheck, Award, Settings, LayoutDashboard } from "lucide-react";

// const navItems = [
//   { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: false },
//   { icon: BookOpen, label: "Courses/Materials", href: "/dashboard", active: true },
//   { icon: Users, label: "Classes", href: "#" },
//   { icon: FileCheck, label: "Assessments", href: "#" },
//   { icon: Award, label: "My Certification", href: "#" },
//   { icon: Settings, label: "Settings", href: "#" },
// ];

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-[#fcfcfc]  flex flex-col">
//       <div className=" border-b border-[#F0F0F0] h-18.25 flex items-center justify-center ">
//         <h1 className="text-2xl font-bold text-blue-600">Solodesks</h1>
//       </div>
//       <nav className="flex-1 px-4 py-6 border border-[#F0F0F0]">
//         <ul className="space-y-1">
//           {navItems.map((item) => (
//             <li key={item.label}>
//               <Link
//                 href={item.href}
//                 className={`flex items-center gap-3 px-4 py-3 text-sm font-medium ${
//                   item.active
//                     ? "bg-[#EAF3FF] text-[#0A60E1] border-l border-l-[1.5px #0A60E1] "
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`}
//               >
//                 <item.icon className="h-5 w-5" />
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// }