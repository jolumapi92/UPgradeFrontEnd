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
    let gender = prompt("Male or Female");

    human = new Human(name, last, job, phone, suffix, gender);

    const list = document.querySelector("#list-humans");
    const element = document.createElement('li');
    element.innerText = human.name;
    list.appendChild(element);
}

export { humanCreate, human };