export default function(){
    const contact = document.createElement("div");
    const heading = document.createElement("h1");
    const name = document.createElement("p");
    const address = document.createElement("p");
    const phone = document.createElement("p");

    heading.textContent = "Contact us";
    name.textContent = "Sorae";
    address.textContent= "Floor 51, Bitexco Financial Tower, 36 Ho Tung Mau Street, Ben Nghe Ward, District 1, HCMC";
    phone.textContent = "Booking a table: 02838 272 372 | 0938 687 689";


    contact.append(heading, name, address, phone);
    return contact;
}