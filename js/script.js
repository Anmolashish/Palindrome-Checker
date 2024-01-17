let input = document.getElementById("text-input");
let check = document.getElementById("check-btn");
let result = document.getElementById("result");
//let values = input.value;

check.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please input a value");
  }
  if (checkIf(input.value)) {
    result.innerText = `${input.value} is a palindrome`;
  } else {
    result.innerText = `${input.value} is not a palindrome`;
  }
  input.value = "";
});

const checkIf = (values) => {
  values = values.replace(/[^a-z0-9]/gi, "");
  values = values.toLowerCase();
  let temp = values.split("").reverse().join("");
  console.log(temp + "and " + values);
  if (temp === values) {
    return true;
  } else {
    return false;
  }
};
