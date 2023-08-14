const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const input6 = document.getElementById("input6");
const btn1 = document.getElementById("btn1");
const select = document.getElementById("select");

company1.style.display = "none";
company2.style.display = "none";
individual1.style.display = "none";
individual2.style.display = "none";
select.addEventListener("change", function () {
  if (select.value === "1") {
    company1.style.display = "flex";
    company2.style.display = "flex";
    individual1.style.display = "none";
    individual2.style.display = "none";
  } else if (select.value === "2") {
    individual1.style.display = "flex";
    individual2.style.display = "flex";
    company1.style.display = "none";
    company2.style.display = "none";
  } else {
    company1.style.display = "none";
    company2.style.display = "none";
    individual1.style.display = "none";
    individual2.style.display = "none";
  }
});

btn1.onclick = (e) => {
  const contact = new Contact(input1.value.trim(), input2.value.trim());
  Company.prototype = contact;
  Individual.prototype = contact;
  const print = document.getElementById("print");
  const company = new Company(input3.value.trim(), input4.value.trim());
  const individual = new Individual(input5.value.trim(), input6.value.trim());
  if (
    (input3.value !== "" || input4.value !== "") &&
    (input5.value === "" || input5.value === "")
  ) {
    const text = createElement(
      `Company Name: ${company.name} Telephone: ${company.tel} Adress: ${company.adress} Email: ${company.email}`,
      "div"
    );
    print.append(text);
  } else if (
    (input5.value !== "" || input5.value !== "") &&
    input3.value === "" &&
    input4.value === ""
  ) {
    const text = createElement(
      `Individual Name: ${individual.name} Telephone: ${individual.tel} Individual ID: ${individual.id} Individual Age: ${individual.age}`,
      "div"
    );
    print.append(text);
  } else {
    alert("Please fill in all fields");
  }
  console.log(company);
  console.log(individual);
};

function Contact(name, tel) {
  this.name = name;
  this.tel = tel;
}

function Company(adress, email) {
  this.adress = adress;
  this.email = email;
}

function Individual(id, age) {
  this.id = id;
  this.age = age;
}

function createElement(text, tag) {
  const element = document.createElement(tag);
  const textElement = document.createTextNode(text);
  element.append(textElement);
  return element;
}
