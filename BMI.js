var data = JSON.parse(localStorage.getItem('BMI')) || [];
var argOverlight = {
	message: "　嚴重過輕",
	class: "BMI1",
}
var argToolight = {
	message: "　體重過輕",
	class: "BMI2",
}
var argNormal = {
	message: "　體重正常",
	class: "BMI3",
}
var argTooHeavy = {
	message: "　體重過重",
	class: "BMI4",
}
var argOverHeavy = {
	message: "　嚴重過胖",
	class: "BMI5",
}
var argFatter = {
	message: "　胖的太扯囉",
	class: "BMI6",
}
var wei = document.querySelector('.weight');
var hei = document.querySelector('.height');
var btn = document.querySelector('.bmiBtn');
var list = document.querySelector('.list');
var get = document.querySelector('.callBtn')
function update(){
	var str = "";
	var dataLeng = data.length;
	for(var i=0;i<dataLeng;i++){
		function html(arg){
			var content = '<li class = '+arg.class+' data-num="'+i+'">' + arg.message
							 + '<span class = "bmi_span">' + "BMI:" + BMIfor +'</span>'
							 + '<span class = "hei_span">' + "身高:" + data[i].hei+'</span>'
							 + '<span class = "wei_span">' + "體重:" + data[i].wei+'</span>'
							 + '<span class ="time_span">'+ today +'</span>'
							 + '<span data-num="'+i+'" class="delBtn">' + "X" + '</span>';
			return content;
		}
		var weiBmi = parseInt(data[i].wei);
		var heiBmi = parseFloat((data[i].hei/100).toFixed(2));
		var BMIfor = parseFloat(((weiBmi)/(heiBmi*heiBmi)).toFixed(0));
		var date = new Date();
		var today = date.getFullYear()+"/"+date.getMonth()+1+"/"+date.getDate();
		// console.log(typeof(BMIfor));
		if(BMIfor <= 15){
			content = html(argOverlight)
			str+=content;
			// console.log(html(argOverlight));
		}else if(BMIfor <= 18.5){
			content = html(argToolight)
			str+=content;
			// console.log(html(argToolight));
		}else if(BMIfor <= 25){
			content = html(argNormal);
			str+=content;
			// console.log(html(argNormal));
		}else if(BMIfor <= 30){
			content = html(argTooHeavy);
			str+=content;
			// console.log(html(argTooHeavy));
		}else if(BMIfor <= 40){
			content = html(argOverHeavy);
			str+=content;
			// console.log(html(argOverHeavy));
		}else if(BMIfor > 40){
			content = html(argFatter);
			str+=content;
			// console.log(html(argFatter));
		}
	}
	list.innerHTML = str;
}
function getData(){
	var dataArry = {
		hei: hei.value,
		wei: wei.value
	}
	data.push(dataArry);
	var dataStr = JSON.stringify(data);
	localStorage.setItem("BMI",dataStr);
	wei.value = "";
	hei.value = "";
	update()
}
function delData(e){
	var num = e.target.dataset.num;
	var className = e.target.className;
	console.log(className)
	if( className == "delBtn"){
		data.splice(num,1);
		console.log(data)
		var dataStr = JSON.stringify(data);
		localStorage.setItem("BMI",dataStr);
		update()
	}

}
btn.addEventListener('click',getData);
list.addEventListener('click',delData);
get.addEventListener('click',update)