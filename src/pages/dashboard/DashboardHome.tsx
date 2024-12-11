import EventGrowth from "../../components/DashboardHome/EventGrowth"
import OverviewCart from "../../components/DashboardHome/OverviewCart"

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
            <div className="grid-3 px-3 h-[130px]">
                {
                    overViewData?.map(item => <OverviewCart
                        data={item}
                    />)
                }
            </div>
            <div className="grid-2 px-3 mt-3">
                <EventGrowth />
            </div>
        </>
    )
}

export default DashboardHome
