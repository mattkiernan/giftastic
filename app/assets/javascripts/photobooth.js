$(document).ready(function(){
  var sayCheesey = new SayCheese('#gifbooth', { snapshots: true });
  gif_0 = []
  gif_1 = []
  gif_2 = []
  var array = [gif_0, gif_1, gif_2]
  var gif_count = 0
  var photo_count = 0
  var gif_0_index = 0
  var gif_1_index = 0
  var gif_2_index = 0

  var incrementGifCounter = function(){
    if(gif_count === 2){
      gif_count = 0
    }else{
      gif_count++;
    }
  }

var takePhoto = function(){
  if(photo_count < 5){
    sayCheesey.takeSnapshot();
    photo_count++;
    takePhotoDelay();
  }else{
    photo_count = 0;
    incrementGifCounter();
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

gif_0_loop = function(){
  if(gif_0_index < 5){
    $("#booth_0").find("canvas").remove();
    $("#booth_0").append(gif_0[gif_0_index]);
    gif_0_index++;
    delayGif0();
  }else{
    gif_0_index = 0;
  }
}

gif_1_loop = function(){
  if(gif_1_index < 5){
    $("#booth_1").find("canvas").remove();
    $("#booth_1").append(gif_1[gif_1_index]);
    gif_1_index++;
    delayGif1();
  }else{
    gif_1_index = 0;
  }
}

gif_2_loop = function(){
  if(gif_2_index < 5){
    $("#booth_2").find("canvas").remove();
    $("#booth_2").append(gif_2[gif_2_index]);
    gif_2_index++;
    delayGif2();
  }else{
    gif_2_index = 0;
  }
}

  sayCheesey.on('snapshot', function(snapshot) {
    array[gif_count].push(snapshot);
  });


  $("#take-snapshot").click(function(){
    array[gif_count].length = 0
    takePhotoDelay();
  });

  sayCheesey.start();

  setInterval(gif_0_loop, 2000);
  setInterval(gif_1_loop, 2000);
  setInterval(gif_2_loop, 2000);

});
