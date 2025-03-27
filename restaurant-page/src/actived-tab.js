import home from "./home";
import menu from "./menu";
import contact from "./contact";

export default function () {
    const tabs = document.querySelector("nav");
    const homeTab = tabs.querySelector("#home");
    const menuTab = tabs.querySelector("#menu");
    const contactTab = tabs.querySelector("#contact");
    const content = document.querySelector("#content");
    const menuTabs = tabs.querySelectorAll(".tab");
    // const homeContainer = document.querySelector(".home");

    homeTab.classList.add("actived");

    const homeContent = home();
    const menuContent = menu();
    const contactContent = contact();

    content.append(homeContent);

    homeTab.addEventListener("click", () => {
        removeActive();
        homeTab.classList.add("actived");
        content.textContent="";
        
        content.appendChild(homeContent);
    })

    menuTab.addEventListener("click", () => {
        removeActive();
        menuTab.classList.add("actived");
        content.textContent="";
        content.appendChild(menuContent);
    });

    contactTab.addEventListener("click",()=>{
        removeActive();
        contactTab.classList.add("actived");
        content.textContent="";
        content.appendChild(contactContent);
    });

    function removeActive(){
        menuTabs.forEach(tab=>{
            tab.classList.remove("actived");
        })
    }
}