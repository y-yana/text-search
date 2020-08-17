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
        p.innerHTML ="<span id='title'>"+ data.bookData[i].title + "</span><br><br><span id='author'>著者：" + data.bookData[i].author + "</span><span id='type'>ジャンル：" + data.bookData[i].type + "</span><span id='period'>年代：" + data.bookData[i].period + "<br><br>" + data.bookData[i].summary;
        parent.appendChild(p);
        if (searchWord == "") {
          $("p").remove();
        }
      }
    }
  });
}

function textReset() {
  $("p").remove();
  $("#inputMessage").val("");
  document.getElementById("bookType").disabled = false;
  document.getElementById("bookPeriod").disabled = false;
  document.getElementById("inputMessage").disabled = false;
  document.getElementById("bookType").options[0].selected = true;
  document.getElementById("bookPeriod").options[0].selected = true;
}

function keydown_enter() {
  if (window.event.keyCode == 13) {
    $("p").remove();
    document.getElementById("searchBtn").click();
  }
}

function typeChange() {
  if (document.getElementById("bookType").selectedIndex != 0) {
    document.getElementById("bookPeriod").disabled = true;
    document.getElementById("inputMessage").disabled = true;
    document.getElementById("searchBtn").click();
  } else {
    document.getElementById("bookPeriod").disabled = false;
    document.getElementById("inputMessage").disabled = false;
    $("p").remove();
  }
}

function periodChange() {
  if (document.getElementById("bookPeriod").selectedIndex != 0) {
    document.getElementById("bookType").disabled = true;
    document.getElementById("inputMessage").disabled = true;
    document.getElementById("searchBtn").click();
  } else {
    document.getElementById("bookType").disabled = false;
    document.getElementById("inputMessage").disabled = false;
    $("p").remove();
  }
}

function textChange() {
  if (document.getElementById("inputMessage").value != "") {
    document.getElementById("bookType").disabled = true;
    document.getElementById("bookPeriod").disabled = true;
  } else {
    document.getElementById("bookType").disabled = false;
    document.getElementById("bookPeriod").disabled = false;
  }
}