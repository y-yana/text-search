function textSearch() {
  var searchWord = document.getElementById("inputMessage").value;
  $.getJSON("data.json", function (data) {
    for (var i = 0; i < Object.keys(data.bookData).length; i++) {
      if (searchWord == data.bookData[i].title || searchWord == data.bookData[i].author || searchWord == data.bookData[i].type || searchWord == data.bookData[i].period || data.bookData[i].summary.match(searchWord)) {
        var parent = document.getElementById("result");
        var p = document.createElement("p");
        p.innerHTML = data.bookData[i].title + "&nbsp&nbsp&nbsp&nbsp&nbsp著者：" + data.bookData[i].author + "&nbsp&nbsp&nbsp&nbsp&nbspジャンル：" + data.bookData[i].type + "&nbsp&nbsp&nbsp&nbsp&nbsp年代：" + data.bookData[i].period + "<br>" + data.bookData[i].summary;
        parent.appendChild(p);
      }
    }
  });
}

function textReset() {
  $("p").remove();
  $("#inputMessage").val("");
}

function keydown_enter() {
  if (window.event.keyCode == 13) {
    $("p").remove();
    document.getElementById("searchBtn").click();
  }
}