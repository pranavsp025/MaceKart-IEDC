function passvalues() {
    
    const x = "psd;"
    localStorage.setItem("ival",x);
   window.location="cart.html";
}



document.getElementById("name").innerHTML=localStorage.getItem("ival");
