var addCat = function(name, favFood, imgURL){
   // this.name = name;
   // this.favFood = favFood;
   // this.imgURL = imgURL;
   var ul = document.createElement('ul');
   ul.classList.add('cat');

   var nameLi = document.createElement('li');
   nameLi.innerText = "Name: " + name;

   var faveFoodLi = document.createElement('li');
   faveFoodLi.innerText = "Favourite Food: " + favFood;

   var imgLi = document.createElement('li');
   imgLi.innerHTML = '<img src="' + imgURL + '"/>'

   var img = document.createElement('img');

   ul.appendChild(nameLi);
   ul.appendChild(faveFoodLi);
   ul.appendChild(imgLi);
   // imgLi.appendChild(img);
   var cats = document.getElementById('cats');
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
