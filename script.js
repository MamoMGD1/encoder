const alphabets = "abcçdefgğhiıjklmnoöpqrsştuüvwxyz";
const keyword = "playground";
let randomNumber = Math.floor(Math.random()*9) + 1;
function generate1(){
    let input1, index = 0, codeNum = 0, alreadyEncoded = false, result = "";
    input1 = document.getElementById("input1").value;
    if(input1.trim()!==""){
        alreadyEncoded = isLowercase(input1[0]) ? true : false;
        if(alreadyEncoded){
            codeNum = keyword.indexOf(input1[0]);
            input1 = input1.slice(1);
        }else{
            codeNum = randomNumber;
            input1 = input1.toLowerCase();
            result+=keyword[codeNum];
        }
        for(let character of input1){
            if(character === " "){
                result+=" ";
                continue;
            }
            if(!alphabets.includes(character)){
                result+=character;
                continue;
            }
            index = alphabets.indexOf(character) - codeNum; // Get the previous character's index
            if (index < 0) {
                index = alphabets.length + index; // Wrap around to the end if index is negative
            }
            result += alphabets[index] || character; // Add the transformed character or original
        }
        document.getElementById("input2").value = result;
        document.querySelectorAll(".copy")[1].style.color = "#ddddff99"; // Show for inputM
        document.querySelectorAll(".copy")[0].style.color = "#00000000";
    }
}
function generate2(){
    let input2, index = 0, codeNum = 0, alreadyEncoded = false, result = "";
    input2 = document.getElementById("input2").value;
    if(input2.trim()!==""){
        alreadyEncoded = isLowercase(input2[0]) ? true : false;
        if(alreadyEncoded){
            codeNum = keyword.indexOf(input2[0]);
            input2 = input2.slice(1);
        }else{
            codeNum = randomNumber;
            input2 = input2.toLowerCase();
            result+=keyword[codeNum];
        }
        for(let character of input2){
            if(character === " "){
                result+=" ";
                continue;
            }
            if(!alphabets.includes(character)){
                result+=character;
                continue;
            }
            index = alphabets.indexOf(character) + codeNum; // Get the previous character's index
            if (index >= alphabets.length) {
                index -= alphabets.length; // Wrap around to the end if index is negative
            }
            result += alphabets[index] || character; // Add the transformed character or original
        }
        document.getElementById("input1").value = result;
        document.querySelectorAll(".copy")[1].style.color = "#00000000"; // Show for inputM
        document.querySelectorAll(".copy")[0].style.color = "#ddddff99";
    }
    
}
function copyToClipboard(textareaId) {
    const textarea = document.getElementById(textareaId);
    textarea.select(); // Select the text
    document.execCommand("copy"); // Copy the selected text to clipboard
}
function isLowercase(character){
    return character === character.toLowerCase();
}
document.addEventListener("click", function(event){
    if(!document.querySelector("main").contains(event.target)){
        document.querySelectorAll(".copy")[0].style.color = "#00000000"; // Show for inputM
        document.querySelectorAll(".copy")[1].style.color = "#00000000"; // Show for inputM
    }
});
document.addEventListener("dblclick", function(event){
    if(!document.querySelector("main").contains(event.target)){
        document.querySelectorAll(".input").forEach(element => {
            element.value = "";
        });
    }
});