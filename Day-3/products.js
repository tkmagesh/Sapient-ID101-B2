var products = [
	{id:2,name:"pen",cost:72,units:2},
	{id:4,name:"len",cost:82,units:9},
	{id:1,name:"den",cost:25,units:3},
	{id:3,name:"ten",cost:76,units:4},
	{id:8,name:"ken",cost:12,units:6},
	{id:5,name:"hen",cost:90,units:7}
]

function min(list,attrName){
	var result = list[0][attrName];
	for(var i=1;i<list.length;i++)
		if (result > list[i][attrName])
			result = list[i][attrName];
	return result;
}

function min(list,attrSelectorFn){
	var result = attrSelectorFn(list[0]);
	for(var i=1;i<list.length;i++)
		if (result > attrSelectorFn(list[i]))
			result = attrSelectorFn(list[i]);
	return result;
}

function idSelector(p){ return p.id; }

console.log(min(products,idSelector));

function filter(list,isSatisfiedBy){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (isSatisfiedBy(list[i]))
			result.push(list[i]);
	return result;
}

function isACostlyProduct(p){
	return p.cost > 50;
}