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
            <div className="grid grid-cols-2 ml-7 font-semibold px-4 text-xl lg:grid-cols-3 lg:ml-0">
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiHtml5 className="mt-1 lg:text-3xl lg:mt-0"/>HTML5</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiCss3 className="mt-1 lg:text-3xl lg:mt-0" />CSS3</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiJavascript className="mt-1 lg:text-3xl lg:mt-0" />JavaScript</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiTypescript className="mt-1 lg:text-3xl lg:mt-0" />TypeScript</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiReact className="mt-1 lg:text-3xl lg:mt-0" />React</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiNextdotjs className="mt-1 lg:text-3xl lg:mt-0" />Next</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiTailwindcss className="mt-1 lg:text-3xl lg:mt-0" />Tailwind CSS</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiStyledcomponents className="mt-1 lg:text-3xl lg:mt-0" />Styled Components</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiBootstrap className="mt-1 lg:text-3xl lg:mt-0" />Bootstrap</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiGit className="mt-1 lg:text-3xl lg:mt-0" />Git</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiGithub className="mt-1 lg:text-3xl lg:mt-0" />Github</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiMysql className="mt-1 lg:text-3xl lg:mt-0" />MySQL</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiMongodb className="mt-1 lg:text-3xl lg:mt-0" />MongoDB</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiLinux className="mt-1 lg:text-3xl lg:mt-0" />Linux</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiNpm className="mt-1 lg:text-3xl lg:mt-0" />npm</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiGnubash className="mt-1 lg:text-3xl lg:mt-0" />Bash</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiFigma className="mt-1 lg:text-3xl lg:mt-0" />Figma</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiVercel className="mt-1 lg:text-3xl lg:mt-0" />Vercel Cloud</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiNetlify className="mt-1 lg:text-3xl lg:mt-0" />Netlify Cloud</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiGoogleanalytics className="mt-1 lg:text-3xl lg:mt-0" />Google Analytics</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiSlack className="mt-1 lg:text-3xl lg:mt-0" />Slack</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiTrello className="mt-1 lg:text-3xl lg:mt-0" />Trello</ul>
                <ul className="inline-flex gap-1 my-1 lg:my-3"><SiNotion className="mt-1 lg:text-3xl lg:mt-0" />Notion</ul>
            </div>
        </>
    )
};