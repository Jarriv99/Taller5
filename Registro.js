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
    }
}