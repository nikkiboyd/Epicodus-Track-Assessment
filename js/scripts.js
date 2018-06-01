$(document).ready(function(event) {
  $("form#quizquestions").submit(function(event) {
    var points = parseInt($("input:radio[name=question1]:checked").val()) + parseInt($("input:radio[name=question2]:checked").val()) + parseInt($("input:radio[name=question3]:checked").val()) + parseInt($("input:radio[name=question4]:checked").val()) + parseInt($("input:radio[name=question5]:checked").val())

    if (points >= 41) {
      $('.result').html('<h2 class="center">React and C#!</h2><img class="center" src="img/reactC.png"/>');
    } else if (points >= 21 ) {
      $('.result').html('<h2 class="center">Ruby on Rails!</h2><img class="center" src="img/ruby.png"/>');
    } else if (points >= 1) {
      $('.result').html('<h2 class="center">Design/CSS!</h2><img class="center" src="img/design.png"/>');
    } else {
      $('.result').html('<h2 class="center">One or more questions left blank.</h2><img class="center" src="img/error.png"/>');
    }
    event.preventDefault();
    });
  });
