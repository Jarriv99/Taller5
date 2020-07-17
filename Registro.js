function ValidationName(){
	var charactersN = document.getElementById("name");
    if (charactersN.value.length <= 25) {
        document.getElementById("invalid-name").style.display = "none";
    } else {
        document.getElementById("invalid-name").style.display = "block";
        charactersN.value = '';
    }
}
function ValidationLN(){
	var charactersL = document.getElementById("lastname");
    if (charactersL.value.length <= 25) {
        document.getElementById("invalid-lastname").style.display = "none";
    } else {
        document.getElementById("invalid-lastname").style.display = "block";
        charactersL.value = '';
    }
}
function UserName(){
	var User = document.getElementById("UN");
    if (User.value.length >= 10 && User.value.length <= 20) {
        document.getElementById("invalid-UN").style.display = "none";
    } else {
        document.getElementById("invalid-UN").style.display = "block";
        User.value = '';
    }
}

var Address = ['cll', 'cra', 'av', 'anv', 'trans'];

function AddressValidation() {
    var addr = document.getElementById("address");
    var flag = false;
    for (var i = 0; i < Address.length; i++) {
        if (addr.value.indexOf(Address[i]) == 0) {
            flag = true;
            break;
        }
    }
    if (!flag) {

        document.getElementById("invalid-address").style.display = "block";
        addr.value = '';
    } else {

        document.getElementById("invalid-address").style.display = "none";
    }
    return flag;
}

function VerMas() {
    element = document.getElementById("show");
    check = document.getElementById("check");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}

function PassValidation(){
	var pass = document.getElementById("pass");
    var passconfirm = document.getElementById("confirmpass");
    if (pass.value == passconfirm.value) {
        document.getElementById("invalid-pass").style.display = "none";
    } else {
        document.getElementById("invalid-pass").style.display = "block";
        passconfirm.value = '';
    };
    
}
function PassValidationChar(){
	var pass = document.getElementById("pass");
    if (pass.value.length >= 15 && pass.value.length <= 20) {
        document.getElementById("invalid-pass-char").style.display = "none";
    } else {
        document.getElementById("invalid-pass-char").style.display = "block";
        pass.value = '';
    }
}
