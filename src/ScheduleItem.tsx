import { MoreHorizontal } from "lucide-react";

interface ScheduleItemProps {
    title: string;
    time: string;
    priority?: boolean;
  }
  
  const ScheduleItem: React.FC<ScheduleItemProps> = ({
    title,
    time,
    priority,
  }) => (
    <div className="flex items-start justify-between py-3 bg-gray-50 rounded-lg px-4">
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
      <MoreHorizontal className="w-4 h-4 text-gray-400" />
    </div>
  );

  export default ScheduleItem