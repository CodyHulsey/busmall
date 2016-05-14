var allProducts = [];
var productNames = ['bag', 'banana', 'boost', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'water_can', 'wine_glass'];

function Product(name, path) {

  // TODO: Build your constructor and necessary properties.
}

// TODO: Don't forget to build your objects. How can you do this without having to write 14 lines of `new Product(., ., .)`?

var productRank = {
  // TODO: All the properties of the object! What do you think you need? Try to write one piece at a time and make sure it does what you want before writing a little more.
  // NOTE: A-C-P reminder... Make very intentional and iterative changes to your code, and then A-C-P.

  getRandomIndex: function() {
    // TODO: Hmm... what's going to happen here?
  },

  displayImages: function() {
    // TODO: Hmm... what's going to happen here?
  },

  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
};

productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();

// var ctx = document.getElementById('myChart');
// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3]
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero:true
//         }
//       }]
//     }
//   }
// });
