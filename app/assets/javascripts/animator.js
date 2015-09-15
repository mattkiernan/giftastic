$(document).ready(function(){

  gif_0_index = 0
  gif_1_index = 0
  gif_2_index = 0

  var parsePayload = function(payload_value){
    urls = payload_value["url"];
    parsed_urls = $.parseJSON(urls)
  gif_0 = parsed_urls["canvases_0"]
  gif_1 = parsed_urls["canvases_1"]
  gif_2 = parsed_urls["canvases_2"]
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

var launchIntervals = function(){
  setInterval(gif_0_loop, 2000);
  setInterval(gif_1_loop, 2000);
  setInterval(gif_2_loop, 2000);
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
  if(gif_0_index < 5){
    $("img#image_0").find("canvas").remove();
    $("img#image_0").attr("src", (gif_0[gif_0_index]));
    gif_0_index++;
    delayGif0();
  }else{
    gif_0_index = 0;
  }
}

gif_1_loop = function(){
  if(gif_1_index < 5){
    $("img#image_1").find("canvas").remove();
    $("img#image_1").attr("src", (gif_1[gif_1_index]));
    gif_1_index++;
    delayGif1();
  }else{
    gif_1_index = 0;
  }
}

gif_2_loop = function(){
  if(gif_2_index < 5){
    $("img#image_2").find("canvas").remove();
    $("img#image_2").attr("src", (gif_2[gif_2_index]));
    gif_2_index++;
    delayGif2();
  }else{
    gif_2_index = 0;
  }
}

setInterval(getImages(), 10000);

});
