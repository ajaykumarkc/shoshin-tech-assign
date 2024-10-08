interface StatCardProps {
    title: string;
    value: string;
    subtext: string;
    color: string;
    textColor: string;
  }
  
  const StatCard: React.FC<StatCardProps> = ({
    title,
    value,
    subtext,
    color,
    textColor,
  }) => (
    <div className={`p-4 rounded-lg ${color}`}>
      <h3 className="text-xl font-medium ">{title}</h3>
      <p className={`text-3xl font-bold mt-2 mb-2`}>{value}</p>
      <p className={`text-xs text-gray-500 mt-1  ${textColor}`}>{subtext}</p>
    </div>
  );

  export default StatCard