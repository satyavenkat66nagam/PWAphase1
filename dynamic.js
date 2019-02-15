function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Applicaton/json");
	xhr.open('GET',file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){

			callback(xhr.responseText);
		}
	}
	xhr.send(null);

}
getfile("dynamic.json",function(text)
{
	var data =JSON.parse(text);
	console.log(data);
	profile(data.profile);
	career(data.career);
	education(data.education);
	languages(data.languages);

})
var left =document.querySelector(".left");
function profile(e){
	var img =document.createElement("img");
	img.src =e.img;
	left.appendChild(img);

	var h2 =document.createElement("h1");
	h2.textContent =e.name;
	left.appendChild(h2);

	var h2 =document.createElement("h2");
	h2.textContent =e.roll;
	left.appendChild(h2);

	var h2 =document.createElement("h2");
	h2.textContent =e.place;
	left.appendChild(h2);

	var h2 =document.createElement("h2");
	h2.textContent =e.des;
	left.appendChild(h2);
/* for lines */
	var hr =document.createElement("hr");
	right.appendChild(hr);
	var hr =document.createElement("hr");
	right.appendChild(hr);

}


var right =document.querySelector(".right");
function career(e){
	var h1 =document.createElement("h1");
	h1.innerHTML ="RESUME BUILDING";
	right.appendChild(h1);

	var e1 =document.createElement("h2");
	e1.textContent ="Career Objective";
	right.appendChild(e1);

	var hr =document.createElement("hr");
	right.appendChild(hr);

	var p =document.createElement("p");
	p.textContent =e.info;
	right.appendChild(p);
/* for lines */
	var hr =document.createElement("hr");
	right.appendChild(hr);
	var hr =document.createElement("hr");
	right.appendChild(hr);

}

function education(e){
	var h2 =document.createElement("h2");
	h2.innerHTML ="EDUCATION DETAILS";
	right.appendChild(h2);
	
	var ww =document.createElement("hr");
	right.appendChild(ww);

    var table =document.createElement("table");
	table.border ="1";

	var tr1 ="<tr><td>sno</td><td>degree</td><td>nstitution</td><td>per</td><td>yop</td></tr>";

	var tr2 ="";

	for (var i=0;i<e.length;i++)
	{
		tr2 =tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].per+"</td><td>"+e[i].yop+"</td></tr>";
	}
	table.innerHTML =tr1 +tr2;
	right.appendChild(table);
/* for lines */
	var hr =document.createElement("hr");
	right.appendChild(hr);
	var hr =document.createElement("hr");
	right.appendChild(hr);

}

function languages(e){
	var ee =document.createElement("h2");
	ee.textContent ="Known languages";
	right.appendChild(ee);

	var tt =document.createElement("hr");
	right.append(tt);

	var ul =document.createElement("ul");
	for(i=0;i<e.length;i++)
	{
		var li =document.createElement("li");
		li.textContent =e[i].lang;
		ul.append(li);
	}
	right.append(ul);

}