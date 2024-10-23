function split(){
    let price = document.getElementById("number").value;
    let people = document.getElementById("people").value;
    let result = document.getElementById("result")
    const splider = (price/people).toFixed(2);
  
  result.innerHTML = `Each person should pay: ${splider} fcfa `;
}