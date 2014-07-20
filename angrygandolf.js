$("#submitInput").on('click', function() {
      var name = $("#name").val();
      var message = angryGandalf(name);
      $("#gandalfMessage").html(message);
    });