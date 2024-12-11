import { OverviewPage } from "../../Types/PageProps"

const OverviewCart = ({ data }: OverviewPage) => {
    return (
        <div className="w-full h-full bg-[var(--black-200)] p-3 px-10 rounded center-start flex-col">
            <p className="text-3xl text-[var(--white-600)] font-semibold">{data?.amount}</p>
            <p className="text-sm font-medium text-[var(--white-600)]">{data?.text}</p>
        </div>
    )
}

export default OverviewCart
