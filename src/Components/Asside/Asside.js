import React from "react";
import MYPhoto from "../Images/photo.jpg";
import { HiOutlinePhone, HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import {
  Photo,
  Column,
  Contact,
  Section,
  Item,
  Link,
  List,
  Seitbar,
  Title,
  Hi,
} from "./Asside.styled";

export default function Asside(techskills, softskills) {
  return (
    <>
      <Seitbar>
        <Column>
          <Photo src={MYPhoto} alt="My photo" />
        </Column>
        <Section>
          <Title>Contacts</Title>
          <List>
            <Contact>
              <Link href="tel: +380990241220" target="_blank" rel="noreferrer">
                <Hi>
                  <HiOutlinePhone />
                </Hi>
                +380990241220
              </Link>
            </Contact>

            <Contact>
              <Link
                href="mailto:sanyabatyushka@gmail.com"
                target="_blank"
                rel="noreferrer">
                <Hi>
                  <HiOutlineMailOpen />
                </Hi>
                sanyabatyushka@gmail.com
              </Link>
            </Contact>
            <Contact>
              <Link
                href="https://www.linkedin.com/in/oleksandr-vasylchuk"
                target="_blank"
                rel="noreferrer">
                <Hi>
                  <AiOutlineLinkedin />
                </Hi>
                LinkedIn
              </Link>
            </Contact>

            <Contact>
              <Link
                href="https://github.com/OleksandrVasylchuk"
                target="_blank"
                rel="noreferrer">
                <Hi>
                  <AiFillGithub />
                </Hi>
                GitHub
              </Link>
            </Contact>
          </List>
        </Section>

        <Section>
          <Title>Tech Skills</Title>
          <List>
            {/* {techskills.map(({ name, id }) => (
            <Item key={id}>{name}</Item>
          ))} */}
            {/* <Item>React.js/React router/React hooks</Item> */}
            <Item>HTML5/CSS3/SASS/BEM</Item>
            <Item>JavaScript Es6+ </Item>
            <Item>Handlebars</Item>
            {/* <Item>Redux/Redux Toolkit/Async Redux</Item> */}
            <Item>WordPress</Item>
            <Item>Elementor</Item>
            <Item>WebPack</Item>
            <Item>VS Code</Item>
            <Item>XAMPP</Item>
            <Item>Docker</Item>
            <Item>JQuery</Item>
            <Item>Figma</Item>
            <Item>AJAX</Item>
            <Item>NPM</Item>
            <Item>PHP</Item>
            <Item>ACF</Item>
            <Item>Git</Item>
            {/* <Item>
            Formik/Yup/React Hook
            Form/Axios/Emotion/Material-UI/Bootstrap/others...
          </Item> */}
          </List>
        </Section>

        <Section>
          <Title>Soft Skills</Title>
          <List>
            {/* {softskills.map(({ name, id }) => (
            <Item key={id}>{name}</Item>
          ))} */}
            <Item>Funny</Item>
            <Item>Friendly</Item>
            <Item>Honesty</Item>
            <Item>Teamwork</Item>
            <Item>Responsibility</Item>
            <Item>Communicable</Item>
            <Item>Self development</Item>
          </List>
        </Section>

        <Section>
          <Title>Language skills</Title>
          <List>
            <Item>English - Pre-Intermediate</Item>
            <Item>Ukrainian - Mastery</Item>
          </List>
        </Section>
      </Seitbar>
    </>
  );
}

// Asside.propTypes = {
//   techskills: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
//     .isRequired,
//   softskills: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
//     .isRequired,
// };
