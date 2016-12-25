		var pages = new Array(); // this will hold your pages
		pages[0] = 'planer/ukesinfo.html';
		pages[1] = 'planer/maanedsinfo.html';
		pages[2] = 'planer/dagesinfo.html';

		var time = 5; // set this to the time you want it to rotate in seconds

		// do not edit
		var i = 1;
		function setPage(){
			if(i == pages.length)
			{
				i = 0;	
				reloadDagens();
			}
			document.getElementById('rullerende').setAttribute('src',pages[i]);
			i++;
		}
		setInterval("setPage()",time * 1000);
		// do not edit

		Date.prototype.yyyymmdd = function() {
   			var yyyy = this.getFullYear().toString();
   			var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
   			var dd  = this.getDate().toString();
   			return (dd[1]?dd:"0"+dd[0]) + "." + (mm[1]?mm:"0"+mm[0]) + "." + yyyy; // padding
		};

//document.location.href = newUrl;
		function init() {
			reloadDagens();
		}

		function reloadDagens(){
			var d = new Date();
			var dato = d.yyyymmdd();
			var tekst = "Dagen i dag: " + dato;
			document.getElementById("overskrift").innerHTML = tekst;
   			document.getElementById('dagenidag').src = "planer/dagenidag/" + d.getDay() + ".html";
		}
