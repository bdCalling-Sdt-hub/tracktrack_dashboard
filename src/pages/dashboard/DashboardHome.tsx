import EventGrowth from '../../components/DashboardHome/EventGrowth'
import NewPayment from '../../components/DashboardHome/NewPayment'
import OverviewCart from '../../components/DashboardHome/OverviewCart'
import UseGrowth from '../../components/DashboardHome/UseGrowth'

const DashboardHome = () => {
  const overViewData = [
    { amount: '3.5K', text: 'Total User' },
    { amount: '18.9K', text: 'Total Host' },
    { amount: '120.9k', text: 'Total Earning' },
  ]
  return (
    <>
      {/* over views */}
      <div className="grid-3 h-[130px]">
        {overViewData?.map((item) => (
          <OverviewCart data={item} />
        ))}
      </div>
      {/* charts */}
      <div className="grid-2  mt-6">
        <EventGrowth />
        <UseGrowth />
      </div>
      {/* new Payment */}
      <NewPayment />
    </>
  )
}

export default DashboardHome
