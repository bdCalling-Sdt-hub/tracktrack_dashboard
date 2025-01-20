interface OverviewCartProps {
  data: {
    title: string;
    value: number | undefined;
  };
}

const formatValue = (value: number | undefined): string => {
  if (value === undefined) return "N/A";
  return value > 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
};

const OverviewCart: React.FC<OverviewCartProps> = ({ data }) => {
  const { title, value } = data;

  return (
    <div className="w-full  items-center h-[130px] bg-[var(--black-200)] p-3 px-10 rounded flex flex-col justify-center gap-2">
      <p className="text-3xl text-[var(--white-600)] font-semibold">
        {formatValue(value)}
      </p>
      <p className="text-sm font-medium text-[var(--white-600)]">{title}</p>
    </div>
  );
};

export default OverviewCart;
