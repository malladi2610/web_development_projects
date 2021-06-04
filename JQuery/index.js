$("h1 ").click(function(){
  $("h1").css("color","purple")    //Event listner manipulation
  $("h1").addClass("big-title")
})

$("button").click(function(){
  $("h1").css("color","purple")    //Event listner (Change using button )
  $("h1").addClass("big-title")
})

$("input").keypress(function(event) {   //Event Listner (Key press) - Reading the keypress
  console.log(event.key)
})

$(document).keypress(function(event) {  //Event Listner (Key press) - Changing the text
  $("h1").html(event.key)
  console.log(event.key)
})

$("h1").on("mouseover",function(){  //Event listner (using on)
  $("h1").css("color","purple")
  $("h1").addClass("big-title")
})

$("a").attr("href", "https://www.youtube.com/") //Applying the anchor tag
