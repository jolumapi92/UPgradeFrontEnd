function Human(name, lastName, job, phone, suffix, gender) {
    this.name = name;
    this.last = lastName;
    this.job = job;
    this.phone = phone;
    this.suffix = suffix;
    this.gender = gender;
}

let human = {};
const humanCreate = () => {
    let name = faker.name.firstName();
    let last = faker.name.lastName();
    let job = faker.name.jobTitle();
    let phone = faker.phone.phoneNumber();
    let suffix = faker.name.suffix();
    let gender = prompt("Male or Female").toLowerCase();

    human = new Human(name, last, job, phone, suffix, gender);
    let letStringInfo = "";
    const list = document.querySelector("#list-humans");
    const element = document.createElement('li');
    if(human.gender === "male" || human.gender === "female") {
        for (const key in human) {
            letStringInfo += human[key];
            letStringInfo += " ";
        }
        element.innerText = letStringInfo;
        element.classList.add("list-item");
    } else { 
        for (const key in human) {
            letStringInfo += human[key];
            letStringInfo += " ";
        }
        element.innerText = letStringInfo;
        element.classList.add("list-item-monster");
     }
    
    list.appendChild(element);
}

export { humanCreate, human };