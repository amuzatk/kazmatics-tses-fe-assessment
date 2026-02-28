import { Bell, Search } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  return (
    <header className="bg-[#fcfcfc] border-b border-gray-200 pt-4 pr-8] pb-3 pl-5 flex items-center justify-between h-18.25 ">
      <div className="flex items-center gap-4">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search solodesk"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="font-medium">Madison Greg</p>
            <p className="text-sm text-gray-500">madison.reert...</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
            {/* Replace with real avatar */}
            <Image src="/avatar-placeholder.jpg" alt="User" width={40} height={40} />
          </div>
        </div>
      </div>
    </header>
  );
}