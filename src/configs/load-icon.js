import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGooglePlay,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";

export const loadIcon = () => {
  library.add(faFacebook, faInstagram, faLinkedin, faGooglePlay, faAppStore);
};
