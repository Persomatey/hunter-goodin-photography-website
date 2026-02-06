//#region Custom Modal

function OpenModal(isURL, path)
{
	var modal = document.getElementById("modal");
	modal.style.display = "block";
	var span = document.getElementById("span");
	
	if(isURL)
	{
		document.getElementById("modalID").innerHTML = `<iframe width=100% height=100% src="https://www.youtube.com/embed/${path} frameborder="0" allowfullscreen="allowfullscreen"></iframe>`;
	}
	else
	{
		// OpenModal(false, 'images/devphotos/DDGameplay1.png');"
		document.getElementById("modalID").innerHTML = `<img style="width:100%; height:100%; object-fit:contain; margin:auto;" src="./${path}">`; 
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() 
	{
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) 
	{
		if (event.target == modal) 
		{
			modal.style.display = "none";
		}
	}
}

//#endregion Custom Modal

// #region Loading HTML

function LoadGallery(gallery)
{
	console.log(`Loading ${gallery}`);

	fetch(`./galleries/${gallery}.html`)
	.then(response => response.text())
	.then(text => document.getElementById("gallery").innerHTML = text)
	.then(document.getElementById("wedding").classList.replace('portfolio_selected', 'portfolio_unselected'))
	.then(document.getElementById("portraiture").classList.replace('portfolio_selected', 'portfolio_unselected'))
	.then(document.getElementById("commercial").classList.replace('portfolio_selected', 'portfolio_unselected'))
	.then(document.getElementById("realestate").classList.replace('portfolio_selected', 'portfolio_unselected'))
	.then(document.getElementById("cosplay").classList.replace('portfolio_selected', 'portfolio_unselected'))
	// .then(document.getElementById("miscellaneous").style = "text-decoration:none; font-size:2vw; margin-top:5px;")
	.then(document.getElementById(gallery).classList.replace('portfolio_unselected', 'portfolio_selected'));

	console.log(document.getElementById("wedding").classList[0]); 
	console.log(document.getElementById("portraiture").classList[0]); 
	console.log(document.getElementById("commercial").classList[0]); 
	console.log(document.getElementById("realestate").classList[0]); 
	console.log(document.getElementById("cosplay").classList[0]); 
}

function LoadHeader(id)
{
	if (document.getElementsByTagName("title")[0] != "Hunter Goodin")
	{
		console.log("Loading Header"); 

		fetch('./header.html')
		.then(response => response.text())
		.then(text => document.getElementById('header').innerHTML = text)
		.then(() => ChangeHeader(id));
	}
}

function LoadFooter()
{
	if (document.getElementsByTagName("title")[0] != "Hunter Goodin")
	{
		console.log("Loading Footer"); 

		fetch('./footer.html')
		.then(response => response.text())
		.then(text => document.getElementById('footer').innerHTML = text);
	}
}

function ChangeHeader(id)
{
	if (id)
	{
		var str = document.getElementById(id).innerHTML; 
		document.getElementById(id).innerHTML = "<C>" + str.substring(3, str.length - 4) + "</C>"; 
	}
}

// #endregion Loading HTML

// #region Utility Functions

function UnselectAllButtons(proj, buttonCount)
{
	for (var i = 1; i <= buttonCount; i++)
	{
		console.log(`unselecting But${proj}${i}`); 
		document.getElementById(`But${proj}${i}`).className = "buttonUnselected";
	}
}

function CopyEmailAddress() 
{
	navigator.clipboard.writeText("huntercgoodin@gmail.com");

	document.getElementById("myTooltip").innerHTML = "Copied!";
}

function CopyFooterEmailAddress() 
{
	navigator.clipboard.writeText("huntercgoodin@gmail.com");

	document.getElementById("myFooterTooltip").innerHTML = "Copied!";
}

function HoverOverEmailAddress() 
{
	document.getElementById("myTooltip").innerHTML = "Copy to clipboard";
}

// #endregion Utility Functions

