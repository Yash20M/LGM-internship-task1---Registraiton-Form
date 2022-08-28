class Form {
    constructor(name, email, type, phone, profession) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.profession = profession;
        this.type = type;
    }
};


class Display {
    add(user) {
        let tableBody = document.getElementById("tableBody");
        let uiString =
            ` <tr>
                        <td scope="col">${user.name}</td>
                        <td scope="col">${user.email}</td>
                        <td scope="col">${user.phone}</td>
                        <td scope="col">${user.profession}</td>
                        <td scope="col">${user.type}</td>
             </tr>`

        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }

    validate(user) {
        if (user.name.length < 2 || user.email.length < 2 || user.phone.length < 2) {
            return false
        }
        else {
            return true
        }
    }

    show(type, message) {
        let msg = document.getElementById("message");
        msg.innerHTML = `
                        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                        <strong>Message:</strong>${message}
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>;`

        setTimeout(() => {
            msg.innerHTML = ""
        }, 3000);
    }
};



let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = document.getElementById("Name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let profession = document.getElementById("profession").value;
    let type;

    let female = document.getElementById("female");
    let male = document.getElementById("male");

    if (male.checked) {
        type = male.value
    }
    else if (female.checked) {
        type = female.value
    }


    let user = new Form(name, email, type, phone, profession);


    let display = new Display();
    if (display.validate(user)) {
        display.add(user)
        display.clear();
        display.show("success", "You have been resgistered Successfully");
    }
    else {
        console.log("Error");
        display.show("danger", "Please fill all the Details")
    }
});