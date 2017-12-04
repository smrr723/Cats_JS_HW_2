var addCat = function(name, favFood, imgURL){

   var ul = document.createElement('ul');
   var nameLi = document.createElement('li');
   var faveFoodLi = document.createElement('li');
   var imgLi = document.createElement('li');
   var cats = document.getElementById('cats');

   ul.classList.add('cat');

   nameLi.innerText = "Name:" + name;
   faveFoodLi.innerText = "Favourite Food: " + favFood;
   imgLi.innerHTML = '<img class="catPic" src="' + imgURL + '"/>'

   ul.appendChild(nameLi);
   ul.appendChild(faveFoodLi);
   ul.appendChild(imgLi);
   cats.appendChild(ul);
};


var catApp = function(){
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
   addCat("Morty", "Space Rats", 'https://i.imgur.com/rBZ2QrQ.jpg');
};

window.onload = catApp;
