import EventGrowth from '../../components/DashboardHome/EventGrowth'
import NewPayment from '../../components/DashboardHome/NewPayment'
import UseGrowth from '../../components/DashboardHome/UseGrowth'
import { useGetTotalOverViewQuery } from '../../Redux/api/overViewApis'
import OverviewCart from '../../components/DashboardHome/OverviewCart'

export interface IOverViewCard {
  totalAuth: number;
  title: string;
}

const DashboardHome = () => {
  const { data, isLoading } = useGetTotalOverViewQuery({})

  if (isLoading) {
    return <p>...loading</p>
  }

  const overViewDataArray: IOverViewCard[] = [
    {
      totalAuth: data?.data?.totalUser ?? 0, 
      title: 'Total User',
    },
    {
      totalAuth: data?.data?.totalHost ?? 0,
      title: 'Total Host',
    },
    {
      totalAuth: data?.data?.totalEvent ?? 0, 
      title: 'Total Earning',
    },
  ];

  return (
    <>
      {/* Overview Cards */}
      <div className="grid-3 h-[130px]">
        {overViewDataArray.map((item: IOverViewCard, idx: number) => (
          <OverviewCart data={item} key={idx} />
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

export default DashboardHome;
