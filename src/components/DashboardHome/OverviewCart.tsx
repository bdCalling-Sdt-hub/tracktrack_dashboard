
interface OverviewCartProps {
  data: {
    title: string;
    totalAuth: number;
  };
}

const OverviewCart = ({ data }: OverviewCartProps) => {
  const { title, totalAuth } = data;
  return (
    <div className="w-full items-center h-full bg-[var(--black-200)] p-3 px-10 rounded flex flex-col justify-center gap-2">
      <p className="text-3xl text-[var(--white-600)] font-semibold">
        {totalAuth}
      </p>
      <p className="text-sm font-medium text-[var(--white-600)]">
        {title}
      </p>
    </div>
  );
};

export default OverviewCart;