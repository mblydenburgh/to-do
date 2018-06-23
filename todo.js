// Check done items by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("complete");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// Add new todo with text input + enter key
$("input[type='text']").keypress(function(event){
  // Only execute on enter key
  if(event.which === 13){
    // Save value of text input
    var inputText = $(this).val();
    // Create a new li and add to ul
    $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + inputText + "</li>");
    $(this).val("");
  }
});

$("#plus").click(function(){
  $("input[type='text']").fadeToggle();
});
