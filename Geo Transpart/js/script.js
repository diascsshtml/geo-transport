const map = new mapgl.Map('container', {
    key: 'Your API access key',
    center: [55.31878, 25.23584],
    zoom: 13,

});
const marker = new mapgl.Marker(map, {
    coordinates: [43.237163, 76.945627],
});
function heart_it (){
  "use-strict";
  document.getElementById("hearticon").style.backgroundImage = "url('https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Like_2-48.png')";
}

function dontheart_it (){
  "use-strict";
  document.getElementById("hearticon").style.backgroundImage = "url('https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Like-48.png')";
}
function follow (){
  "use-strict";
  document.getElementById("usericon").style.backgroundImage = "url('https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Username_2-32.png')";
}

function dontfollow (){
  "use-strict";
  document.getElementById("usericon").style.backgroundImage = "url('https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Username-48.png')";
}