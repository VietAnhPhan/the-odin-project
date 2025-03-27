export default function () {
    const menu = document.createElement("div");
    const menuHeading = document.createElement("h2");
    const menuTimings = document.createElement("div");

    menuHeading.textContent = "Menu";

    const menuTiming = [

        {
            category: "dining",
            heading: "Dining",
            details: ["Zensai", "Sashimi", "Yaki Mono", "Steak", "Sushi Maki", "Men Mono", "Dessert"],
            price: 1200000
        },
        
        {
            category: "dining",
            heading: "Dining",
            details: ["Zensai", "Sashimi", "Yaki Mono", "Steak", "Sushi Maki", "Men Mono", "Dessert"],
            price: 1200000
        },

    ];



    menuTiming.forEach(menuTiming => {
        console.log(menuTiming);
        const menuBlock = document.createElement("div");
        const menuTimingHeading = document.createElement("h3");
        const menuList = document.createElement("ul");
      
        const price = document.createElement("span");

        menuBlock.classList.add(`menu__${menuTiming.category}`);
        menuTimingHeading.textContent = menuTiming.heading;
        
        menuTiming.details.forEach(detail=>{
            const menuDetail = document.createElement("li");
            menuDetail.textContent = detail;
            menuList.appendChild(menuDetail);
        })

        price.textContent = `Price: VND ${menuTiming.price}`;

        menuBlock.append(menuTimingHeading, menuList, price);
        menuTimings.appendChild(menuBlock);
    });

    menu.append(menuHeading, menuTimings);

    return menu;
}