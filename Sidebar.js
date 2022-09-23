import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/289910381_579495290402478_8771529483935514001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FYcAc3eBnbIAX_LBJFE&_nc_ht=scontent.fdel29-1.fna&oh=00_AT9b5MOsuti_YSFjrUB37EyVd4ApOHjk-c5ws4sKkYEpuA&oe=62CEF51D"
        title="Tanamay patel"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid-19 Informations Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Massenger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Vedios" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="MarketPlace" />
    </div>
  );
}

export default Sidebar;
