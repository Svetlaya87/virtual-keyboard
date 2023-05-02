let numberKeys = [
    ["Backquote", "~" , "`"],
    ["Digit1", "!", "1"], 
    ["Digit2", "@", "2"], 
    ["Digit3", "#", "3"], 
    ["Digit4", "$", "4"], 
    ["Digit5", "%", "5"], 
    ["Digit6", ":", "6"], 
    ["Digit7", "?", "7"], 
    ["Digit8", "*", "8"], 
    ["Digit9", "(", "9"], 
    ["Digit0", ")", "0"], 
    ["Minus", "-", "_"], 
    ["Equal", "+", "="], 
    ["Backspace", "Backspace"]
];

let lettersLineQP = [
    ["Tab", "Tab"],
    ["KeyQ", "Q", "Й"], //81
    ["KeyW", "W", "Ц"],
    ["KeyE", "E", "У"],//U+423 У
    ["KeyR", "R", "К"], //К
    ["KeyT", "T", "Е"],//Е
    ["KeyY", "Y", "Н"], //Н
    ["KeyU", "U", "Г"],
    ["KeyI", "I", "Ш"],
    ["KeyO", "O", "Щ"],
    ["KeyP", "P", "З"], //З
    ["BracketLeft", "[", "Х"], //Х
    ["BracketRight", "]", "Ъ"],
    ["Backslash", "/", "\\"],
    ["Delete", "DEL"],
];

let lettersLineAL = [
    ["CapsLock", "CAPS LOCK"],
    ["KeyA", "A", "Ф"],
    ["KeyS", "S", "Ы"],
    ["KeyD", "D", "В"],
    ["KeyF", "F", "А"],
    ["KeyG", "G", "П"],
    ["KeyH", "H", "Р"],
    ["KeyJ", "J", "О"],
    ["KeyK", "K", "Л"],
    ["KeyL", "L", "Д"],
    ["Semicolon", ";", "Ж"],
    ["Quote", "'", "Э"],
    ["Enter", "ENTER"]
];

let lettersLineZM = [
    ["ShiftLeft", "Shift"],
    ["IntlBackslash", "\\"],
    ["KeyZ", "Z", "Я"],
    ["KeyX", "X", "Ч"],
    ["KeyC", "C", "С"],
    ["KeyV", "V", "М"],
    ["KeyB", "B", "И"],
    ["KeyN", "N", "Т"],
    ["KeyM", "M", "Ь"],
    ["Comma", ",", "Б"],
    ["Period", ".", "Ю"],
    ["Slash", "/"],
    ["ArrowUp", ""],
    ["ShiftRight", "Shift"],
];

let funcKeys = [
    ["ControlLeft", "Ctrl"],
    ["MetaLeft", "Win"],
    ["AltLeft", "Alt"],
    ["Space", "Space"],
    ["AltRight", "Alt"],
    ["ControlRight", "Ctrl"],
    ["ArrowLeft", ""],
    ["ArrowDown", ""],
    ["ArrowRight", ""],
]



let body = document.querySelector('body');
console.log(body);


let KeyBoardContainer = document.createElement('div');
KeyBoardContainer.className ="container";


let textArea = document.createElement('textarea');
textArea.className ="text-area";

body.insertAdjacentElement('beforeend', textArea);
body.insertAdjacentElement('beforeend', KeyBoardContainer);
console.log(KeyBoardContainer);


let keyNumberContainer = document.createElement('div');
keyNumberContainer.id = 'number-keys';
keyNumberContainer.className = "key-line";
KeyBoardContainer.insertAdjacentElement('beforeend', keyNumberContainer);

let keyQPContainer = document.createElement('div');
keyQPContainer.id = "letters-qp-keys";
keyQPContainer.className = "key-line";
KeyBoardContainer.insertAdjacentElement('beforeend', keyQPContainer);

let keyALContainer = document.createElement('div');
keyALContainer.id = "letters-al-keys";
keyALContainer.className = "key-line";
KeyBoardContainer.insertAdjacentElement('beforeend', keyALContainer);

let keyZMContainer = document.createElement('div');
keyZMContainer.id = "letters-zm-keys";
keyZMContainer.className = "key-line";
KeyBoardContainer.insertAdjacentElement('beforeend', keyZMContainer);

let keyFuncKeysContainer = document.createElement('div');
keyFuncKeysContainer.id = "letters-func-keys";
keyFuncKeysContainer.className = "key-line";
KeyBoardContainer.insertAdjacentElement('beforeend', keyFuncKeysContainer);

function insertLineOfKeys (arr, tag){
    for(let i=0; i< arr.length; i++){
      
      let keyDiv = document.createElement('div');
      if( arr[i].length == 2 ){
            keyDiv.innerText = arr[i][1];
    
        }else {
            //arr[i].forEach(function(element){
            for(let j=1; j<arr[i].length; j++){
                let span = document.createElement('span');
                span.innerText = arr[i][j];
                keyDiv.insertAdjacentElement("beforeend", span);
                //return keyDiv;
            }//});
    
        }
    
        keyDiv.className= "key";
        keyDiv.id= arr[i][0];
        tag.insertAdjacentElement("beforeend", keyDiv);
    }
}

insertLineOfKeys(numberKeys, keyNumberContainer);
insertLineOfKeys(lettersLineQP, keyQPContainer);
insertLineOfKeys(lettersLineAL, keyALContainer);
insertLineOfKeys(lettersLineZM, keyZMContainer);
insertLineOfKeys(funcKeys, keyFuncKeysContainer);


let backSpace = document.querySelector(".key-line div:last-child");

backSpace.classList.add("backspace");
let firstSpan = document.querySelectorAll(".key-line div span:first-child");

for (let el of firstSpan){
    el.classList.add("key-first-span");
}

let tab = document.querySelector(".key-line:nth-child(2) div:first-child");
tab.classList.add("tab");

let capsLock = document.querySelector("#letters-al-keys .key:first-child");
capsLock.classList.add("caps-lock");

let enter = document.querySelector("#letters-al-keys .key:last-child");
enter.classList.add("enter");

let shift = document.querySelector("#letters-zm-keys .key:first-child");
shift.classList.add("shift");

let slash  = document.querySelector("#letters-zm-keys .key:nth-child(12)");
slash.classList.add("key-single");

let arrowUp  = document.querySelector("#letters-zm-keys .key:nth-child(13)");
let arrowLeft  = document.querySelector("#letters-func-keys .key:nth-child(7)");
let arrowDown  = document.querySelector("#letters-func-keys .key:nth-child(8)");
let arrowRight  = document.querySelector("#letters-func-keys .key:nth-child(9)");

let arrows = [
    [arrowUp, "./svg/arrow-up.svg" ],
    [arrowLeft, "./svg/arrow-left.svg"],
    [arrowRight, "./svg/arrow-right.svg"],
    [arrowDown, "./svg/arrow-down.svg"]
]

function insertArrowImg(arrow, link){

  arrow.classList.add("key-img");
  let img = document.createElement("img");
  img.src= link;
  img.classList.add("img-arrows");
  arrow.insertAdjacentElement("beforeend", img);

}

insertArrowImg(arrowUp, arrows[0][1]);
insertArrowImg(arrowLeft, arrows[1][1]);
insertArrowImg(arrowRight, arrows[2][1]);
insertArrowImg(arrowDown, arrows[3][1]);

let space  = document.querySelector("#letters-func-keys .key:nth-child(4)");
space.classList.add("space");

let ctrl = document.querySelector("#letters-func-keys .key:nth-child(1)");
ctrl.classList.add("ctrl");


let excluds = ["ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "CapsLock", "Tab", "MetaLeft", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown","Enter", "Backspace", "WakeUp", "Escape", "Delete", "NumLock", "Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9", "Numpad0", "NumpadDivide", "NumpadMultiply", "NumpadSubtract", "NumpadAdd", "NumpadEnter", "NumpadDecimal"];
/*----события клавиатуры----*/
document.addEventListener('keydown', function(e){
    
    let res= excluds.filter( function (el, i) { return e.code.indexOf(el) !== -1});

    console.log(res);

    if( res.length == 0 && document.getElementById(e.code) !== null){
        if(document.activeElement !== textArea) {
        

            textArea.value += e.key;
        }
    }    

    if( document.getElementById(e.code) !== null ){
        document.getElementById(e.code).classList.add('key-key-down');
    }
        

    
    
   
});

document.addEventListener('keyup', function(e){

    let res= excluds.filter( function (el, i) { return e.code.indexOf(el) !== -1});


    if( document.getElementById(e.code) !== null ){
        document.getElementById(e.code).classList.remove('key-key-down');
    }    
    
});


let allkeys = document.querySelectorAll('.key');
for(let i=0; i< allkeys.length; i++){
    allkeys[i].addEventListener("mousedown", function(e){
        console.log(e.currentTarget.innerText);
        if( e.currentTarget.innerText == "\\" || e.currentTarget.innerText == "/"){
            textArea.value += e.currentTarget.innerText;
            document.getElementById(e.currentTarget.id).classList.toggle('key-key-down');

        } else if(e.currentTarget.innerText == "Space"){
            textArea.value += " ";
            document.getElementById(e.currentTarget.id).classList.toggle('key-key-down');
        } else if( excluds.indexOf(e.currentTarget.id) == -1 && document.getElementById(e.currentTarget.id) !== null){
            document.getElementById(e.currentTarget.id).classList.toggle('key-key-down');
            if(document.activeElement !== textArea && !e.shiftKey) {
                
                textArea.value += e.currentTarget.childNodes[0].innerText.toLowerCase();
            
                console.log(textArea);
            }else if (document.activeElement !== textArea && e.shiftKey){
                textArea.value += e.currentTarget.childNodes[0].innerText.toUpperCase();
            }
        }

    });
}

for(let i=0; i< allkeys.length; i++){
    allkeys[i].addEventListener("mouseup", function(e){
        console.log(e.currentTarget.childNodes);
        if( excluds.indexOf(e.currentTarget.id) == -1 && document.getElementById(e.currentTarget.id) !== null){
            document.getElementById(e.currentTarget.id).classList.toggle('key-key-down');
        
        }

    });
}
