import { Fa500Px, FaFire, FaHeart, FaPooStorm } from "react-icons/fa";
import { Fa0 } from "react-icons/fa6";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<FaPooStorm size="28" />} />
      <SideBarIcon icon={<Fa500Px size="28" />} />
      <SideBarIcon icon={<FaHeart size="28" />} />
    </div>
  );
}

const SideBarIcon = ({ icon, text = "tooltip" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};
