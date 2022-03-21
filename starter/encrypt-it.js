/*
 * Starter file 
 */

console.log("Window loaded!");
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    let encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click",encryptBtnClick);

    let resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click",resetBtnClick);

    let radioBtn12 = document.getElementById("radio12");
    let radioBtn24 = document.getElementById("radio24");
    let capsBtn = document.getElementById("all-caps");

    radioBtn12.addEventListener("click", radio12);
    radioBtn24.addEventListener("click",radio24);
    capsBtn.addEventListener("click",caps);

  }

  function radio12(){
    if(document.getElementById("radio12".checked)){
      document.getElementById("result").style.fontSize = "12pt";
    }
  }
  function radio24(){
    if(document.getElementById("radio24".checked)){
      document.getElementById("result").style.fontSize = "24pt";
    }
  }

  function caps(){
    if(document.getElementById("all-caps".checked)){
      document.getElementById("result").style.textTransform = "uppercase";
    }
  }
  
  
  function encryptBtnClick(){
    console.log("Encrypt Button Clicked");
    let textField = document.getElementById("input-text");
    let result = shiftCipher(textField); 
    document.getElementById("result").textContent = result;
  }

  function resetBtnClick(){
    console.log("Reset Btuuon Clicked");
    let textfield = document.getElementById("input-text");
    let result = document.getElementById("result");
    textfield.value = "";
    result.value = "";
  }

  /**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */
function shiftCipher(text) {
  text = text.toLowerCase();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] < 'a' || text[i] > 'z') {
      result += text[i];
    } else if (text[i] == 'z') {
      result += 'a';
    } else { // letter is between 'a' and 'y'
      let letter = text.charCodeAt(i);
      let resultLetter = String.fromCharCode(letter + 1);
      result += resultLetter;
    }
  }
  return result;
}
  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
