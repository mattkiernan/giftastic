$(document).ready(function(){
  var sayCheesey = new SayCheese('#gifbooth', { snapshots: true });
  gifObject = {"canvases_0":[], "canvases_1":[], "canvases_2":[]};
  objectCounter = ["canvases_0", "canvases_1", "canvases_2"]
  var object_count = 0
  var photo_count = 0
  var gif_0_index = 0
  var gif_1_index = 0
  var gif_2_index = 0

  var incrementObjectCounter = function(){
    if(object_count === 2){
      object_count = 0
    }else{
      object_count++;
    }
  }

var takePhoto = function(){
  if(photo_count < 5){
    sayCheesey.takeSnapshot();
    photo_count++;
    takePhotoDelay();
  }else{
    photo_count = 0;
    incrementObjectCounter();
    stringifyObject(gifObject);
  }
}

var takePhotoDelay = function(){
  setTimeout(takePhoto, 400);
}

var delayGif0 = function(){
  setTimeout(gif_0_loop, 400);
}

var delayGif1 = function(){
  setTimeout(gif_1_loop, 400);
}

var delayGif2 = function(){
  setTimeout(gif_2_loop, 400);
}

var stringifyObject = function(currentObject){
  data = JSON.stringify(currentObject);
  console.log(data);
}

// stringy = function(){
//     var canvas_0 = $("#booth_0").find("canvas");
//     console.log(canvas_0);
//     // data = JSON.stringify(canvas_0);
//   }

// gif_0_loop = function(){
//   if(gif_0_index < 5){
//     $("#booth_0").find("canvas").remove();
//     $("#booth_0").append(gif_0[gif_0_index]);
//     gif_0_index++;
//     delayGif0();
//   }else{
//     gif_0_index = 0;
//   }
// }
//
// gif_1_loop = function(){
//   if(gif_1_index < 5){
//     $("#booth_1").find("canvas").remove();
//     $("#booth_1").append(gif_1[gif_1_index]);
//     gif_1_index++;
//     delayGif1();
//   }else{
//     gif_1_index = 0;
//   }
// }
//
// gif_2_loop = function(){
//   if(gif_2_index < 5){
//     $("#booth_2").find("canvas").remove();
//     $("#booth_2").append(gif_2[gif_2_index]);
//     gif_2_index++;
//     delayGif2();
//   }else{
//     gif_2_index = 0;
//   }
// }

  sayCheesey.on('snapshot', function(snapshot) {
    var dataURL = snapshot.toDataURL();
    gifObject[objectCounter[object_count]].push(dataURL);
  });


  $("#take-snapshot").click(function(){
    gifObject[objectCounter[object_count]].length = 0;
    takePhotoDelay();
  });

  sayCheesey.start();

  // setInterval(gif_0_loop, 2000);
  // setInterval(gif_1_loop, 2000);
  // setInterval(gif_2_loop, 2000);

});
