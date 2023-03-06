// Art Selection JS -- Choose Your Mark //

const images = [
    "https://media.nga.gov/iiif/a716d2d8-147d-4a90-b4cb-c7c98750dc95/full/full/0/default.jpg?attachment_filename=the_return_2014.79.12.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/490018/1009285/restricted",
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png"
]

const artNext = document.querySelectorAll(".quiz");
console.log(artNext);

for (var i = 0; i < artNext.length; i++) {
    let el = artNext[i];
    el.addEventListener("click", imageSwitcher);
}

const artScreen = document.querySelector("#art-screen");

function imageSwitcher(event){
    let text = event.target.innerText;
    let index = parseInt(text) - 1;
    let imgToSet = images[index];
    artScreen.setAttribute("src", imgToSet);
    console.log(text);
    console.log(imgToSet);
}

// InnerText Switcher //

const historicalPeriod = [
    "Romantic","Impressionist","Abstract","Expressionist"
]
for (var i = 0; i < artNext.length; i++) {
    let el = artNext[i];
    el.addEventListener("click", innerTextSwitcher); 
}

function innerTextSwitcher(evtText){
    let text2 = evtText.target.innerText;
    let index2 = parseInt(text2) - 1;
    let textToSet = historicalPeriod[index2];
    artScreen.setAttribute("innerText", textToSet);
    console.log(text2);
    console.log(textToSet);
    const artPeriod = text2;
    console.log(artPeriod);
}

// images reference //

// 1 - src="https://media.nga.gov/iiif/a716d2d8-147d-4a90-b4cb-c7c98750dc95/full/full/0/default.jpg?attachment_filename=the_return_2014.79.12.jpg"
// 2 - src="https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg"
// 3 - src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/490018/1009285/restricted"
// 4 - src="https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png"


// form validation //
//hold this for a moment while testing new code//
// const selection = document.getElementById('heist-form');

// const form = document.getElementById('heist-form');
// form.addEventListener('submit', function(evt) {
//    evt.preventDefault();
//    console.log(selection);
// })

//

const radioButtons = document.querySelectorAll('input[name="radio-group"]');
const form = document.getElementById('heist-form');

let artPeriodInnerText = document.getElementById('art-screen'.innerText);

form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let selection;
//    let text2;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selection = radioButton.value;
            break;
        }
    }
    console.log(selection);
    console.log(artPeriodInnerText);
//    console.log(text);

if (selection === artPeriodInnerText) {
     console.log('success');
 } else {
     console.log('you have failed.')
     alert("Make better choices.")
 }
}
)

// alert lasers

form.addEventListener('submit', function(fail) {
    fail.preventDefault();
    document.getElementById('fail-mode').classList.add('toggle-alert');
})










