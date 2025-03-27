import logoImage from "./SORAE.png";

export default function () {
    const home= document.createElement("div");
    const logoImg = document.createElement("img");
    const intro = document.createElement("p");
    const heading = document.createElement("div");
    const logoDiv = document.createElement("div");
    const hoursDiv = document.createElement("div");
    const location = document.createElement("div");
    const hoursHeading = document.createElement("h2");
    const locationHeading = document.createElement("h2");
    const hoursListing = document.createElement("ul");
    const locationText = document.createElement("p");

    home.classList.add("home");
    heading.classList.add("heading");
    logoDiv.classList.add("logo");
    hoursDiv.classList.add("hours");
    location.classList.add("location");

    logoImg.setAttribute('src', logoImage);
    intro.textContent = "“SORAE” – Above the sky, exactly what its name implies. The Japanese restaurant has one of the most breathtaking views, and is the ideal rendezvous in the inner Saigon.";
    hoursHeading.textContent = "Hours";
    locationHeading.textContent = "Location";

    const hoursOpenning = [
        "Sunday: 11:00 - 23:00",
        "Monday: 11:00 - 23:00",
        "Tuesday: 11:00 - 23:00",
        "Wednesday: 11:00 - 23:00",
        "Thursday: 11:00 - 23:00",
        "Friday: 11:00 - 23:00",
        "Sartuday: 11:00 - 23:00",
    ];

    hoursOpenning.forEach(hour => {
        const li = document.createElement("li");
        li.textContent = hour;
        hoursListing.appendChild(li);
    });

    locationText.textContent = "Level 51 Bitexco Financial Tower, 36 Ho Tung Mau, Ben Nghe, D1, HCMC";

    logoDiv.appendChild(logoImg);
    heading.append(logoDiv, intro);
    hoursDiv.append(hoursHeading, hoursListing);
    location.append(locationHeading, locationText);

    home.append(logoDiv, heading, hoursDiv, location);
    
    return home;
}