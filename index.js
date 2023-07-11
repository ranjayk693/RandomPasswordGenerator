let passwordDisplay = document.getElementById("randomText");
let upperChecked = document.getElementById("upper-case");
let lowerChecked = document.getElementById("lower-case");
let numberChecked = document.getElementById("numbers");
let symbolChecked = document.getElementById("symbols");

// console.log(upperChecked);
// console.log(typeof Number.parseInt(psdLength));

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbols = "`~!@#$%^&*()_+-=";

let selectPassword = (psd) => {
  return psd[Math.floor(Math.random() * psd.length)]; //geting index of string and returning it
};

let generatePsd = (psd = "") => {
  let psdLength = Number.parseInt(
    document.getElementById("input-length").value
  );

  //   let psd = "";
  // for(let i=0;i<psdLength;i++)
  // {
  //     if(upperChecked.checked==true )
  //     {
  //         psd+=selectPassword(upperCase);
  //     }
  //     if(lowerChecked.checked==true)
  //     {
  //         psd+=selectPassword(lowerCase);
  //     }
  // }
  if (upperChecked.checked == true) {
    psd += selectPassword(upperCase);
  }
  if (lowerChecked.checked == true) {
    psd += selectPassword(lowerCase);
  }
  if (numberChecked.checked == true) {
    psd += selectPassword(number);
  }
  if (symbolChecked.checked == true) {
    psd += selectPassword(symbols);
  }
  if (psd.length <= psdLength) {
    return generatePsd(psd);
  }
  passwordDisplay.value = psd.slice(0, psdLength);
  // console.log(psd);
};

//called once
generatePsd();

//called on clicked
document.getElementById("ClickMe").addEventListener("click", () => {
  generatePsd("");
});
