$(document).ready(function(){
  var sayCheesey = new SayCheese('#gifbooth', { snapshots: true });

  sayCheesey.on('start', function() {
  });

  sayCheesey.on('error', function(error) {
    // do something on error
  });

  sayCheesey.on('snapshot', function(snapshot) {
    $("#album").append(snapshot);
  });

  $("#take-snapshot").click(function(){
    sayCheesey.takeSnapshot();
    console.log(sayCheesey.snapshots);
  });

  sayCheesey.start();
});
