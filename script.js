 let count = 0;
 $("button").click(function() {
     let box = $(".answer-1").val();
     let disney = $(".answer-2").val();
     $(".results").append("<li>" + "You're favorite character is " + box + " and you eat " + disney + " times a day" + "</li>");
     count = count + 1;
     $(".counter").text("This quiz has been taken " + count + " time");
 });