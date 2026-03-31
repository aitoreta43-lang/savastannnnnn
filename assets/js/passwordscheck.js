$(document).ready(function()

{	

	$('#password').keyup(function()

	{

		$('#result').html(checkStrength($('#password').val()))

	})	

		

	function checkStrength(password)

	{

		var strength = 0

		

		if (password.length < 7) { 

			$('#result').removeClass()

			$('#result').addClass('short')

			return 'Too short' 

		}

		

		if (password.length > 7) strength += 1

		

		//If password contains both lower and uppercase characters, increase strength value.

		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1

		

		//If it has numbers and characters, increase strength value.

		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 

		

		//If it has one special character, increase strength value.

		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1

		

		//if it has two special characters, increase strength value.

		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1

		

		

		//Calculated strength value, we can return messages

			

		

		//If value is less than 2

		

		if (strength < 2 )

		{

			

			$('#result').removeClass()

			$('#result').addClass('weak')

			return 'Weak'			

		}





		else if (strength == 4 )

		{

			

			$('#result').removeClass()

			$('#result').addClass('good')

			return 'Good'	



		}

		else

		{

			

			$('#result').removeClass()

			$('#result').addClass('strong')

			return 'Strong'





		}

	}



/*

caktivizon enter

  $(window).keydown(function(event){

    if(event.keyCode == 13) {

      event.preventDefault();

      return false;

    }

  });


*/


});







	// password if is same

function checkPass()

{

    //Store the password field objects into variables ...

    var pass1 = document.getElementById('password');

    var pass2 = document.getElementById('password2');

    //Store the Confimation Message Object ...

    var message = document.getElementById('confirmMessage');

    //Set the colors we will be using ...

    var goodColor = "#66cc66";

    var badColor = "#ff6666";

    //Compare the values in the password field 

    //and the confirmation field

    if(pass1.value == pass2.value){

        //The passwords match. 

        //Set the color to the good color and inform

        //the user that they have entered the correct password 

        pass2.style.backgroundColor = goodColor;

        message.style.color = goodColor;

        message.innerHTML = "Passwords Match!"

    }else{

        //The passwords do not match.

        //Set the color to the bad color and

        //notify the user.

        pass2.style.backgroundColor = badColor;

        message.style.color = badColor;

        message.innerHTML = "Passwords Do Not Match!"

    }

} 
