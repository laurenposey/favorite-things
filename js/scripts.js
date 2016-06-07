// backend

var favoriteThings = [];
var someThings = [];
function evalQuestion(arrayValue) {
  favoriteThings.push(arrayValue);

}

var returnResult = function () {
  someThings.push(favoriteThings[1]);
  someThings.push(favoriteThings[0]);
  someThings.push(favoriteThings[2]);

  var ulContents = "";

  ulContents += "<li>" + someThings[0] + "</li>";
  ulContents += "<li>" + someThings[1] + "</li>";
  ulContents += "<li>" + someThings[2] + "</li>";

  return ulContents;
}

// frontend

$(document).ready(function(){
  $("form#favorites").submit(function(event){
    event.preventDefault();


    evalQuestion($("#animal").val());
    evalQuestion($("#color").val());
    evalQuestion($("#movie").val());
    evalQuestion($("#book").val());
    evalQuestion($("#song").val());

    $("#ulofMyFavoriteThings").append(returnResult());
    $("#ulofMyFavoriteThings").show();
  });
});
