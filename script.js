function validateForm() {
    var nome = document.getElementById("nome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var email = document.getElementById("email").value;
    var rg = document.getElementById("rg").value;}
    
    // Validação para data de nascimento (dd/mm/aa)
    var dataRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dataRegex.test(dataNascimento)) {
        alert("Por favor, insira a data de nascimento no formato dd/mm/aa.");
        return false;
    }
    
    // Validação básica email (@gmail.com)
    var emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido (@gmail.com).");
        return false;
    }
    
    function isRgValid(rg){
        const rgRegex= new RegExp(
           //xxx.xxx.xxx-xx
           /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}\-([0-9]){2}$/
        );
        if(rgRegex.test(cpf)){
            return true;
        }
        return false;
    }

    if(jobSelect,value===""){
        alert("Por favor, selecione sua escolha");
        return;
    }