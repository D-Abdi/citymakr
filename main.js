console.log("Loaded");

let elementCount = 0;
let selected = null;

$(document).ready(function () {
  $(this).on("mousedown", function (e) {
    if (e.target.classList && e.target.classList.length === 0) {
      const x = e.pageX;
      const y = e.pageY;
      const idString = `${x.toString() + y.toString()}`

      $("<div></div>")
        .css({ top: y, left: x })
        .addClass("base")
        .attr("id", `${idString}`)
        .append(
          $("<div></div>")
            .addClass("sub1")
            .animate({ opacity: "1", top: "200%", left: "-200%" }, "fast"),
        )
        .append(
          $("<div></div>")
            .addClass("sub2")
            .animate({ opacity: "1", top: "250%" }, "fast"),
        )
        .append(
          $("<div></div>")
            .addClass("sub3")
            .animate({ opacity: "1", top: "200%", left: "200%" }, "fast"),
        )
        .append($("<div></div>").addClass("slider").attr("id", `slider-${idString}`))
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
          $(`#${selected}`)
            .css('transform', '')
            .css('transform', `rotate(${event.value}deg)`);
        }
        });
    } else {
      const idPath = e.originalEvent.path;
      const foundId = idPath.find(x => x.id && !x.id.startsWith("slider")).id;
      if (foundId) {
        selected = foundId;
        $(`#slider-${selected}`).roundSlider({
          max: 360,
        })
      }
    }
  });
  $(`#${selected}`).on("mousedown", function (e) {
    $(`#${selected}`).closest(".base").remove();
  });
});
