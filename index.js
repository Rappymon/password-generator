const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomPassword1 = ""
let randomPassword2 = ""
let firstPasswordEl = document.getElementById("firstPassword-el")
let secondPasswordEl = document.getElementById("secondPassword-el")

function generatePassword(){
    passwordLengthEl = document.getElementById("passwordLength").value
    for (i = 0; i < passwordLengthEl; i++){
        generateRandomCharacter()
        randomPassword1 += randomCharacter
        
        generateRandomCharacter()
        randomPassword2 += randomCharacter
    }
    firstPasswordEl.textContent = randomPassword1
    secondPasswordEl.textContent = randomPassword2
    randomPassword1 = ""
    randomPassword2 = ""

}

function generateRandomCharacter(){
        let randomIndex = Math.floor(Math.random() * characters.length)
        randomCharacter = characters[randomIndex]
}