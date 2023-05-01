let numberKeys = [
    ["~" , "`"],  ["!", 1], ["@", 2], ["#", 3], ["$", 4], ["%", 5], [":", 6], ["?", 7], ["*", 8], ["(", 9], [")", 0], ["-", "_"], ["+", "="], ['Backspace']
];

let lettersLineQP = [
    ["Tab"],
    ["Q", "Й"], //81
    ["W", "Ц"],
    ["E", "У"],//U+423 У
    ["R", "К"], //К
    ["T", "Е"],//Е
    ["Y", "Н"], //Н
    ["U", "Г"],
    ["I", "Ш"],
    ["O", "Щ"],
    ["P", "З"], //З
    ["[", "Х"], //Х
    ["]", "Ъ"],
    ["/", "\\"],
    ["DEL"],
];

let lettersLineAL = [
    ["CAPS LOCK"],
    ["A", "Ф"],
    ["S", "Ы"],
    ["D", "В"],
    ["F", "А"],
    ["G", "П"],
    ["H", "Р"],
    ["J", "О"],
    ["K", "Л"],
    ["L", "Д"],
    [";", "Ж"],
    ["'", "Э"],
    ["ENTER"]
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

function insertLineOfKeys (arr, tag){
    for(let i=0; i< arr.length; i++){
        let keyDiv = document.createElement('div');
        if( arr[i].length == 1 ){
            keyDiv.innerText = arr[i];
    
        }else {
            arr[i].forEach(function(element){
                let span = document.createElement('span');
                span.innerText = element;
                keyDiv.insertAdjacentElement("beforeend", span);
                //return keyDiv;
            });
    
        }
    
        keyDiv.className= "key";
        tag.insertAdjacentElement("beforeend", keyDiv);
    }
}

insertLineOfKeys(lettersLineQP, keyQPContainer);
insertLineOfKeys(lettersLineAL, keyALContainer);

for(let i=0; i<numberKeys.length; i++){
    let keyDiv = document.createElement('div');
    if( numberKeys[i].length == 1 ){
        keyDiv.innerText = numberKeys[i];

    }else {
        numberKeys[i].forEach(function(element){
            let span = document.createElement('span');
            span.innerText = element;
            keyDiv.insertAdjacentElement("beforeend", span);
            //return keyDiv;
        });

    }

    keyDiv.className= "key";
    keyNumberContainer.insertAdjacentElement("beforeend", keyDiv);
}

let backSpace = document.querySelector(".key-line div:last-child");

backSpace.classList.add("backspace");
let firstSpan = document.querySelectorAll(".key-line div span:first-child");
console.log(firstSpan);
for (let el of firstSpan){
    el.classList.add("key-first-span");
}

let tab = document.querySelector(".key-line:nth-child(2) div:first-child");
tab.classList.add("tab");

let capsLock = document.querySelector("#letters-al-keys .key:first-child");
capsLock.classList.add("caps-lock");

let enter = document.querySelector("#letters-al-keys .key:last-child");
enter.classList.add("enter");