// these are the values for svg;
var w = 800;
var h = 450;
var margin = {
	top: 20,
	bottom: 20,
	right: 20,
	left: 20
};
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom; 
var data = [132,72,337,93,78,43,28,16];
var x = d3.scale.linear()
			.domain([0,d3.max(data)])
			.range([0,width]);

var y = d3.scale.linear()
			.domain([0,data.length])
			.range([0,height])
// select the body tag
var svg = d3.select("body").append("svg")
			.attr("id","chart")
			.attr("width",w)
			.attr("height",h);
var chart = svg.append("g")
			.classed("display",true)
			.attr("transform","translate(" + margin.left + "," + margin.top + ")");
			// first value is the id second is teh value;
function plot(params){
	console.log(this);
	this.selectAll(".bar")
	.data(params.data)
	.enter()
		.append("rect")
		.classed("bar",true)
		.attr('x',0)
		.attr('y',function(d,i){
			return y(i);
		})
		.attr("width",function(d,i){
			return x(d);
		})
		.attr('height',function(d,i){
			return y(1) - 1;
		});

	this.selectAll(".bar-label")
		.data(params.data)
		.enter()
			.append('text')
			.classed('bar-label',true)
			.attr("x",function(d,i){
				return x(d);
			})
			.attr("dx",-4)
			.attr("y",function(d,i){
				return y(i);
			})
			.attr("dy",function(d,i){
				return y(1)/1.5;
			})
			.text(function(d,i){
				return d;
			});
}
plot.call(chart,{
	data : data
});

// svg.selectAll(".bar")
// 	.data(data)
// 	.enter()
// 		.append("rect")
// 		.classed("bar",true)
// 		.attr('x',0)
// 		.attr('y',function(d,i){
// 			return y(i);
// 		})
// 		.attr("width",function(d,i){
// 			return x(d);
// 		})
// 		.attr('height',function(d,i){
// 			return y(1) - 1;
// 		});

// svg.selectAll(".bar-label")
// 	.data(data)
// 	.enter()
// 		.append('text')
// 		.classed('bar-label',true)
// 		.attr("x",function(d,i){
// 			return x(d);
// 		})
// 		.attr("dx",-4)
// 		.attr("y",function(d,i){
// 			return y(i);
// 		})
// 		.attr("dy",function(d,i){
// 			return y(1)/1.5;
// 		})
// 		.text(function(d,i){
// 			return d;
// 		});


// some built in d3 methods to call data
// var dataMinValue = d3.min(data);
// var dataMaxValue = d3.max(data);
// var dataLoHiValue = d3.extent(data);
// console.log('array',dataMinValue,dataMaxValue,dataLoHiValue);



// console.log(data[0]);
// var dataGreaterThan50 = data.filter(function(entry){
// 	return entry > 50;
// });
// console.log("data greater than 50",dataGreaterThan50);

var donuts = [

{key: "Glazed", value: 132},
{key: "Jelly", value: 71},
{key: "Holes", value: 12},
{key: "Sprinkles", value: 13},
{key: "Crumb", value: 182},
{key: "Chocolate", value: 232},
{key: "Fritter", value: 142}

];

// for(var i =0, len = donuts.length; i <len; i++) {
// 	console.log(donuts[i].key,donuts[i].value);
// }
// use d3 to pull out the values of a 
// var donutsMinValue = d3.min(donuts,function(d){
// 	// look at value property adn find min
// 	return d.value;
// });
// var donutsMaxValue = d3.max(donuts,function(d){
// 	return d.value;
// });
// var donutsLoHiValue = d3.extent(donuts,function(d){
// 	return d.value;
// });
// console.log('object',donutsMinValue,donutsMaxValue,donutsLoHiValue);




// var donutsGreaterThan50 = donuts.filter(function(entry){
// 	return entry.value >150;
// });
// console.log("donuts greater than 50",donutsGreaterThan50);

// var reformattedDonuts = donuts.map(function(entry){
// 	return {
// 		donut: entry.key,
// 		qty: entry.value
// 	}
// });

// reformattedDonuts.forEach(function(entry){
// 	// console.log('entry',entry);

// })
// console.log(reformattedDonuts);
