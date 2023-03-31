new RegistrasiForm();
class RegistrasiForm {
  constructor() {
    this.form = document.getElementById("registration-form");
    this.nameInput = document.getElementById("name");
    this.ageInput = document.getElementById("age");
    this.moneyInput = document.getElementById("money");
    this.form.addEventListener("submit", this.submit.bind(this));
  }

  submit(event) {
    event.preventDefault();
    const name = this.nameInput.value;
    const age = this.ageInput.value;
    const money = this.moneyInput.value;
    if (name.length < 10 || age < 25 || money < 100000 || money > 1000000) {
      alert("Data tidak valid!");
      return;
    }
    const pendaftar = new pendaftar(name, age, money);
    this.addPendaftar(pendaftar);
    this.clearForm();
  }

  addPendaftar(pendaftar) {
    const pendaftarTable = document.getElementById("pendaftar-table");
    const row = pendaftarTable.insertRow();
    const nameCell = row.insertCell();
    const ageCell = row.insertCell();
    const moneyCell = row.insertCell();

    nameCell.innerText = pendaftar.name;
    ageCell.innerText = pendaftar.age;
    moneyCell.innerText = pendaftar.money;
    this.updateResume();
  }

  clearForm() {
    this.nameInput.value = "";
    this.ageInput.value = "";
    this.moneyInput.value = "";
  }

  updateResume() {
    const pendaftarTable = document.getElementById("pendaftar-table");
    const rowCount = pendaftarTable.rows.length - 1;
    let totalAge = 0;
    let totalMoney = 0;
    for (let i = 1; i <= rowCount; i++) {
      const age = parseInt(pendaftarTable.rows[i].cells[1].innerText);
      const money = parseInt(pendaftarTable.rows[i].cells[2].innerText);
      totalAge += age;
      totalMoney += money;
    }
    const avgAge = Math.round(totalAge / rowCount);
    const avgMoney = Math.round(totalMoney / rowCount);
    const resumeDiv = document.getElementById("resume");
    resumeDiv.innerText = `Rata-rata pendaftar memiliki uang sangu sebesar ${avgMoney} dengan rata-rata umur ${avgAge}`;
  }
}

// Define Tabs class
class Tabs {
  constructor() {
    this.tablinks = document.getElementsByClassName("tablink");
    this.tabcontents = document.getElementsByClassName("tabcontent");
    this.tablinks[0].click();
  }

  openTab(event, tabName) {
    for (let i = 0; i < this.tabcontents.length; i++) {
      this.tabcontents[i].style.display = "none";
    }
    for (let i = 0; i < this.tablinks.length; i++) {
      this.tablinks[i].className = this.tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }
}

// Initialize tabs and registration form
const tabs = new Tabs();
const form = new RegistrasiForm();
