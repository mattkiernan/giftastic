$(document).ready(function(){

  NUMBER_OF_PHOTOS = 6
  PHOTO_DELAY = 500
  NUMBER_OF_GIFS = 2

  var sayCheesey = new SayCheese('#gifbooth', { snapshots: true });
  gifObject = {"canvases_0":[], "canvases_1":[], "canvases_2":[]};
  objectCounter = ["canvases_0", "canvases_1", "canvases_2"]
  object_count = 0
  var photo_count = 0

  var incrementObjectCounter = function(){
    if(object_count === NUMBER_OF_GIFS){
      object_count = 0
    }else{
      object_count++;
    }
  }

var takePhoto = function(){
  if(photo_count < NUMBER_OF_PHOTOS){
    sayCheesey.takeSnapshot();
    photo_count++;
    takePhotoDelay();
  }else{
    photo_count = 0;
    stringifyObject(gifObject);
  }
}

var takePhotoDelay = function(){
  setTimeout(takePhoto, PHOTO_DELAY);
}

var stringifyObject = function(currentObject){
  data = JSON.stringify(currentObject);
  updateImages(data);
}

sayCheesey.on('snapshot', function(snapshot) {
  var dataURL = snapshot.toDataURL();
  gifObject[objectCounter[object_count]].push(dataURL);
});


$("#take-snapshot").click(function(){
  gifObject[objectCounter[object_count]].length = 0;
  takePhotoDelay();
});

var updateImages = function(data){
  id = object_count + 1
  console.log(data);
  $.ajax({
    type: "PATCH",
    url: "/images/"+id,
    async: true,
    data: {image:{url: data}},
    success: incrementObjectCounter()
  });
}

sayCheesey.start();

});
