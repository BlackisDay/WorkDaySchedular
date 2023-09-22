//Time and Days
var nineAm = $("#hour-9");
var tenAm = $("#hour-10");
var elevenAm = $("#hour-11");
var twelvePm = $("#hour-12");
var onePm = $("#hour-13");
var twoPm = $("#hour-14");
var threePm = $("#hour-15");
var fourPm = $("#hour-16");
var fivePm = $("#hour-17");
//Will wait for the page to completely Load
  $(document).ready(readyFunction)
function readyFunction(){
  console.log(readyFunction)
}
$(window).on("Load",readyFunction)
console.log(readyFunction)

//Shall return What day it is the currentDay/Month/Year + Hour/MM/SS
var today = function(){return dayjs().format('DD/MM/YYYY')};
document.getElementById("currentDay").innerText=today();
var currentHour = dayjs().format('h:mm:ss a');
var interval = setInterval(function() {
var now = dayjs();
$('#currentDay').html(today() + " " + dayjs().format('hh:mm:ss A'));
},100);

//init
//gets hour


function saveStorage(){
   $(".saveBtn").on("click",function(){
    currentHour.JSON.parse(localStorage.setItem("currentHour"))
   }
   )
}

function init(){
console.log("Current Hour " + currentHour);
var init9 = JSON.parse(localStorage.getItem("09:00 am"));
nineAm.val(init9);

var init10 = JSON.parse(localStorage.getItem("10:00 am"))
tenAm.val(init10);

var init11 = JSON.parse(localStorage.getItem("11:00 am"))
elevenAm.val(init11);

var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
twelvePm.val(init12);

var init1 = JSON.parse(localStorage.getItem("01:00 pm"))
onePm.val(init1);

var init2 = JSON.parse(localStorage.getItem("02:00 pm"))
twoPm.val(init2);

var init3 = JSON.parse(localStorage.getItem("03:00 pm"))
threePm.val(init3);

var init4 = JSON.parse(localStorage.getItem("04:00 pm"))
fourPm.val(init4);

var init5 = JSON.parse(localStorage.getItem("05:00 pm"))
fivePm.val(init5);
} 

$(".saveBtn").on("click",function(){
  console.log($(this).attr("data-key"));
})
$('#clearDay').on('click')
//past/present/future
