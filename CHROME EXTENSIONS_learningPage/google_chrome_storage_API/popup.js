$(function() {
  chrome.storage.sync.get("username", function(greeting) {
    if (greeting.username) {
      $("#name").html(greeting.username);
    }
  });

  $("#alias").keyup(function() {
    $("#name").html($("#alias").val());
  });
  $("submit").click(function() {
    var username = $("#alias").val();

    /**how to store data in chrome**/
    chrome.storage.sync.set({"username":username}, function () {
      close();
    });
  });
});