import { Outlet } from "react-router-dom"
import Sidebar from "../components/shared/Sidebar"
const Dashboard = () => {
    return (
        <div className='h-screen overflow-y-scroll start-start'>
            <div className="w-[300px] h-full overflow-y-scrolls">
                <Sidebar />
            </div>
            <div className="w-[calc(100% - 300px)]">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
