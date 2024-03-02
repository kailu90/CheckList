let btnLogin = document.getElementById("btnLogin");


function ingresarCheckList(){
    console.log("entrando a check List")
    window.location.href = "./checkList.html";    
}

btnLogin.addEventListener("click", ingresarCheckList);