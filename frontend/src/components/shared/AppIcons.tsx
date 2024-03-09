import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import {
  LuLayoutDashboard,
  LuInfo,
  LuFiles,
  LuBoxes,
  LuPackagePlus,
} from "react-icons/lu";
import {
  IoLogOutOutline,
  IoChevronBackSharp,
  IoChevronForwardSharp,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  FaPlus,
  FaRegEyeSlash,
  FaUsersViewfinder,
  FaCheck,
  FaUserAstronaut,
} from "react-icons/fa6";
import {
  MdOutlineGraphicEq,
  MdOutlineNoteAlt,
  MdDisplaySettings,
  MdOutlineShoppingCart,
  MdOutlineGpsFixed,
  MdOutlineFolder,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { BsThreeDotsVertical, BsGrid } from "react-icons/bs";
import { PiLinkSimple } from "react-icons/pi";
import { FiSun, FiMoon } from "react-icons/fi";
import { CiBoxList } from "react-icons/ci";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { RiHome3Line } from "react-icons/ri";

const IconWrapper = ({ icon: IconComponent, size = 20, ...rest }) => {
  return <IconComponent size={size} {...rest} />;
};

export const APP_ICONS = {
  GLOBE: (props = {}) => (
    <IconWrapper icon={HiOutlineGlobeAsiaAustralia} {...props} />
  ),
  HOME: (props = {}) => <IconWrapper icon={RiHome3Line} {...props} />,
  ASTRONAUT: (props = {}) => <IconWrapper icon={FaUserAstronaut} {...props} />,
  FOLDER: (props = {}) => <IconWrapper icon={MdOutlineFolder} {...props} />,
  ADD_PRODUCT: (props = {}) => <IconWrapper icon={LuPackagePlus} {...props} />,
  BOXES: (props = {}) => <IconWrapper icon={LuBoxes} {...props} />,
  SETTINGS: (props = {}) => <IconWrapper icon={IoSettingsOutline} {...props} />,
  HEART: (props = {}) => <IconWrapper icon={FaRegHeart} {...props} />,
  HEART_FILLED: (props = {}) => <IconWrapper icon={FaHeart} {...props} />,
  GPS: (props = {}) => <IconWrapper icon={MdOutlineGpsFixed} {...props} />,
  LIST: (props = {}) => <IconWrapper icon={CiBoxList} {...props} />,
  GRID: (props = {}) => <IconWrapper icon={BsGrid} {...props} />,
  CHECK: (props = {}) => <IconWrapper icon={FaCheck} {...props} />,
  DSIPLAY_SETTINGS: (props = {}) => (
    <IconWrapper icon={MdDisplaySettings} {...props} />
  ),

  SUN: (props = {}) => <IconWrapper icon={FiSun} {...props} />,
  MOON: (props = {}) => <IconWrapper icon={FiMoon} {...props} />,
  USERS: (props = {}) => <IconWrapper icon={FaUsersViewfinder} {...props} />,
  DASHBOARD: (props = {}) => (
    <IconWrapper icon={LuLayoutDashboard} {...props} />
  ),
  EYE_SLASH: (props = {}) => <IconWrapper icon={FaRegEyeSlash} {...props} />,
  GRAPH: (props = {}) => <IconWrapper icon={MdOutlineGraphicEq} {...props} />,
  IMPORT: (props = {}) => <IconWrapper icon={BiImport} {...props} />,
  PLUS: (props = {}) => <IconWrapper icon={FaPlus} {...props} />,
  LOGOUT: (props = {}) => <IconWrapper icon={IoLogOutOutline} {...props} />,
  CART: (props = {}) => <IconWrapper icon={MdOutlineShoppingCart} {...props} />,
  CLOSE: (props = {}) => <IconWrapper icon={IoClose} {...props} />,
  INFO: (props = {}) => <IconWrapper icon={LuInfo} {...props} />,
  NOTE: (props = {}) => <IconWrapper icon={MdOutlineNoteAlt} {...props} />,
  FILES: (props = {}) => <IconWrapper icon={LuFiles} {...props} />,
  DOTS_VERTICAL: (props = {}) => (
    <IconWrapper icon={BsThreeDotsVertical} {...props} />
  ),
  CHEVRON_LEFT: (props = {}) => (
    <IconWrapper icon={IoChevronBackSharp} {...props} />
  ),
  CHEVRON_RIGHT: (props = {}) => (
    <IconWrapper icon={IoChevronForwardSharp} {...props} />
  ),
  LINK: (props = {}) => <IconWrapper icon={PiLinkSimple} {...props} />,
};
