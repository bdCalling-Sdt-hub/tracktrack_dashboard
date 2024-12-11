import EventGrowth from "../../components/DashboardHome/EventGrowth"
import OverviewCart from "../../components/DashboardHome/OverviewCart"
import UseGrowth from "../../components/DashboardHome/UseGrowth"

const DashboardHome = () => {
    // overview data array 
    const overViewData = [
        { amount: '3.5K', text: 'Total User' },
        { amount: '18.9K', text: 'Total Host' },
        { amount: '120.9k', text: 'Total Earning' },
    ]
    return (
        <>
            {/* over views */}
            <div className="grid-3 h-[130px]">
                {
                    overViewData?.map(item => <OverviewCart
                        data={item}
                    />)
                }
            </div>
            <div className="grid-2  mt-6">
                <EventGrowth />
                <UseGrowth />
            </div>
        </>
    )
}

export default DashboardHome
