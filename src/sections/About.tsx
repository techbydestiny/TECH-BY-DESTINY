import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import StarIcon from "@/assets/icons/star.svg"
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HTMLIcon from "@/assets/icons/html5.svg"
import ReactIcons from "@/assets/icons/react.svg"
import CssIcon from "@/assets/icons/css3.svg"
import GithubIcon from "@/assets/icons/github.svg"
import PythonIcon from "@/assets/icons/python.svg"
import Phpicon from "@/assets/icons/php.svg"
import TailwindCssIcon from "@/assets/icons/tailwindcss.svg"
import BoostrapIcon from "@/assets/icons/bootstrap.svg"
import NextIcon from "@/assets/icons/nextdotjs.svg"
import DjangoIcon from "@/assets/icons/django.svg"
import ExpressIcon from "@/assets/icons/express.svg"


const toolboxItems = [
  {
    title: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    title: "Python",
    icon: PythonIcon,
  },
     {
    title: "PHP",
    icon: Phpicon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "Tailwind CSS",
    icon: TailwindCssIcon,
  },
   {
    title: "Bootstrap",
    icon: BoostrapIcon,
  },
   {
    title: "React",
    icon: ReactIcons,
  },
   {
    title: "Next",
    icon: NextIcon,
  },
   {
    title: "Django",
    icon: DjangoIcon,
  },
   {
    title: "Express",
    icon: ExpressIcon,
  },
     {
    title: "Github",
    icon: GithubIcon,
  },
]

export const AboutSection = () => {
  return <div className="pb-96">
    <SectionHeader eyebrow="About Me" title="A Glimpse Into my World"
    description="Learn More About who I am, What I do, and What Inspires me"/>
    <Card>
      <div>
        <StarIcon/>
        <h3>Courses Taken</h3>
        <p></p>
      </div>
    </Card>
  </div>;
};
