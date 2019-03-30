function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
   if(xhr.readyState === 4 && xhr.status==200){
    callback(xhr.responseText);
  }
}
 xhr.send();
}

loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  career_objective(data.career_objective);
  Education_Details(data.Education_Details);
  Skills(data.Skills);
})
var left=document.querySelector(".left");
function profile(p)
{
var image=document.createElement("img");
image.src=p.image;
left.append(image);
var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);

var h3=document.createElement("h3");
h3.textContent=p.designation;
left.append(h3);

var h4=document.createElement("h4");
h4.textContent=p.phoneno;
left.append(h4);

var h5=document.createElement("h5");
h5.textContent=p.emailid;
left.append(h5);
}
var right=document.querySelector(".right");
function career_objective(c)
{

var h6=document.createElement("h3");
h6.textContent="career objective";
right.append(h6);

var hr=document.createElement("hr");
right.append(hr);

var h8=document.createElement("p");
h8.textContent=c.info;
right.append(h8);
}
//Education_Details
function Education_Details(e)
{

var h7=document.createElement("h3");
h7.textContent="Education Details";
right.append(h7);

var hr=document.createElement("hr");
right.append(hr);

var table=document.createElement("table");
table.border="2";
var tr1="<tr><th>Institute</th><th>qualification</th><th>Percentage</th><th>YOP</th></tr>";
var tr2=" ";
for(i=0;i<e.length;i++)
{
  tr2=tr2+"<tr><td>"+e[i].Institute+"</td><td>"+e[i].qualification+"</td><td>"+e[i].Percentage+"</td><td>"+e[i].YOP+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
}
function Skills(s){
   var rr=document.createElement("h3");
   rr.textContent="Skills";
   right.append(rr);

   var hr=document.createElement("hr");
   right.append(hr);

    var ul=document.createElement("ul");
    for(var i in s){
      var li=document.createElement("li");
      li.innerHTML=s[i].name+":"+s[i].info;
      ul.append(li);

}
right.append(ul);
    }
