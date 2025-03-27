
import bgImage from "./background-1920x1080.png";
// import home from "./home";

export default function () {

    const body = document.querySelector("body");
    body.setAttribute('background', bgImage);

    const content = document.querySelector("#content");
    content.classList.add("container");
}