function textSearch() {
  $("p").remove();
  var searchWord = document.getElementById("inputMessage").value;
  type = document.getElementById("bookType");
  if (bookType.selectedIndex != 0) {
    searchWord = type.value;
  }
  type = document.getElementById("bookPeriod");
  if (bookPeriod.selectedIndex != 0) {
    searchWord = type.value;
  }
  $.getJSON("data.json", function (data) {
    for (var i = 0; i < Object.keys(data.bookData).length; i++) {
      if (searchWord == data.bookData[i].title || searchWord == data.bookData[i].author || searchWord == data.bookData[i].type || searchWord == data.bookData[i].period || data.bookData[i].summary.match(searchWord)) {
        var parent = document.getElementById("result");
        var p = document.createElement("p");
        p.innerHTML = data.bookData[i].title + "&emsp;&emsp;著者：" + data.bookData[i].author + "&emsp;&emsp;ジャンル：" + data.bookData[i].type + "&emsp;&emsp;年代：" + data.bookData[i].period + "<br>" + data.bookData[i].summary;
        parent.appendChild(p);
      }
    }
  });
}

function textReset() {
  $("p").remove();
  $("#inputMessage").val("");
  document.getElementById("bookType").options[0].selected = true;
  document.getElementById("bookPeriod").options[0].selected = true;
}

function keydown_enter() {
  if (window.event.keyCode == 13) {
    $("p").remove();
    document.getElementById("searchBtn").click();
  }
}