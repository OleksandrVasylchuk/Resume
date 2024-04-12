import React from "react";
// import { AiFillGithub } from "react-icons/ai";
import { Name, Submenu, Link, List, Bold, Experience } from "./Projects.styled";

export default function Projects() {
  return (
    <List>
      {" "}
      <Experience>
        <Link target="_blank" href="https://migrantgo.eu/">
          MIGRANT GO
        </Link>
        <Link target="_blank" href="https://minesapostas.com/">
          minesapostas.com
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM, PHP, JS, JQUERY, WordPress, ACF,<Bold>]</Bold>
        </Name>
        <Submenu>Corporate projects for SEOMATICA. and business card sites with attractive gaming features.</Submenu>
      </Experience>
      <Experience>
        <div>
          <Link target="_blank" href="https://stirnweiss-brenner.de/">
            stirnweiss-brenner.de
          </Link>

          <Link target="_blank" href="https://aisuperior.com/">
            aisuperior.com
          </Link>

          <Link target="_blank" href="https://scaleops.com/">
            scaleops
          </Link>
        </div>
        <Link target="_blank" href="https://multiverse.media/">
          multiverse.media
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, PHP, JS, JQUERY, AJAX, WordPress, ACF, Elementor
          <Bold>]</Bold>
        </Name>
        <Submenu>Sites for various companies. Business card sites to advertise programs.</Submenu>
      </Experience>
      <Experience>
        <Link target="_blank" href="https://ein-des-ein.com/">
          ein-des-ein.com
        </Link>
        <Link target="_blank" href="https://bosphortour.uz/">
          bosphortour.uz
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM, PHP, JS, JQUERY, WordPress, ACF, PUG<Bold>]</Bold>
        </Name>
        <Submenu>Corporate projects for EIN-DES-EIN. and business card sites to advertise apps.</Submenu>
      </Experience>
      <Experience>
        <Link target="_blank" href="https://slotogate.com/">
          slotogate.com
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, BEM, PHP, JS, JQUERY, WordPress, ACF, WPML <Bold>]</Bold>
        </Name>
        <Submenu>Projects for TRIONIKA. Responsive layout of WordPress templates based on layouts in Figma with effective optimization under Google Lighthouse. Creation of custom post types, taxonomies.</Submenu>
      </Experience>
      {/* <Experience>
        <Link target="_blank" href="https://oleksandrvasylchuk.github.io/coca-cola/">
          Coca-Cola
        </Link>
        <Link target="_blank" href="https://oleksandrvasylchuk.github.io/coca-cola/">
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, fullPage.js, GSAP.
          <Bold>]</Bold>
        </Name>
        <Submenu>Own project. Business card site</Submenu>
      </Experience>
      <Experience>
        <Link target="_blank" href="https://cabbage-project.netlify.app/">
          Kapusta
        </Link>
        <Link target="_blank" href="https://github.com/virysik/goit-final-project-kapusta-front">
          <AiFillGithub />
        </Link>
        <Name>
          <Bold>[</Bold> HTML5, CSS3, JavaScript, Axios, React.js, React router, React hooks, Redux, Redux Toolkit, Async Thunk, Material-UI, React Hook Form, Yup, Node.js<Bold>]</Bold>
        </Name>
        <Submenu>Team Project. Web app for calculation your finances.</Submenu>
      </Experience> */}
      <Experience>
        <Link target="_blank" href="https://www.lemberg-ikra.com.ua/">
          lemberg-ikra.com.ua
        </Link>
        <Link target="_blank" href="https://lemberg-ikra.com/">
          lemberg-ikra.com
        </Link>
        <Link target="_blank" href="https://paradisecaps.com/">
          paradisecaps.com
        </Link>
        <Link target="_blank" href="https://www.touchspa.com.ua/">
          touchspa.com.ua
        </Link>
        <Link target="_blank" href="https://lacto.seocms.com.ua/">
          ЛАКТО-КЮР
        </Link>

        <Name>
          <Bold>[</Bold> HTML5, CSS3, SASS, PHP, JS, JQUERY, AJAX, WordPress, ACF, Elementor
          <Bold>]</Bold>
        </Name>
        <Submenu>E-Commerce.</Submenu>
      </Experience>
    </List>
  );
}
