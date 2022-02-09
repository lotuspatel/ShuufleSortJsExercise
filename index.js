$(document).ready(function () {
  $("#btn-shuffle").click(function () {
    var containerDivs = $(".card-container");
    var innerDivs = containerDivs.children();
    while (innerDivs.length) {
      containerDivs.append(innerDivs.splice(Math.floor(Math.random() * innerDivs.length), 3)[0]);
    }
  });

  $("#btn-sort").click(function () {
    $('div.card-item').sort(function (a, b) {
      var contentA = parseInt($(a).data('id'));
      var contentB = parseInt($(b).data('id'));
      return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
    }).appendTo($('.card-container'));
  });
});