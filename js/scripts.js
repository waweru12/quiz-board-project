function add(question1, question2, question3, question4, question5) {
  return question1 + question2 + question3 + question4 + question5;
};



$(document).ready(function () {
  $("#quiz").submit(function (event) {
    event.preventDefault();
    var question1 = parseInt($('input:radio[name=answer1]:checked').val());
    var question2 = parseInt($('input:radio[name=answer2]:checked').val());
    var question3 = parseInt($('input:radio[name=answer3]:checked').val());
    var question4 = parseInt($('input:radio[name=answer4]:checked').val());
    var question5 = parseInt($('input:radio[name=answer5]:checked').val());
    var result = add(question1, question2, question3, question4, question5);

    $("#result").text("YOUR SCORE: " + result + " POINTS OUT OF 50");

    if (result >= 40) {
      $("#comment").text("EXCELLENT WORK! KEEP IT UP.")
    } else if (result >= 25 && result < 40) {
      $("#comment").text("FAIRLY DONE! GOOD WORK.")
    } else if (result < 25) {
      $("#comment").text("POOR WORK! RETAKE THE TEST.")
    } else {
      $("#comment").text("ANSWER EVERY QUESTION PLEASE!")
    }
  });
});
