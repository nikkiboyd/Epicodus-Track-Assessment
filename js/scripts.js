$(document).ready(function(event) {
  $("form#quizquestions").submit(function(event) {
    var points = parseInt($("input:radio[name=question1]:checked").val()) + parseInt($("input:radio[name=question2]:checked").val()) + parseInt($("input:radio[name=question3]:checked").val()) + parseInt($("input:radio[name=question4]:checked").val()) + parseInt($("input:radio[name=question5]:checked").val())

    if (points >= 25) {
      $('.result').html('<h2 class="center">Margot Tenenbaum</h2><img class="center" src="img/margot.jpg"/>');
    } else if (points >= 20 ) {
      $('.result').html('<h2 class="center">Klaus Daimler</h2><img class="center" src="img/klaus.jpeg"/>');
    } else if (points >= 15) {
      $('.result').html('<h2 class="center">Max Fischer</h2><img class="center" src="img/max.jpg"/>');
    } else if (points >= 10) {
      $('.result').html('<h2 class="center">Steve Zissou</h2><img class="center" src="img/steve.jpg"/>');
    }  else if (points >= 5) {
      $('.result').html('<h2 class="center">Dignan</h2><img class="center" src="img/dignan.jpg"/>');
    } else if (points === 5) {
      $('.result').html('<h2 class="center">Mr. Fox</h2><img class="center" src="img/fox.jpg"/>');
    } else {
      $('.result').html('<h2 class="center">Error: One or more questions left blank.</h2>');;
    }
