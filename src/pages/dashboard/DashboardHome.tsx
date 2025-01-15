import EventGrowth from '../../components/DashboardHome/EventGrowth'
import NewPayment from '../../components/DashboardHome/NewPayment'
import OverviewCart from '../../components/DashboardHome/OverviewCart'
import UseGrowth from '../../components/DashboardHome/UseGrowth'

const DashboardHome = () => {
  // Use the RTK Query hook to fetch the data


  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>
  // if (error) return <p>Error: {error.message}</p>

  // Assuming the response contains an object with properties like totalUser, totalHost, etc.
  const overViewData = data
    ? [
      { amount: data.totalUser.toString(), text: 'Total User' },
      { amount: data.totalHost.toString(), text: 'Total Host' },
    ]
    : []

  return (
    <>
      {/* Overview Cards */}
      <div className="grid-3 h-[130px]">
        {overViewData?.map((item, i) => (
          <OverviewCart key={i} data={item} />
        ))}
      </div>
      {/* Charts */}
      <div className="grid-2 mt-6">
        <EventGrowth />
        <UseGrowth />
      </div>
      {/* New Payment */}
      <NewPayment />
    </>
  )
}

export default DashboardHome
