import  { React } from 'react';
import { StyledList } from './style';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinux } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiGoogleanalytics } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiTrello } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";



export const List = () => (
    <>
        <StyledList>
            <ul><SiHtml5/>HTML5</ul>
            <ul><SiCss3/>CSS3</ul>
            <ul><SiJavascript/>JavaScript</ul>
            <ul><SiReact/>React</ul>
            <ul><SiBootstrap/>Bootstrap</ul>
            <ul><SiStyledcomponents/>Styled Components</ul>
            <ul><SiTailwindcss/>Tailwind CSS</ul>
            <ul><SiNextdotjs/>Next</ul>
            <ul><SiGit/>Git</ul>
            <ul><SiGithub/>Github</ul>
            <ul><SiMysql/>MySQL</ul>
            <ul><SiLinux/>Linux</ul>
            <ul><SiFigma/>Figma</ul>
            <ul><SiVercel/>Vercel Cloud</ul>
            <ul><SiNetlify/>Netlify Cloud</ul>
            <ul><SiGoogleanalytics/>Google Analytics</ul>
            <ul><SiSlack/>Slack</ul>
            <ul><SiTrello/>Trello</ul>
        </StyledList>
    </>
);

export default List