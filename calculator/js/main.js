$(function () {
  console.log("berhasil dijalankan");

  var sum = "";
  var len;
  var operators = ["+", "-", "*", "/"];
  var inputVal = document.getElementById("screen");

  $(".buttons .digit").on("click", function () {
    var num = $(this).attr("value");
    console.log(num);
    sum += num;
    $("#screen").html(sum);
    len = inputVal.innerHTML.split("");
    console.log(len);
  });

  $(".buttons .operator").on("click", function (e) {
    e.preventDefault();
    var ops = $(this).attr("value");
    sum += ops;
    $("#screen").html(sum);
    len = inputVal.innerHTML;
    if (/(?=(\D{2}))/g.test(sum)) {
      sum = len.substring(0, len.length - 1);
      $("#screen").html(sum);
    }
  });

  //klik sama dengan untuk menjumlahkan
  $("#equal").on("click", function () {
    var total = eval(sum);
    $("#screen").html(total % 1 != 0 ? total.fixed(2) : total);
    console.log(total);

    // $("textarea").val(eval($("textarea").val()));
  });

  $("#clear").on("click", function () {
    sum = "";
    arr = [];
    $("#screen").html(0);
  });
});
