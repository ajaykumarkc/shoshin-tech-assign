import { MoreHorizontal, Pin } from "lucide-react";

interface AnnouncementProps {
    title: string;
    time: string;
  }
  
  const Announcement: React.FC<AnnouncementProps> = ({ title, time }) => (
    <div className="flex items-start justify-between py-3 border-b border-gray-200 last:border-b-0">
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
      <div className="flex items-center space-x-2">
        <div className="rotate-45">
          <Pin className="w-4 h-4 text-gray-400 " fill="#686868" />
        </div>
        <MoreHorizontal className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );

  export default Announcement