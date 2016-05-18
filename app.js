var allImages = [];
var imageNames = ['bag', 'banana', 'boost', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'water_can', 'wine_glass'];

function Product(name, path) {
  totalClicks = 0;
  this.name = name;
  this.path = path;
  this.tally = 0;
  allImages.push(this);

}

(function createSlider() {
  for(var i = 0; i < imageNames.length; i++) {
    new Product(imageNames[i], 'images/' + imageNames[i] + '.jpg');
  }
})();

var imageRank = {
  totalClicks: 0,
  leftObj: null,
  midObj: null,
  rightObj: null,
  imageEls: document.getElementById('images'),
  leftEl: document.getElementById('img1'),
  midEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),
  resultsEl: document.getElementById('resultsButton'),
  resetEl: document.getElementById('resetButton'),
  viewResultsEl: document.getElementById('viewResultsButton'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * imageNames.length);
  },

  displayImages: function() {
    imageRank.leftObj = allImages[imageRank.getRandomIndex()];
    imageRank.midObj = allImages[imageRank.getRandomIndex()];
    imageRank.rightObj = allImages[imageRank.getRandomIndex()];
    if (imageRank.leftObj === imageRank.midObj || imageRank.leftObj === imageRank.rightObj || imageRank.rightObj === imageRank.midObj);
    // displayImages();

    imageRank.leftObj.views += 1;
    imageRank.midObj.views += 1;
    imageRank.rightObj.views += 1;

    imageRank.leftEl.src = imageRank.leftObj.path,
    imageRank.leftEl.id = imageRank.leftObj.name;

    imageRank.midEl.src = imageRank.midObj.path;
    imageRank.midEl.id = imageRank.midObj.name;

    imageRank.rightEl.src = imageRank.rightObj.path;
    imageRank.rightEl.id = imageRank.rightObj.name;
  },

  tallyClicks: function(elementId) {
    for(var i in allImages) {
      if (allImages[i].name === elementId[i])
        allImages[i].tally += 1;
      this.totalClicks += 1;
      console.log(allImages[i].name + ' has' + allImages[i] + ' votes');
    }
  },
  displayResults: function() {
    var ulEl = document.createElement('ul');
    for(var i in Allimages) {
      var liElOne = document.createElement('li');
      var str = (allImages[i].name + ' has' + allImages[i].tally + ' votes');
      str = str.charAt[0].toUpperCase + str.slice[1];
      liElOne.textContent = (str);
      ulEl.appendChid(liElOne);
    }
    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total user clicks ' + imageRank.totalClicks[i];
    ulEl.appendChild(liElTwo);
    this.resultsEl.appendChild(ulEl);
  },

  showButton: function() {
    this.resultsButton.hidden = false;
    this.resultsButton.addEventListener('Click', function() {
      imageRank.resultsButton.hidden = false;
      imageRank.resultsButton.hidden = true;
      imageRank.displayResults();

      imageRank.resultsButton.addEventListener('Click', function() {
        imageRank.resetButton.hidden = false;
        location.reload();
      });
    });
  },
//
  onClick: function() {
    if (event.target.id === imageRank.leftObj.name || event.target.id === imageRank.rightObj.name || event.target.id === imageRank.midObj.name);
    imageRank.tallyClicks(event.target.id);
    imageRank.totalClicks += 1;

    if (imageRank.totalClicks % 15 === 0) {
      imageRank.imageEls.removeEventListener('Click', imageRank.onClick);
      imageRank.showButton();
    } else {
      alert('Click on the image!!!');
    }
  }
};
imageRank.imageEls.addEventListener('click', imageRank.onClick);
imageRank.displayImages();
