// const artOne = document.getElementById('surrealism');
// const artTwo = document.getElementById('impressionism');
// const artThree = document.getElementById('modern');
// const artFour = document.getElementById('ancient');
// const artFive = document.getElementById('expressionism');
// const show = document.querySelector('#show')

// artOne.addEventListener('click', nextArt);
// artTwo.addEventListener('click', nextArt);
// artThree.addEventListener('click', nextArt);
// artFour.addEventListener('click', nextArt);
// artFive.addEventListener('click', nextArt);


// let currentArt;

// function nextArt(click){
//     currentArt = click.target.id;
//     if(currentArt==='surrealism'){
//         show.src=imageOne;
//     }
//     else if(currentArt==='impressionism'){
//         show.src=imageTwo;
//     }
//     else if(currentArt==='modern'){
//         show.src=imageThree;
//     }
//     else if(currentArt==='expressionism'){
//         show.src=imageFive;
//     }
// }


const images = [
    "https://media.nga.gov/iiif/a716d2d8-147d-4a90-b4cb-c7c98750dc95/full/full/0/default.jpg?attachment_filename=the_return_2014.79.12.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
    "https://collectionapi.metmuseum.org/api/collection/v1/iiif/490018/1009285/restricted",
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png"
]

console.log(images.length);

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
}



//images

// 1 - src="https://media.nga.gov/iiif/a716d2d8-147d-4a90-b4cb-c7c98750dc95/full/full/0/default.jpg?attachment_filename=the_return_2014.79.12.jpg"
// 2 - src="https://upload.wikimedia.org/wikipedia/commons/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg"
// 3 - src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/490018/1009285/restricted"
// 4 - src="https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Scream_by_Edvard_Munch%2C_1893_-_Nasjonalgalleriet.png"
// 5 - src="""

//
