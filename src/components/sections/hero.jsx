import { useState } from "react";
import { ChevronDow, Section, Star } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotj,
  SiMongodb,
} from "react-icons/si";
import { Personal_info, STATS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import fadeIn from "../animations/fadein";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
const hero = () => {
  return (
    <section className="">
      <RadialGradientBackground varient="hero" />

      {/*Content container*/}
      <div className="">
        <div className="">
          {/*Left column - content*/}
          <div className="">
            <fadeIn delay={0}>
              <div className="">
                <Star className="" />
                <span className="">
                  {Personal_info.title} | Based in {Personal_info.location}
                </span>
              </div>
            </fadeIn>

            <fadeIn delay={100}>
              <h1 className="">Tuff port-hero.jsx</h1>
            </fadeIn>

            <fadeIn delay={200}>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas tenetur, cumque recusandae molestiae facere eveniet,
                repellat nulla maxime ducimus minus odio, nam praesentium esse
                nihil excepturi corrupti aliquid omnis repudiandae! - hero.jsx
              </p>
            </fadeIn>

            <fadeIn delay={300}>
              <button onClick={() => scrollToSection("contact")} className="">
                <div className="">Contact Me</div>
              </button>
            </fadeIn>

            <fadeIn delay={400}>
              <div className="">
                {STATS.map((stat, index) => (
                  <div key={index} className="">
                    <div className="">{stat.value}</div>
                    <p className="">{stat.label}</p>
                  </div>
                ))}
              </div>
            </fadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
