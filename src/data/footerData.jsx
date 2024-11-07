import FacebookSvg from "@/assets/svgs/FacebookSvg";
import InstagrameSvg from "@/assets/svgs/InstagrameSvg";
import LinkedInSvg from "@/assets/svgs/LinkedInSvg";
import TwiterSvg from "@/assets/svgs/TwiterSvg";

const { default: CallSvg } = require("@/assets/svgs/CallSvg");
const { default: ClockSvg } = require("@/assets/svgs/ClockSvg");
const { default: EmailSvg } = require("@/assets/svgs/EmailSvg");
const { default: LocationSvg } = require("@/assets/svgs/LocationSvg");

export const footerContents = [
  {
    id: "lfl234ln",
    icon: <ClockSvg />,
    title: "Opening hours",
    text: "Monday - Sunday",
    text_2: "9:00 AM to 11:30 PM",
  },
  {
    id: "lfl234l3n",
    icon: <CallSvg />,
    title: "LET'S TALK",
    text: "Phone: 1-800-222-4545",
    text_2: "Fax: 1-800-222-4545",
  },
  {
    id: "falsfd",
    icon: <EmailSvg />,
    title: "BOOK A TABLE",
    text: "Email: demo@website.com",
    text_2: "Support: support@website.com",
  },
  {
    id: "alsdk3",
    icon: <LocationSvg />,
    title: "Our Address",
    text: "123 Stree New York City , United States Of America.",
  },
];

export const footerLinks = [
  {
    id: "lskdf23lsfl4ll",
    icon: <FacebookSvg />,
    link: "https://www.facebook.com",
  },
  {
    id: "lskdf2343234ll",
    icon: <TwiterSvg />,
    link: "https://www.twiter.com",
  },
  {
    id: "lskdf232523454ll",
    icon: <InstagrameSvg />,
    link: "https://www.instagrame.com",
  },
  {
    id: "lskdf345glsd234ll",
    icon: <LinkedInSvg />,
    link: "https://www.linkedin.com",
  },
];
