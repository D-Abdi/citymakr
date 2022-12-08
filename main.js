console.log("Loaded");

$(document).ready(function () {
  $(this).on("mousedown", function (e) {
    if (e.target.classList && e.target.classList.length === 0) {
      var x = e.pageX;
      var y = e.pageY;

      $("<div></div>")
        .css({ top: y, left: x })
        .addClass("base")
        .attr("id", x.toString() + y.toString())
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
        value: 0,
        max: 360,
        svgMode: true,
        pathColor: "#eee",
        borderColor: "#e8e8f3",
        startAngle: "0",
        startAngle: "270",
        drag: function(event) {
          $("#" + x + y)
            .css('transform', '')
            .css('transform', `rotate(${event.value}deg)`);
        }
      });
    }
  });
  $(this).on("click", function (e) {
    $(this).closest(".base").remove();
  });
});
