var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);

    
  //b. population<2L
   var popul=data.filter((ele)=>ele.population<200000);
   console.log(popul);        

   //d. sum of population        
var sum= data.reduce((acc,ele)=> {return acc + ele.population;},0);
console.log(sum);
    
  //a. asia
  var country=data.filter((ele)=>{return ele.region==='Asia';});
  console.log(country);

//e. us dollars

 var dollars=data.filter((x)=>{
  for(var i in x.currencies){
      if(x.currencies[i].code==='USD'){
         return true;}
  //{return ele.currencies.code==='USD';});
 // console.log(dollars[i]);
      }
}).map(x=>console.log(x.name));

 
//c.forEach
 var a=data.forEach((element) => {
    console.log(element.name+" "+element.capital+" "+element.flag);
    });
console.log(a);
    
}

