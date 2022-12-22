const myModal=new bootstrap.Modal("#register-modal")

let logged=sessionStorage.getItem("logged");
const session=localStorage.getItem("session");
checklogged()
//Login no sistema
document.getElementById("login-form").addEventListener("submit", function(e){

    e.preventDefault();

    const email=document.getElementById("email-input").value;
    const senha=document.getElementById("password-input").value;
    const session=document.getElementById("session-check").checked;
    
   const account=getAccount(email);
   if(!account){
    alert("Ops. Verifique seu email ou a senha")
    return;
   }
   if(account){
    if(account.password !==senha){
        alert("Ops. Verifique seu email ou a senha")
    return
    }
    saveSession(email, session);
     window.location.href="home.html"
   }
   


});


//CRIAR CONTA
document.getElementById("create-form").addEventListener("submit", function(e){
    e.preventDefault()
    
    const email=document.getElementById("email-create-input").value;
    const senha=document.getElementById("password-create-input").value;
    
    if(email.length <5){
        alert("Insira um email válido");
        return;
    }
    if(senha.length <4 ){
        alert("Escolha uma senha com oito ou mais caracteres");
        return;
    }


    SalveSuaConta({
       login: email,
       password: senha,
       transactions:[]
    
 });

    myModal.hide()
    alert("Conta criada com sucesso")
});
function checklogged() {
    if(session){
        sessionStorage.setItem("logged",session);
        logged=session
    }
    if(logged){
        saveSession(logged, session)
        window.location.href="home.html"
    }
}

function SalveSuaConta(data){
    localStorage.setItem(data.login, JSON.stringify(data));
}
function Session(data,Session){

}

function getAccount(key){
    const account=localStorage.getItem(key);
    if(account){
        return JSON.parse(account);
    }
    return""
}
function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session",data)
    }
    sessionStorage.setItem("logged", data)
}