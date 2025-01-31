import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar";
import Header from "../components/shared/Header";

const Dashboard = () => {
  return (
    <div className="h-screen overflow-hidden flex bg-[var(--black-100)]">
      {/* Sidebar */}
      <div className="w-[300px] h-full overflow-y-scroll bg-[var(--black-200)]">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-4">
        <Header />
        <div className="flex-1 w-full p-4 overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
