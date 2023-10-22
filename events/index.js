let bill;
let people = 1;
let tipAmount;
let discount;
let tipPercentage;
let total;

document.getElementById("billAmount").addEventListener("input", (event) => {
  bill = document.getElementById("billAmount").value;
  if(people > 0){
    tipAmount = bill/people;
    document.getElementById("tipPerson").textContent = Math.floor(tipAmount); 
  }
});

document.getElementById("numPeople").addEventListener("input", (event) => {
  
    people = document.getElementById("numPeople").value;
    tipAmount = bill/people;
     
    if(discount > 0){
      tipPercentage = tipAmount*discount;
      total = tipPercentage+tipAmount;
      document.getElementById("tipAmount").textContent =  ("$" +tipPercentage.toFixed(1));
      document.getElementById("tipPerson").textContent = ("$" + total.toFixed(1));
    }else{
      document.getElementById("tipPerson").textContent = ("$" + tipAmount.toFixed(1));
    }

});

document.querySelector(".buttons").addEventListener("click", (event) =>{
    const temp = event.target.value;
    //Remove the % sign so I only get the discount value
    discount = temp.slice(0, temp.length -1)/100;

    //Calculate the percentage value 
    tipPercentage = tipAmount*discount;
    total = tipPercentage+tipAmount

    //Print values
    document.getElementById("tipAmount").textContent =  ("$" +tipPercentage.toFixed(1));
    document.getElementById("tipPerson").textContent = ("$" + total.toFixed(1));
})

document.getElementById("custom").addEventListener("input", (event) => {
  const temp = event.target.value;
  discount = temp/100;
  //Calculate the percentage value 
  tipPercentage = tipAmount*discount;
  total = tipPercentage+tipAmount

  //Print values
  document.getElementById("tipAmount").textContent =  ("$" +tipPercentage.toFixed(1));
  document.getElementById("tipPerson").textContent = ("$" + total.toFixed(1));
});