import { Outlet } from "react-router-dom"
import Sidebar from "../components/shared/Sidebar"
import Header from "../components/shared/Header"
const Dashboard = () => {
    return (
        <div style={{
            gap: '0'
        }} className='h-screen overflow-y-scroll start-start bg-[var(--black-100)]'>
            <div className="w-[300px] h-full overflow-y-scrolls">
                <Sidebar />
            </div>
            <div className="w-[calc(100%-300px)] start-start flex-col gap-4">
                <Header />
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
