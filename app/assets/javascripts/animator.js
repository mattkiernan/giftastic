$(document).ready(function(){

  NUMBER_OF_PHOTOS = 8

  gif_0_index = 0
  gif_1_index = 0
  gif_2_index = 0

  var updateGif0 = function(gif_array){
    $("div#booth_0").children().remove("img");
    $.each(gif_array, function(index, value){
      image = "<img src='"+value+"'>"
      $("div#booth_0").append(image);
    });
  }

  var updateGif1 = function(gif_array){
    $("div#booth_1").children().remove();
    $.each(gif_array, function(index, value){
      var image = "<img src='"+value+"'>"
      $("div#booth_1").append(image)
    });
  }

  var updateGif2 = function(gif_array){
    $("div#booth_2").children().remove();
    $.each(gif_array, function(index, value){
      var image = "<img src='"+value+"'>"
      $("div#booth_2").append(image)
    });
  }

  var parsePayload = function(payload_value){
    urls = payload_value["url"];
    parsed_urls = $.parseJSON(urls)
    var gif_0 = parsed_urls["canvases_0"]
    var gif_1 = parsed_urls["canvases_1"]
    var gif_2 = parsed_urls["canvases_2"]
    updateGif0(gif_0);
    updateGif1(gif_1);
    updateGif2(gif_2);
  }

var delayGif0 = function(){
  setTimeout(gif_0_loop, 800);
}

var delayGif1 = function(){
  setTimeout(gif_1_loop, 800);
}

var delayGif2 = function(){
  setTimeout(gif_2_loop, 800);
}

var launchIntervals = function(){
  // setInterval(gif_0_loop, 2000);
  // setInterval(gif_1_loop, 2000);
  // setInterval(gif_2_loop, 2000);
}

iteratePayload = function(response){
  payload = response
    $.each(payload, function(index, value){
      parsePayload(value);
    });
}

getImages = function(){
  $.ajax('/images',{
    success: function(response){
      iteratePayload(response);
      launchIntervals();
    }
  });
}

gif_0_loop = function(){
  if(gif_0_index < NUMBER_OF_PHOTOS){
    var node = $("div#booth_0").children()[gif_0_index]
    $(node).show();
    gif_0_index++;
     delayGif0();
    $(node).hide();

  }else{
    gif_0_index = 0;
  }
}

gif_1_loop = function(){
  if(gif_1_index < NUMBER_OF_PHOTOS){
    var node = $("div#booth_1").children()[gif_1_index]
    $(node).toggle();
    gif_1_index++;
    delayGif1();
  }else{
    gif_1_index = 0;
  }
}

gif_2_loop = function(){
  if(gif_2_index < NUMBER_OF_PHOTOS){
    var node = $("div#booth_2").children()[gif_2_index]
    $(node).toggle();
    gif_2_index++;
    delayGif2();
  }else{
    gif_2_index = 0;
  }
}

// setInterval(getImages, 10000);

});
