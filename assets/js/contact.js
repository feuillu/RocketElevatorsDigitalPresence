function residential() {
   
	var resnumapp = parseInt($('#resnumapp').val());
	   
	var resnumfloor = parseInt($('#resnumfloor').val());
	  
	var resSTD = document.getElementById("resSTD").checked
	   
	var resPRE = document.getElementById("resPRE").checked
	   
	var resEX = document.getElementById("resEX").checked
	   
	var floors20 = Math.ceil(resnumfloor / 20);
	   
	var cages101 = Math.ceil((resnumapp / resnumfloor) / 6);
	 var cages = floors20 * cages101;  
	document.getElementById("cages").value = cages;
	console.log (floors20)
	
	   if (resSTD ) {
		 document.getElementById("total").value =  ( 7565 * 10 / 100) * cages;
	   } else if (resPRE ) {
		 document.getElementById("total").value =  ( 12345 * 13 / 100) * cages;
	   } else if (resEX ) {
		document.getElementById("total").value =   (15400 *  16 / 100)*  cages;
	   } else {
		
	   }
	};

	function commercial() {
		var cagedeploy = parseInt($('#cagedeploy').val());

		var comSTD = document.getElementById("comSTD").checked;
	   
		var comPRE = document.getElementById("comPRE").checked;
	   
		var comEX = document.getElementById("comEX").checked;
	
		
		console.log (cagedeploy);

			if (comSTD ) {
			 document.getElementById("total").value =  ( 7565 * 10 / 100) * cagedeploy;
		   } else if (comPRE ) {
			 document.getElementById("total").value =  ( 12345 * 13 / 100) * cagedeploy;
		   } else if (comEX ) {
			document.getElementById("total").value =   (15400 *  16 / 100)*  cagedeploy;
		   } else {
			
		   }
		};

		function corporate() {
   
			var maxfpeople = parseInt($('#maxfpeople').val());
			   
			var howmfloor = parseInt($('#howmfloor').val());

			var howmbase  = parseInt($('#howmbase').val());

			var tot = (howmbase + howmfloor);

			var col = Math.ceil(tot /20);

			var cages = tot * Math.ceil(maxfpeople / 1000);
			
			var total = col * cages;
			
			var corSTD = document.getElementById("corSTD").checked;
			   
			var corPRE = document.getElementById("corPRE").checked;
			   
			var corEX = document.getElementById("corEX").checked;
			   
			if (corSTD ) {
				 document.getElementById("total").value =  ( 7565 * 10 / 100) * cages;
			   } else if (corPRE ) {
				 document.getElementById("total").value =  ( 12345 * 13 / 100) * cages;
			   } else if (corEX ) {
				document.getElementById("total").value =   (15400 *  16 / 100)*  cages;
			   } else {
				
			   }
			};

			function hybrid() {
   
				var howmfloor = parseInt($('#howmfloor').val());
				   
				var howmbase = parseInt($('#howmbase').val());

				var maxfpeople = parseInt($('#maxfpeople').val());

				var tot = howmfloor + howmbase;

				var cages = Math.ceil(tot * maxfpeople);
				  
				var hybSTD = document.getElementById("hybSTD").checked
				   
				var hybPRE = document.getElementById("hybPRE").checked
				   
				var hybEX = document.getElementById("hybEX").checked
				
				
				   if (hybSTD ) {
					 document.getElementById("total").value =  ( 7565 * 10 / 100) * cages;
				   } else if (hybPRE ) {
					 document.getElementById("total").value =  ( 12345 * 13 / 100) * cages;
				   } else if (hybEX ) {
					document.getElementById("total").value =   (15400 *  16 / 100)*  cages;
				   } else {
					
				   }
				};