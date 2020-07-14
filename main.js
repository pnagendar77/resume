fetch("data.json").then(response=>{
	return response.json();
}).then(data=>{
	profile(data.profile.info);

})
var child=document.querySelector(".child");
var profile=(info)=>{
	var name=document.createElement("h4");
	name.textContent="Name: "+info.name;
	child.append(name);

    var email=document.createElement("h4");
    email.textContent="Email: "+info.email;
    child.append(email);

	var mobileno=document.createElement("h4");
	mobileno.href="tel:"+info.mobileno;
    mobileno.textContent="Mobile: "+info.mobileno;
    child.append(mobileno);


    
}
