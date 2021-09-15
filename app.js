var btntrans=document.querySelector("#btn-translate");
var txtinp=document.querySelector("#txt-input");
var txtout=document.querySelector("#output");
var url="https://api.funtranslations.com/translate/sith.json"
function curl(txt)
{
return url+"?"+"text="+txt;
}
btntrans.addEventListener("click",()=>{
 
 var txt=txtinp.value;
 fetch(curl(txt)).then(response => response.json())
 .then(json=>{
   var ti=json.contents.translated;
   console.log(json);
   txtout.innerText=ti;
 })
 .catch(errorhandler=>{
  txtout.innerText="error";
 })

})
