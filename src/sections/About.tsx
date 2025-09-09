import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

import StarIcon from "@/assets/icons/star.svg"


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
