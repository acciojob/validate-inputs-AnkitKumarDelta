let name_regex = /^[A-Za-z]{3,}$/;
let email_regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
let phone_regex = /^[0-9]{10}$/;

let inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let value = e.target.value;

    if (e.target.type === "text") {
      if (name_regex.test(value)) {
        e.target.style.backgroundColor = "rgb(144, 238, 144)";
      } else {
        e.target.style.backgroundColor = "rgb(255, 192, 203)";
      }
    }

    else if (e.target.type === "email") {
      if (email_regex.test(value)) {
        e.target.style.backgroundColor = "rgb(144, 238, 144)";
      } else {
        e.target.style.backgroundColor = "rgb(255, 192, 203)";
      }
    }

    else if (e.target.type === "number" || e.target.type === "tel") {
      if (phone_regex.test(value)) {
        e.target.style.backgroundColor = "rgb(144, 238, 144)";
      } else {
        e.target.style.backgroundColor = "rgb(255, 192, 203)";
      }
    }
  });
});
