$(document).ready(function () {
  $(function () {
    $(".calc-btn").on("click", function () {
      $("result").val($(".result").val() + $(this).html());
    });
  });
});
