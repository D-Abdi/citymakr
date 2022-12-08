console.log("Loaded");

$(document).ready(function () {
  $(this).on("mousedown", function (e) {
    if (e.target.classList && e.target.classList.length === 0) {
      var x = e.pageX;
      var y = e.pageY;

      $("<div>")
        .css({ top: y, left: x })
        .addClass("base")
        .append(
          $("<div></div>")
            .addClass("sub1")
            .animate({ opacity: "1", top: "-150%", left: "-175%" }, "fast"),
        )
        .append(
          $("<div></div>")
            .addClass("sub2")
            .animate({ opacity: "1", top: "-200%" }, "fast"),
        )
        .append(
          $("<div></div>")
            .addClass("sub3")
            .animate({ opacity: "1", top: "-150%", left: "175%" }, "fast"),
        )
        .append($("<div></div>").addClass("slider"))
        .appendTo("body");

      $(".slider").roundSlider({
        sliderType: "min-range",
        value: 80,
        svgMode: true,
      });
    }
  });
  $(this).on("mouseup", ".base", function (e) {
    console.log(e, "MOUSE UP EEE");
    $(this).closest(".base").remove();
  });
});
