$(document).ready(function() {
  $("#mobile-products").html(mobileProduct (shades[0]));

  $(#mobile-products").on(click, '.circle', function() {
    const index=$(this).data('index');
    console.log(index);
  });

  
//object

let redShades = {
  title: 'Red',
  subtitle: 'Rock-N-Stroll',
  img:"design-assets/product-red.jpg",
  price: 199.99
};

let greenShades = {
  title: 'Green',
  subtitle: 'Rock-N-Stroll',
  img: "design-assets/product-green.jpg",
  price: 199.99
};
let blueShades = {
  title: 'Blue',
  subtitle: 'Rock-N-Stroll',
  img:"design-assets/product-blue.jpg",
  price: 199.99
};
let blackShades = {
  title: 'Black',
  subtitle: 'Rock-N-Stroll',
  img:"url(design-assets/product-black.jpg)",
  price: 199.99
};

let shades= [redshade, greenshade, blueshade, blackshade,]


function mobileProducts(product) {
return `


const product-mobile = {
  subtitle: 'Rock-N-Stroll',
  color: 'Red',
  price: '$199.99',

}
