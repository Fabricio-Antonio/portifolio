import { SiHtml5, SiTypescript } from "react-icons/si";
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
import { SiGoogleanalytics } from "react-icons/si";
import { SiSlack } from "react-icons/si";
import { SiTrello } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiNpm } from "react-icons/si";
import { SiGnubash } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiNotion } from "react-icons/si";


export default function List() {
    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-3 text-xl">
                <ul className="inline-flex gap-1 my-1"><SiHtml5 className="mt-1"/>HTML5</ul>
                <ul className="inline-flex gap-1 my-1"><SiCss3 className="mt-1" />CSS3</ul>
                <ul className="inline-flex gap-1 my-1"><SiJavascript className="mt-1" />JavaScript</ul>
                <ul className="inline-flex gap-1 my-1"><SiTypescript className="mt-1" />TypeScript</ul>
                <ul className="inline-flex gap-1 my-1"><SiReact className="mt-1" />React</ul>
                <ul className="inline-flex gap-1 my-1"><SiNextdotjs className="mt-1" />Next</ul>
                <ul className="inline-flex gap-1 my-1"><SiTailwindcss className="mt-1" />Tailwind CSS</ul>
                <ul className="inline-flex gap-1 my-1"><SiStyledcomponents className="mt-1" />Styled Components</ul>
                <ul className="inline-flex gap-1 my-1"><SiBootstrap className="mt-1" />Bootstrap</ul>
                <ul className="inline-flex gap-1 my-1"><SiGit className="mt-1" />Git</ul>
                <ul className="inline-flex gap-1 my-1"><SiGithub className="mt-1" />Github</ul>
                <ul className="inline-flex gap-1 my-1"><SiMysql className="mt-1" />MySQL</ul>
                <ul className="inline-flex gap-1 my-1"><SiMongodb className="mt-1" />MongoDB</ul>
                <ul className="inline-flex gap-1 my-1"><SiLinux className="mt-1" />Linux</ul>
                <ul className="inline-flex gap-1 my-1"><SiNpm className="mt-1" />npm</ul>
                <ul className="inline-flex gap-1 my-1"><SiGnubash className="mt-1" />Bash</ul>
                <ul className="inline-flex gap-1 my-1"><SiFigma className="mt-1" />Figma</ul>
                <ul className="inline-flex gap-1 my-1"><SiVercel className="mt-1" />Vercel Cloud</ul>
                <ul className="inline-flex gap-1 my-1"><SiNetlify className="mt-1" />Netlify Cloud</ul>
                <ul className="inline-flex gap-1 my-1"><SiGoogleanalytics className="mt-1" />Google Analytics</ul>
                <ul className="inline-flex gap-1 my-1"><SiSlack className="mt-1" />Slack</ul>
                <ul className="inline-flex gap-1 my-1"><SiTrello className="mt-1" />Trello</ul>
                <ul className="inline-flex gap-1 my-1"><SiNotion className="mt-1" />Notion</ul>
            </div>
        </>
    )
};