import EventGrowth from "../../components/DashboardHome/EventGrowth";
import NewPayment from "../../components/DashboardHome/NewPayment";
import UseGrowth from "../../components/DashboardHome/UseGrowth";
import { useGetTotalOverViewQuery } from "../../Redux/api/overViewApis";
import OverviewCart from "../../components/DashboardHome/OverviewCart";
import { Spin } from "antd";

export interface IOverViewCard {
  title: string;
  value: number | undefined;
}
const DashboardHome = () => {
  const { data, isLoading } = useGetTotalOverViewQuery({});

  if (isLoading) return <Spin />;

  const overviewData = data?.data || {};

  const overViewDataArray: IOverViewCard[] = [
    { title: "Total Auth", value: overviewData.totalAuth },
    { title: "Total Earning", value: overviewData.totalEarning },
    { title: "Total Event", value: overviewData.totalEvent },
    { title: "Total Host", value: overviewData.totalHost },
    { title: "Total Track", value: overviewData.totalTrack },
    { title: "Total Transaction", value: overviewData.totalTransaction },
    { title: "Total User", value: overviewData.totalUser },
  ];

  return (
    <>
      <div className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          {overViewDataArray.slice(0, 3).map((item, idx) => (
            <OverviewCart data={item} key={idx} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {overViewDataArray.slice(3).map((item, idx) => (
            <OverviewCart data={item} key={idx + 3} />
          ))}
        </div>
      </div>

      {/* Charts */}
      <div className="grid-2 mt-6">
        <EventGrowth />
        <UseGrowth />
      </div>

      {/* New Payment */}
      <NewPayment />
    </>
  );
};

export default DashboardHome;
