/* Holiii acá va tu código también */

	
		const loginButton = document.getElementById('login_button');		
		//evento del boton
		loginButton.addEventListener('click', () =>{
			const email = document.getElementById('mail_input').value;
			//validar que el mail sea un formato valido
			if(email.value == /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i && email.value.length !== 0){
				console.log("ok")
			} else { console.log("no") } 
			
			const password = document.getElementById('password_input').value; 
			//validar que la contraseña sean solo numeros 
			
			
			//funcion de firebase que crea un usuario
			firebase.auth().createUserWithEmailAndPassword(email, password)
			
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
			});
		})

		
	
