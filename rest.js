var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);

//Get all the countries from the asia continent/region using the filter function
    var result=data.filter((element)=>{
        return element.region === "Asia";
    })
    console.log(result);

 //Get all the countries with a population of less than 2 lakhs using filter function   
var population =data.filter((count)=>{
    return count.population<200000;
})
console.log(population);

//total population of countries
var totalpop=data.reduce((accu,curr)=>accu+curr.population,0);
console.log(totalpop);

//Print the following details name,capital,flag using forEachfunction
data.forEach(function (countries){
console.log(`The country name is ${countries.name} and its capital is ${countries.capital} and flag of the country is ${countries.flag}`);
})

//Print the country which uses US dollar as currency
for(let i=0;i<data.length;i++){
    let isCurrency= data[i].currencies !== undefined;
    if(isCurrency){
        let currencyArr=data[i].currencies;
        for(let i=0;i<currencyArr.length;i++){
            if(currencyArr[i].code === "USD"){
                console.log("The country having currency USD is",data[i].name);
            }
        }
    }
}

}


