function textSearch() {
  var searchWord = document.getElementById("inputMessage").value;
  $.getJSON("data.json", function (data) {
    for (var i = 0; i < Object.keys(data.bookData).length; i++) {
      if (searchWord == data.bookData[i].title || searchWord == data.bookData[i].author || searchWord == data.bookData[i].type || searchWord == data.bookData[i].period || data.bookData[i].summary.match(searchWord)) {
        console.log(data.bookData[i]);
      }
    }
  });
}