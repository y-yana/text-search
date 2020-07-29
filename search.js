function textSearch() {
  var searchWord = document.getElementById("inputMessage").value; //テキストボックスの値を取得
  $.getJSON("data.json", function (data) {
    for (var i = 0; i < Object.keys(data.bookData).length; i++) {
      console.log(i);
    }
  });
}