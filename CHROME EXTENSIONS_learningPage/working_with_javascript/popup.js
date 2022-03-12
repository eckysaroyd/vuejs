$(function() {
  $("#alias").keyup(function() {
    $("#name").html($("#alias").val());
  });
});
