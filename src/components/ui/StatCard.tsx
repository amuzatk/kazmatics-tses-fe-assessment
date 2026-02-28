// src/components/ui/StatsCard.tsx
import Image from 'next/image';

type StatProps = {
  icon: string;
  title: string;
  value: string;
  trend?: string;
  trendColor?: string;
};

export default function StatsCard({ icon, title, value, trend, trendColor = 'text-[#00B000]' }: StatProps) {
  return (
    <div className="bg-[#F6F7F6] flex justify-between items-center border-4 border-[#FDFDFD] p-3 rounded-lg">
      <div className="flex items-center gap-3">
        <Image src={icon} alt="" width={44} height={44} className="opacity-90" />
        <div>
          <h4 className="text-[16px] text-[#636363]">{title}</h4>
          <p className="text-[24px] text-[#202020] font-bold mt-1">{value}</p>
        </div>
      </div>

      {trend && (
        <div className="flex items-center gap-1 self-end">
          <Image src="/icons/auto-conversions.png" width={15} height={15} alt="trend" />
          <p className={`text-[10px] ${trendColor}`}>{trend}</p>
        </div>
      )}
    </div>
  );
}