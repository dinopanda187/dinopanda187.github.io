$(function(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }

  $('.nextdiv').click(function(){
		$(this).parent().hide().next().show();//hide parent and show next
	});

	$('.backdiv').click(function(){
	   $(this).parent().hide().prev().show();//hide parent and show previous
	});

  $('.nextdiv2').click(function(){
    $(this).parent().hide();
    $('.div2').show();
  });

  $('.backdiv1').click(function(){
     $(this).parent().hide();
     $('.div1').show();
  });

  function login(){
    let username = $('#login').val();
    let password = $('#password').val();
    if((username == "gautruc" && password == "ttlngungoc") || (username == "khunglong" && password == "mdh0911")){
      $('.wrapper').hide();
      $('.envelope').show();
    }
    else{
      alert("Wrong password or username!!");
      $('#login').val('');
      $('#password').val('');
    }
  }

  $('.submitButton').click(function(){
    login();
  })

  document.getElementById('password').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    $('.submitButton').click();
  }
});
  document.getElementById('login').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    $('.submitButton').click();
  }
});



});

