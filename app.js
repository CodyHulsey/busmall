var allImages = [];
var imageNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'water_can', 'wine_glass'];

var data = {
  labels: imageNames,
  datasets: [
    {
      label: 'Number of Image Clicks',
      backgroundColor: 'rgba(0, 0, 255, 0.3)',
      data: []
    }
  ]
};

function Product(name, path) {
  this.name = name;
  this.path = path;
  this.tally = 0;
  allImages.push(this);
  data.datasets[0].data.push(this.tally);
};

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

  leftEl: document.getElementById('img1'),
  midEl: document.getElementById('img2'),
  rightEl: document.getElementById('img3'),
  imageEls: document.getElementById('images'),
  resultsButton: document.getElementById('resultsButton'),
  resetButton: document.getElementById('resetButton'),
  resultsEl: document.getElementById('results'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * imageNames.length);
  },

  displayImages: function() {
    imageRank.leftObj = allImages[imageRank.getRandomIndex()];
    imageRank.midObj = allImages[imageRank.getRandomIndex()];
    imageRank.rightObj = allImages[imageRank.getRandomIndex()];
    if (imageRank.leftObj === imageRank.midObj || imageRank.leftObj === imageRank.rightObj || imageRank.rightObj === imageRank.midObj) {
      imageRank.displayImages();
    }
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
      if (elementId === allImages[i].name) {
        allImages[i].tally += 1;
        data.datasets[0].data[i] = allImages[i].tally;
        this.totalClicks += 1;
        console.log(allImages[i].name + ' has ' + allImages[i].tally + ' votes');
      }
    }
  },
  displayResults: function() {

    var ctx = document.getElementById("myChart").getContext("2d");;

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
    });

    var ulEl = document.createElement('ul');
    for(var i in allImages) {
      var liElOne = document.createElement('li');
      var str = allImages[i].name + ' has ' + allImages[i].tally + ' votes';
      str = str.charAt(0).toUpperCase() + str.slice(1);
      liElOne.textContent = (str);
      ulEl.appendChild(liElOne);
    }
    var liElTwo = document.createElement('li');
    liElTwo.textContent = 'Total user clicks ' + imageRank.totalClicks[i];
    ulEl.appendChild(liElTwo);
    this.resultsEl.appendChild(ulEl);
  },

  showButton: function() {
    this.resultsButton.hidden = false;
    this.resultsButton.addEventListener('click', function() {
      imageRank.resetButton.hidden = false;
      imageRank.resultsButton.hidden = true;
      imageRank.displayResults();

      imageRank.resetButton.addEventListener('click', function() {
        imageRank.resetButton.hidden = true;
        location.reload();
      })
    });
  },
//
  onClick: function() {
    if (event.target.id === imageRank.leftObj.name || event.target.id === imageRank.midObj.name || event.target.id === imageRank.rightObj.name) {
      imageRank.tallyClicks(event.target.id);
      imageRank.totalClicks += 1;

      if (imageRank.totalClicks % 15 === 0) {
        imageRank.imageEls.removeEventListener('click', imageRank.onClick);
        imageRank.showButton();
      }
      imageRank.displayImages();
    } else {
      alert('Click on the image!!!');
    }
  }
};
imageRank.imageEls.addEventListener('click', imageRank.onClick);
imageRank.displayImages();
