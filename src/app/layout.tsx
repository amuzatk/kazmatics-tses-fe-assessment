// // app/layout.tsx topbar separate
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Sidebar from "../components/layout/sidebar";
// import Topbar from "../components/layout/topbar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Solodesks - Learning Platform",
//   description: "Employee training & development",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         {/* <Providers> */}
//           <div className="flex flex-col h-screen bg-[#f7f7f7]  ">
//             {/* <Sidebar /> */}
//               <Topbar />

//             <div className="flex-1 flex  p-5 overflow-hidden  ">
//               {/* <Topbar /> */}
//             <Sidebar />
//               <main className="flex-1 overflow-y-auto border border-[#004cff] ">{children}</main>
//             </div>
//           </div>
//         {/* </Providers> */}
//       </body>
//     </html>
//   );
// }




// app/layout.tsx sideebar seeparate
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/layout/sidebar";
import Topbar from "../components/layout/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Solodesks - Learning Platform",
  description: "Employee training & development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
          <div className="flex h-screen  bg-[#fcfcfc]  ">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden bg-[#f7f7f7]  ">
              <Topbar />
              <main className="flex-1 overflow-y-auto pl-5 pt-5 bg-[#f7f7f7] ">{children}</main>
            </div>
          </div>
        {/* </Providers> */}
      </body>
    </html>
  );
}
