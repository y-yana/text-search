function textSearch() {
  var searchWord = document.getElementById("inputMessage").value; //テキストボックスの値を取得
  $.getJSON("data.json", function (data) {
    console.log(data);
  });
}