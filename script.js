let dictionary = JSONparse(localStorage.getItem('dictionary')) || {};
let randomGermanWord;
 
function addVocabulary(){
    dictionary[germanText.value] = frenchText.value;

    germanText.value = '';
    frenchText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render() {
    vocabularyList.innerHTML = '';
    for (let key in dictionary) {        
        vocabularyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
    }
}

function nextVocabulary(){
    let obj_keys = Object.keys(dictionary);
    let randomGermanWord_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
    word.innerHTML = `${randomGermanWord}?`;
}

function compare(){
    if(germanText.value == randomGermanWord) {
        text.innerHTML = 'Richtig!!';
    } else {
        text.innerHTML = 'Falsch!!';
    }
    germanText.value = '';
    nextVocabulary();
}