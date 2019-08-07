// Make the project great again with jQuery ..

$(".tab-panels ul li.active").css({
  background: "rgb(255, 243, 78)",
  color: "rgb(169, 0, 0)",
  "font-weight": "600"
});
$(function() {
  $(".tab-panels .tabs li").on("click", function() {
    // get the element id to show  rel attribute >> tab1, tab2 ..
    let panelToShow = $(this).attr("rel");
    $(".tab-panels .panel.active").slideUp(500, function() {
      // remove the 'active class from current(active) panel'
      $(this).removeClass("active");
      // Show the selected panel and add class to it
      $("#" + panelToShow).slideDown(300, function() {
        $(this).addClass("active");
      });
    });

    // hide the current(active) panel
    if (panelToShow === "tab1") { //if we click the galatasaray tab 
      $("#page-banner").css("background", "rgb(255, 243, 78)");//change the banner styles
      $("#page-banner h1").css("color", " rgb(169, 0, 0)");
      $("#page-banner p").css("color", "rgb(169, 0, 0)");
      $("#page-banner h1").text("Squad of Galatasaray");
      $('#search-player').attr('placeholder','Search player from Galatasaray')
      for (let i = 1; i < 5; i++) {
        if (i == 1) { //it means that  we want the make active galatas. tab
          $(".tab-panels ul li#tab-" + i).addClass("active");
          $(".tab-panels ul li.active").css({//change the tab styles which is the active tab
            background: "rgb(255, 243, 78)",
            color: "rgb(169, 0, 0)",
            "font-weight": "600"
          });
        } else {
          $(".tab-panels ul li#tab-" + i).removeClass("active"); //it ll remove the active class on other tabs 
          $(".tab-panels ul li#tab-" + i).css({ 
            background: "#eeeeee",
            color: "#343a40"
          });
        }
      }
    } else if (panelToShow === "tab2") { //if we click the fener tab 
      $("#page-banner").css("background", " rgb(3, 0, 153)");//change the banner styles
      $("#page-banner h1").css("color", " rgb(249, 243, 0)");
      $("#page-banner p").css("color", " rgb(249, 243, 0)");
      $("#page-banner h1").text("Squad of Fenerbahce");

      $('#search-player').attr('placeholder','Search player from Fenerbahce')


      for (let i = 1; i < 5; i++) {
        if (i == 2) { //it means that  we want the make active fenerbahce tab
          $(".tab-panels ul li#tab-" + i).addClass("active");
          $(".tab-panels ul li.active").css({ //here we want to change tabs styles which is the active tab
            background: "rgb(3, 0, 153)",
            color: "rgb(249, 243, 0)",
            "font-weight": "600"
          });
        } else {
          $(".tab-panels ul li#tab-" + i).removeClass("active");//it ll remove the active class on other tabs 
          $(".tab-panels ul li#tab-" + i).css({ 
            background: "#eeeeee",
            color: "#343a40"
          });
        }
      }
    } else if (panelToShow === "tab3") { //if we click the besiktas tab 
      $("#page-banner").css("background", "rgb(75, 75, 75)");//change the banner styles
      $("#page-banner h1").css("color", " white");
      $("#page-banner p").css("color", " white");
      $("#page-banner h1").text("Squad of Besiktas");

      $('#search-player').attr('placeholder','Search player from Besiktas')


      for (let i = 1; i < 5; i++) {
        if (i == 3) {  //it means that  we want the make active besiktas tab
          $(".tab-panels ul li#tab-" + i).addClass("active");
          $(".tab-panels ul li.active").css({ //here we want to change tabs styles which is the active tab
            background: "rgb(75, 75, 75)",
            color: "white",
            "font-weight": "600"
          });
        } else {
          $(".tab-panels ul li#tab-" + i).removeClass("active");//it ll remove the active class on other tabs 
          $(".tab-panels ul li#tab-" + i).css({
            background: "#eeeeee",
            color: "#343a40"
          });
        }
      }
    } else if (panelToShow === "tab4") { //if we click the trabzons tab 
      $("#page-banner").css("background", "rgb(161, 0, 81)"); //change the banner styles
      $("#page-banner h1").css("color", "rgb(100, 147, 255)");
      $("#page-banner p").css("color", " rgb(100, 147, 255)");
      $("#page-banner h1").text("Squad of Trabzonspor");

      $('#search-player').attr('placeholder','Search player from Trabzonspor')


      for (let i = 1; i < 5; i++) {
        if (i == 4) {  //it means that  we want the make active trabzonspor tab
          $(".tab-panels ul li#tab-" + i).addClass("active");
          $(".tab-panels ul li.active").css({ //here we want to change tabs styles which is the active tab
            background: "rgb(161, 0, 81)",
            color: "rgb(100, 147, 255)",
            "font-weight": "600"
          });
        } else {
          $(".tab-panels ul li#tab-" + i).removeClass("active");//it ll remove the active class on other tabs 
          $(".tab-panels ul li#tab-" + i).css({
            background: "#eeeeee",
            color: "#343a40"
          });
        }
      }
    }
  });
});

var number = 2; //counter about players
//add to table
$("form").submit(function(e) {
  if ($("#name").val() !== "") {
    let name = $("#name").val();
    let pos = $("#pos").val();
    let age = $("#age").val();
    let val = $("#val").val();

    let team = $("#team").val();

    let newRow = $( //make new row 
      '<tr><td scope="row">' +
        number +
        '</td><td id="players"class="name">' +
        name +
        '</td><td class="position">' +
        pos +
        '</td><td class="age">' +
        age +
        '</td><td class="value">' +
        val +
        '</td><td class="delete">delete</td></tr>'
    );

    // rows have been added according to team names
    if (team.toLowerCase() === "galatasaray") { 
      $("#topic-list-gs tbody").append(newRow);
    } else if (team.toLowerCase() === "fenerbahce") {
      $("#topic-list-fb tbody").append(newRow);
    } else if (team.toLowerCase() === "besiktas") {
      $("#topic-list-bjk tbody").append(newRow);
    } else if (team.toLowerCase() === "trabzonspor") {
      $("#topic-list-ts tbody").append(newRow);
    }

    $("#team").val("");
    $("#name").val("");
    $("#pos").val("");
    $("#age").val("");
    $("#val").val("");
  }
  number++;
  return false;
});

//Delete row
$(document).ready(function() {
  $(".table").on("click", ".delete", function() {
    $(this)
      .closest("tr")
      .remove();
  });
});

//hide table
$(document).ready(function() {
  $("#hide").on("click", function() {
    if ($(this).is(":checked")) {
      $("tbody").hide();
    } else {
      $("tbody").show();
    }
  });
});

//search

$("#search-player").on("keyup", function() {
  var value = $(this).val();

  $(".table tr").each(function(index) {
    if (index !== 0) {
      $row = $(this);

      var id = $row
        .find("td.name")
        .text()
        .toLowerCase();

      if (id.indexOf(value) !== 0) {
        $row.hide();
        $("thead th").show();
      } else {
        $row.show();
        $("thead th").show();
      }
    }
  });
});

$('tbody').sortable()
