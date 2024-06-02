
// Railway station passenger counter app( counts number of people in the station)

// to get any html element using id of that element/tag, innertext implies text between open and closing html tags
document.getElementById("heading1").innerText = "People Entered:" // this line manipulates text between html element tags of heading1 id 


let el_count = document.getElementById("count-el"); //getting html element from front end using its id and assign it to a js variable
let count=0;

//this function is triggered when increment button is clicked
function increment(){ 

count = count+1;// incrementing count value
el_count.innerText = count; //assigning data of js variable 'count', to change data of count-el id in frontend
}


// this fuction is triggered when save button is clicked
function saveEle(){

  let saveele = document.getElementById("save-el"); //assigning save-el id data to a js variable
  saveele.innerText += " - "+ count ; //text data for id=save-el is manipulated, for each call, ('-'+ count) value is added to existing innertext
  document.getElementById("count-el").innerText = 0 ; //reset count to zero when save button is hit. Otherwise previous count is added to present count
  count = 0; // 'count' still contains incremented value only( tracked by js), so set it to zero for perfect reset
}


