
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import StorageIcon from '@mui/icons-material/Storage';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import CloudIcon from '@mui/icons-material/Cloud';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import TerminalIcon from '@mui/icons-material/Terminal';

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
]


export const services = [
  {
    id: 1,
    icon: <ViewInArIcon />,
    title: "Structure & Desgin Patterns",
    desc: "Use known architecture and system engineering to support a growing scale of users, features, and data.",
  },
  {
    id: 2,
    icon: <TerminalIcon />,
    title: "Backend Side",
    desc: "4+ years experience with server-side technologies: .Net Core, Node.js, Nest.js. develop APIs and services",
  },
  {
    id: 3,
    icon: <ImportantDevicesIcon />,
    title: "Responsive Design",
    desc: "Creating web pages that look good on all devices! mobile, tablet, laptop..  A responsive web design will automatically adjust for different screen sizes and viewports",
  },
  {
    id: 4,
    icon: <StorageIcon />,
    title: "DB",
    desc: "Experience with SQL / NoSQL databases. PostgreSQL, MongoDB, Microsoft SQL server ",
  },
  {
    id: 5,
    icon: <LaptopMacIcon />,
    title: "Frontend Side",
    desc: "4+ years experience with client-side  technologies: Angular.js 2+, React.js, CSS & HTML",
  },
  {
    id: 4,
    icon: <CloudIcon />,
    title: "Cloud",
    desc: "Using cloud. deploy with dockers and create CI/CD pipelines (AWS, Azure Devops,..) ",
  },
]



