import { IoIosNotificationsOutline } from "react-icons/io"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex justify-end items-center gap-3 w-full bg-[var(--black-200)] h-[100px] px-2">
            {/* notification */}
            {/* <Link to={`/notification`} className="p-3 rounded-full text-3xl bg-[var(--white-600)] relative">
                <IoIosNotificationsOutline />
                <p style={{
                    width: '20px',
                    height: '20px'
                }} className="absolute text-[12px] bg-[#B47000] center-center rounded-full text-white font-bold top-2 right-2">
                    0
                </p>
            </Link> */}
            {/* profile button */}
            <Link to={'/profile'} className="flex justify-center items-center w-fit px-4 py-2 bg-[var(--white-600)] rounded-sm gap-2">
                <img src="https://placehold.co/400" className="rounded-full h-10 w-10 " alt="" />
                <p className="whitespace-nowrap">
                    shaharul siyam
                </p>
            </Link>
        </div>
    )
}

export default Header
