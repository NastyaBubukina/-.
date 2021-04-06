var city1 = {
name : "ГородN",
population : 10000000,
}
var city2 = {name: "ГородM", population: 1e6};
function GetName(){return this.name;}
city1.getName = GetName; 
city2.getName = GetName;
function exportStr(){return this.name + '\n' + 'population=' + this.population + '\n';}
city1.exportStr = exportStr;
city2.exportStr = exportStr;
function getObj(){return this;}
function getCity(){return getObj.apply(this).getName();}
city1.getCity = getCity;
city2.getCity = getCity;
console.log(city1);
console.log(city2);