import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo, FaBitcoin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

export function Sidebar() {
  const SideBarIcon = ({ icon, text = "tooltip" }) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );

  return (
    <div
      className="fixed top-0 left-0 min-h-screen w-16 m-0 
                    flex flex-col 
                    bg-primary text-secondary shadow-lg"
    >
      <SideBarIcon icon={<FaFire size={28} text={"Discord on Fire"} />} />
      <SideBarIcon icon={<BsPlus size={32} />} text={"Add a Server"} />
      <SideBarIcon icon={<BsFillLightningFill size={20} />} />
      <SideBarIcon icon={<AiOutlineDownload size={20} />} text={"Download Apps"} />
      <SideBarIcon icon={<FaPoo size={20} />} />
      <SideBarIcon icon={<FaBitcoin size={20} />} text={"Donate Bitcoin"} />
      <SideBarIcon icon={<BsGearFill size={20} />} text={"Set Setting"} />
    </div>
  );
}