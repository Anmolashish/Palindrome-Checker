let input = document.getElementById("text-input");
let check = document.getElementById("check-btn");
let result = document.getElementById("result");
//let values = input.value;

check.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please input a value");
  } else {
    if (checkIf(input.value)) {
      result.innerHTML = `<strong>${input.value}</strong> is a palindrome`;
    } else {
      result.innerHTML = `<strong>${input.value}</strong> is not a palindrome`;
    }
    input.value = "";
  }
});

const checkIf = (values) => {
  values = values.replace(/[^a-z0-9]/gi, "");
  values = values.toLowerCase();
  let temp = values.split("").reverse().join("");

  if (temp === values) {
    return true;
  } else {
    return false;
  }
};
