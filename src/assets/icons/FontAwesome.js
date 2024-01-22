import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faArrowLeft,
  faArrowRight,
  faSquareMinus,
  faSquarePlus,
  faCheck,
  faSun,
  faMoon,
  faUserAstronaut,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const CartIcon = () => {
  return <FontAwesomeIcon icon={faCartShopping} />;
};
const SearchIcon = () => {
  return <FontAwesomeIcon icon={faMagnifyingGlass} />;
};

const InstagramIcon = () => {
  return <FontAwesomeIcon icon={faInstagram} />;
};
const FacebookIcon = () => {
  return <FontAwesomeIcon icon={faFacebook} />;
};
const ArrowLeftIcon = () => {
  return <FontAwesomeIcon icon={faArrowLeft} />;
};
const ArrowRightIcon = () => {
  return <FontAwesomeIcon icon={faArrowRight} />;
};
const MinusIcon = () => {
  return <FontAwesomeIcon icon={faSquareMinus} />;
};
const PlusIcon = () => {
  return <FontAwesomeIcon icon={faSquarePlus} />;
};
const CheckIcon = () => {
  return <FontAwesomeIcon icon={faCheck} />;
};
const SunIcon = () => {
  return <FontAwesomeIcon icon={faSun} />;
};
const MoonIcon = () => {
  return <FontAwesomeIcon icon={faMoon} />;
};
const WhatsappIcon = () => {
  return <FontAwesomeIcon icon={faWhatsapp} />;
};
const LogoIcon = () => {
  return <FontAwesomeIcon icon={faUserAstronaut} />;
};
const ToggleIcon = () => {
  return <FontAwesomeIcon icon={faBars} />;
};

export {
  CartIcon,
  SearchIcon,
  InstagramIcon,
  FacebookIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
  CheckIcon,
  SunIcon,
  MoonIcon,
  WhatsappIcon,
  LogoIcon,
  ToggleIcon,
};
