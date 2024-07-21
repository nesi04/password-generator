const length_value=document.getElementById("inp1");
function generatePassword(isLower,isUpper,isNum,isSpecial){
    const length=Number(length_value.value);;
    let lowerCase ="abcdefghijklmnopqrstuvwxyz";
    let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let Numbers ="0123456789";
    let SpecialCase="~!@#$%^&*()_-=+*/,?><;";
    let combine ="";
    if(isNaN(length)||length<1){
       passwordDisplay.textContent= "Length should be a number or more than 0";
        return"";
    }
    combine+=(isLower)?lowerCase:"";
    combine+=(isUpper)?upperCase:"";
    combine+=(isNum)?Numbers:"";
    combine+=(isSpecial)?SpecialCase:"";
    if (combine === "") {
       passwordDisplay.textContent= "At least one character set should be selected";
        return "";
    }
    let password ='';
    for(let i =0;i<length;i++){
        const j = Math.floor(Math.random()*combine.length);
        password+=combine[j];
    }
    
    return password;

}
const passwordDisplay = document.getElementById("result");
function generateandreturnPassword() {
    const isLower = document.getElementById("inp2").checked;
    const isUpper = document.getElementById("inp3").checked;
    const isNum = document.getElementById("inp4").checked;
    const isSpecial = document.getElementById("inp5").checked;

    const password = generatePassword(isLower, isUpper, isNum, isSpecial);
    document.getElementById("p1").textContent="Password Generated";
    passwordDisplay.textContent = `${password}`;
}