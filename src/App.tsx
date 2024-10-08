import React from "react";
import {
  Bell,
  MessageSquare,
  ChevronDown,
  Search,
  PenTool,
  Users,
  Calendar,
  BarChart2,
  HelpCircle,
  Settings,
} from "lucide-react";
import StatCard from "./StatCard";
import ChartCard from "./ChartCard";
import Announcement from "./Announcement";
import ScheduleItem from "./ScheduleItem";


interface MenuItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const menuItems: MenuItem[] = [
  { icon: <BarChart2 className="w-5 h-5" />, label: "Dashboard", active: true },
  { icon: <Users className="w-5 h-5" />, label: "Recruitment" },
  { icon: <Calendar className="w-5 h-5" />, label: "Schedule" },
  { icon: <Users className="w-5 h-5" />, label: "Employee" },
  { icon: <PenTool className="w-5 h-5" />, label: "Department" },
];

const otherMenuItems: MenuItem[] = [
  { icon: <HelpCircle className="w-5 h-5" />, label: "Support" },
  { icon: <Settings className="w-5 h-5" />, label: "Settings" },
];



const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 px-10">
      <aside className="w-full md:w-64 bg-white p-6 hidden md:block">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 rounded-md flex items-center justify-center">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.12629 19.3431H10.5563C14.5953 19.3721 17.9203 21.6641 18.4293 25.5701H19.4413C19.9533 21.6451 23.3083 19.3411 27.3733 19.3411H36.2473V27.3411H30.0203V28.2121H36.6823C36.7979 28.2121 36.9088 28.1662 36.9906 28.0844C37.0723 28.0026 37.1183 27.8917 37.1183 27.7761V18.9021C37.1183 18.7865 37.0723 18.6756 36.9906 18.5938C36.9088 18.512 36.7979 18.4661 36.6823 18.4661H27.3723C23.3073 18.4661 19.9523 16.1661 19.4403 12.2361H18.4283C17.9163 16.1621 14.5613 18.4661 10.4963 18.4661H1.5673C1.6023 15.8721 1.65829 11.7861 1.67729 10.4661H7.85328V9.59412H1.31828C1.2971 9.59084 1.27571 9.58916 1.25428 9.58911C1.13328 9.58911 0.860285 9.63212 0.819285 10.0301C0.819285 10.0391 0.819285 10.0481 0.819285 10.0561C0.819285 10.0641 0.819285 10.0961 0.819285 10.1171L0.800273 11.4061C0.788273 12.2381 0.773281 13.3481 0.758281 14.4581L0.698283 18.8971C0.697494 18.9548 0.70814 19.0121 0.729594 19.0656C0.751048 19.1192 0.782886 19.1679 0.823283 19.2091C0.903683 19.2905 1.01197 19.3384 1.12629 19.3431Z"
                fill="#0A337A"
              />
              <path
                d="M12.0842 28.4062H25.7842V27.1582H12.0842V28.4062Z"
                fill="#0A337A"
              />
              <path
                d="M5.53323 37.4021H5.58523C6.84127 37.4126 8.05711 36.9597 9.00024 36.1301C9.53306 35.6602 9.95917 35.0817 10.25 34.4336C10.5408 33.7854 10.6895 33.0825 10.6862 32.3721V20.9281H9.43823V32.3721C9.44107 32.9187 9.32409 33.4593 9.09552 33.9558C8.86694 34.4524 8.53233 34.8928 8.11523 35.2461C7.41055 35.8405 6.51612 36.1627 5.59423 36.1541H5.53225C4.98564 36.1569 4.44502 36.0399 3.94848 35.8114C3.45195 35.5828 3.01153 35.2482 2.65823 34.8311C2.06378 34.1264 1.74164 33.232 1.75024 32.3101V32.2481C1.74164 31.3262 2.06378 30.4318 2.65823 29.7271C3.01158 29.31 3.45202 28.9755 3.94854 28.7469C4.44507 28.5183 4.98565 28.4013 5.53225 28.4041H8.03823V27.1581H5.53225C4.82184 27.1548 4.11893 27.3036 3.47076 27.5944C2.82259 27.8852 2.24412 28.3113 1.77423 28.8441C0.945205 29.7871 0.49272 31.0025 0.503231 32.2581V32.3011C0.49275 33.5571 0.945619 34.773 1.77523 35.7161C2.24509 36.249 2.82355 36.6751 3.47174 36.9659C4.11992 37.2567 4.82281 37.4054 5.53323 37.4021Z"
                fill="#0A337A"
              />
              <path
                d="M12.0852 10.6532H25.7852V9.40515H12.0852V10.6532Z"
                fill="#0A337A"
              />
              <path
                d="M10.6862 5.72513C10.7016 4.75741 11.0714 3.82893 11.7255 3.11554C12.3795 2.40215 13.2725 1.95336 14.2352 1.85413C14.7565 1.81854 15.2795 1.89034 15.7719 2.06509C16.2642 2.23984 16.7155 2.51382 17.0977 2.87006C17.4799 3.22629 17.7849 3.65719 17.9938 4.13608C18.2027 4.61497 18.3111 5.13164 18.3122 5.65411V8.00513H19.5562V5.65411C19.5562 4.31185 19.023 3.02459 18.0739 2.07547C17.1247 1.12635 15.8374 0.59314 14.4952 0.59314C13.1529 0.59314 11.8657 1.12635 10.9165 2.07547C9.96741 3.02459 9.4342 4.31185 9.4342 5.65411V16.8781H10.6822L10.6862 5.72513Z"
                fill="#0A337A"
              />
              <path
                d="M35.7452 1.98216C34.7848 1.08074 33.5134 0.58493 32.1963 0.598158C31.2779 0.592645 30.3765 0.846741 29.5963 1.33116C28.8635 1.78463 28.2586 2.41751 27.8386 3.16994C27.4187 3.92236 27.1976 4.76949 27.1963 5.63118V16.8902H28.4443V5.62816C28.4463 4.98022 28.6134 4.34348 28.9297 3.778C29.246 3.21252 29.7012 2.73695 30.2523 2.39616C30.8431 2.03057 31.5255 1.83989 32.2203 1.84617C33.2125 1.83553 34.1705 2.20846 34.8943 2.88716C35.4426 3.40804 35.8222 4.08136 35.9839 4.82014C36.1457 5.55893 36.0823 6.32926 35.8018 7.03163C35.5214 7.734 35.0368 8.33616 34.4106 8.76033C33.7845 9.1845 33.0455 9.41122 32.2892 9.41118H29.8403V10.6592H32.2892C33.295 10.6591 34.2776 10.3576 35.1102 9.79353C35.9429 9.22946 36.5873 8.42875 36.9603 7.49476C37.3333 6.56078 37.4178 5.53641 37.2028 4.55394C36.9878 3.57147 36.4833 2.67601 35.7543 1.98317L35.7452 1.98216Z"
                fill="#0A337A"
              />
              <path
                d="M27.1862 32.2111C27.1755 33.2016 26.7912 34.1514 26.1102 34.8706C25.4292 35.5899 24.5016 36.0254 23.5133 36.0901C23.001 36.1089 22.4903 36.0243 22.0116 35.8412C21.5328 35.6582 21.0958 35.3805 20.7268 35.0247C20.3578 34.669 20.0643 34.2425 19.8639 33.7708C19.6635 33.299 19.5602 32.7917 19.5603 32.2791V29.8041H18.3123V32.2791C18.3105 32.9439 18.4405 33.6024 18.6949 34.2166C18.9493 34.8307 19.3229 35.3883 19.7943 35.8571L19.8193 35.8821C20.764 36.8184 22.0411 37.3423 23.3712 37.3391H23.4433C24.7714 37.3153 26.0374 36.7724 26.9701 35.8266C27.9027 34.8808 28.428 33.6074 28.4332 32.2791V20.9321H27.1853L27.1862 32.2111Z"
                fill="#0A337A"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-800">Vasilum</span>
        </div>
        <nav>
          <h2 className="text-xs font-semibold text-gray-500 mb-4">
            MAIN MENU
          </h2>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center space-x-3 p-2 rounded-md ${
                    item.active
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <h2 className="text-xs font-semibold text-gray-500 mt-8 mb-4">
            OTHER
          </h2>
          <ul className="space-y-2">
            {otherMenuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-500" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="relative">
              <MessageSquare className="w-6 h-6 text-gray-500" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="https://s3-alpha-sig.figma.com/img/40ed/810b/19bda88255a6c220a56cfcf53c020387?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hfbY-nUrmoUTt-sfmS550Y-VczRTTQggGfBP-cjxdVE-wzBbWyALxBlYcXRkGNq0qtisKnc1jw1FtSOH~rw2uNzaJ5yY3zNSIu3y4SectcLVgEIHlEVRYAalwX6rzWWw3PV4tn9KF~vXKcFKfH4~xgJX7SOQ1sh2WkJsE3ypf5faBHkqMWAfMjraaR-RWjAvcos~Pw23JI5Ubi~Kf4UoWj9iYAEwxcaS-okZGzzLMZ9NlimRmNKnf3TF4-vYTOVfpr5u7g8886U3SGxHjQ5XYiPy09fRAiy47Mn-o7NkAAV1N5x4AFSvfj4uwkwF3RSeeqSYYcnv5Pbswv2iwllLSw__"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="hidden md:inline text-sm font-medium">
                Admira John
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </header>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4">
          <div className="col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard
                title="Available Position"
                value="24"
                subtext="4 Urgently needed"
                color="bg-red-50"
                textColor="text-red-600"
              />
              <StatCard
                title="Job Open"
                value="10"
                subtext="4 Active hiring"
                color="bg-blue-50"
                textColor="text-blue-600"
              />
              <StatCard
                title="New Employees"
                value="24"
                subtext="4 Department"
                color="bg-purple-50"
                textColor="text-purple-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <ChartCard
                title="Total Employees"
                value="216"
                subtext="+2% Past month"
                increase="+2%"
                menCount={120}
                womenCount={96}
              />
              <ChartCard
                title="Talent Request"
                value="16"
                subtext="+5% Past month"
                increase="+5%"
                menCount={6}
                womenCount={10}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-6 w-full">
                <h2 className="text-lg font-semibold text-gray-800">
                  Announcement
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    Today, 13 Sep 2021
                  </span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
              <Announcement
                title="Outing schedule for every department"
                time="5 Minutes ago"
              />
              <Announcement
                title="Meeting HR Department"
                time="Yesterday, 12:30 PM"
              />
              <Announcement
                title="IT Department need two more talents for UX/UI Designer position"
                time="Yesterday, 09:15 AM"
              />
              <button className="text-red-500 text-sm w-full mx-auto font-medium mt-4">
                See All Announcement
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="space-y-6">
              <div className="bg-[#161E54] p-6 rounded-lg text-white">
                <h2 className="text-lg font-semibold mb-2">
                  Recently Activity
                </h2>
                <p className="text-sm text-indigo-200 mb-4">
                  10:40 AM, Fri 10 Sept 2021
                </p>
                <h3 className="font-semibold mb-2">You Posted a New Job</h3>
                <p className="text-sm mb-4">
                  Kindly check the requirements and terms of work and make sure
                  everything is right.
                </p>
                <p className="text-sm mb-4">Today you make 12 Activity</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  See All Activity
                </button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Upcoming Schedule
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      Today, 13 Sep 2021
                    </span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Priority
                  </h3>
                  <ScheduleItem
                    title="Review candidate applications"
                    time="Today - 11:30 AM"
                    priority={true}
                  />
                </div>
                <div className="space-y-2 mt-4">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">
                    Other
                  </h3>
                  <ScheduleItem
                    title="Interview with candidates"
                    time="Today - 10:30 AM"
                  />
                  <ScheduleItem
                    title="Short meeting with product designer from IT Department"
                    time="Today - 09:15 AM"
                  />
                </div>
                <button className="text-red-500 w-full text-sm font-medium mt-6">
                  Create a New Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
