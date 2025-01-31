import { AiOutlineMenuUnfold } from "react-icons/ai";
import { FaCcStripe, FaUserTie } from "react-icons/fa";
import { IoSettingsOutline, IoSpeedometerOutline } from "react-icons/io5";
import { LuLogOut, LuTicketCheck, LuUserRound } from "react-icons/lu";
import { MdKeyboardArrowRight, MdOutlineFeedback } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
// menus link
const adminMenus = [
  {
    name: "Dashboard",
    icon: <IoSpeedometerOutline className="text-xl" />,
    path: "/",
  },
  {
    name: "Payment",
    icon: <RiExchangeDollarLine className="text-xl" />,
    path: "/payment",
  },
  {
    name: "Stripe Info",
    icon: <FaCcStripe className="text-xl" />,
    path: "/stripe-info",
  },
  {
    name: "Category",
    icon: <AiOutlineMenuUnfold className="text-xl" />,
    path: "/category",
  },
  {
    name: "User Management",
    icon: <LuUserRound className="text-xl" />,
    path: "/user-management",
  },
  {
    name: "Host Management",
    icon: <FaUserTie className="text-xl" />,
    path: "/host-management",
  },
  {
    name: "Booking",
    icon: <LuTicketCheck className="text-xl" />,
    path: "/booking",
  },
  {
    name: "Feedback",
    icon: <MdOutlineFeedback className="text-xl" />,
    path: "/feedback",
  },
];

// setting links
const settingLink = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms & Condition", path: "/terms" },
  { name: "Profile", path: "/profile" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  return (
    <div className="start-start  flex-col bg-[var(--black-200)] h-full overflow-y-scroll p-3">
      {/* logo */}
      <p className="center-center text-4xl mb-3 text-white uppercase">logo</p>
      {/* map the admin menus  */}
      {adminMenus?.map((item) => (
        <NavLink
          className={`${
            location?.pathname === item?.path
              ? "sidebar-button-orange"
              : "sidebar-button-black"
          } `}
          to={item?.path}
        >
          {item?.icon} {item?.name}
        </NavLink>
      ))}
      {/* map the links  */}
      <div className="w-full">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="w-full">
              <button className="sidebar-button-black relative">
                <IoSettingsOutline className="text-xl" /> Setting{" "}
                <MdKeyboardArrowRight className="absolute right-2 top-[50%] translate-y-[-50%]" />
              </button>
            </AccordionTrigger>
            <AccordionContent>
              <div className="start-start flex-col">
                {settingLink?.map((item) => (
                  <NavLink
                    className={`${
                      location?.pathname === item?.path
                        ? "sidebar-button-orange"
                        : "sidebar-button-black"
                    } `}
                    to={item?.path}
                  >
                    {item?.name}
                  </NavLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* logout button */}
      <button onClick={() => handleLogOut()} className="sidebar-button-black">
        <LuLogOut /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
