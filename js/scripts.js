$(document).ready(function(event) {

  $("form#quizquestions").submit(function(event) {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    $("#greeting").html(firstName + " " + lastName);

    var points = parseInt($("input:radio[name=question1]:checked").val()) + parseInt($("input:radio[name=question2]:checked").val()) + parseInt($("input:radio[name=question3]:checked").val()) + parseInt($("input:radio[name=question4]:checked").val()) + parseInt($("input:radio[name=question5]:checked").val()) +
    parseInt($("input:radio[name=question6]:checked").val()) +
    parseInt($("input:radio[name=question7]:checked").val()) +
    parseInt($("input:radio[name=question8]:checked").val()) +
    parseInt($("input:radio[name=question9]:checked").val()) +
    parseInt($("input:radio[name=question10]:checked").val())

    if (points >= 41) {
      $('.result').html('<h2 class="center">Ruby on Rails!</h2><img class="center" src="img/ruby.png"/>');
    } else if (points >= 30 ) {
      $('.result').html('<h2 class="center">React and C#!</h2><img class="center" src="img/reactC.png"/>');
    } else if (points >= 20) {
      $('.result').html('<h2 class="center">Design/CSS!</h2><img class="center" src="img/design.png"/>');
    } else {
      $('.result').html('<h2 class="center">One or more questions left blank.</h2><img class="center" src="img/error.png"/>');
    }

    $("#resultBox").show();
    event.preventDefault();
    });
  });
