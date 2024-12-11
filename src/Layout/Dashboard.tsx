import { Outlet } from "react-router-dom"
import Sidebar from "../components/shared/Sidebar"
import Header from "../components/shared/Header"
const Dashboard = () => {
    return (
        <div style={{
            gap: '0'
        }} className='h-screen overflow-y-scroll start-start'>
            <div className="w-[300px] h-full overflow-y-scrolls">
                <Sidebar />
            </div>
            <div className="w-[calc(100% - 300px)] start-start flex-col gap-4">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
