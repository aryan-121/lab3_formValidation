function isChar(ch){
    for(var i = 0 ; i < ch.length ; i++){
        if(!(('a' <= ch[i] && ch[i] <= 'z') || ('A' <= ch[i] && ch[i] <= 'Z'))){
            return false;
        }
        
    }
    return true;
}
function isNum(ch){
    if(isNaN(parseInt(ch))){
        return false;
    }
    return true;
}


document.getElementById("form1").onsubmit = function(e){
            
    var fname = document.getElementById("fname").value;
    var fid = document.getElementById("fid").value;
    var dob = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var cellnum = document.getElementById("cellnum").value;
    var add = document.getElementById("add").value;
    var pin = document.getElementById("pin").value;

    // First Name
    if(fname === ""){
        document.getElementById("e1").innerHTML="Required Field";
        e.preventDefault();    
    }
    else if(fname.length < 4 || fname.length > 20){
        document.getElementById("e1").innerHTML="Length should be between 4-20";
        e.preventDefault();   
    }
    else{
        for (var i = 0 ; i < fname.length ; i++){
            if(!isChar(fname[i])){
                document.getElementById("e1").innerHTML="Name doesn't suppports Digits or Special Characters";
                e.preventDefault();
                break;
            }
        }
        document.getElementById("e1").innerHTML="";
    }

    // ID
    if(fid === ""){
        document.getElementById("e2").innerHTML="Required Field";
        e.preventDefault();    
    }
    else if(fid.length !== 8){
        document.getElementById("e2").innerHTML="ID Length should be 8";
        e.preventDefault();
    } else if(!(isChar(fid.substring(2, 5)) && isNum(fid[0]) && isNum(fid[1]) && isNum(fid[5]) && isNum(fid[6]) && isNum(fid[7]))){
        document.getElementById("e2").innerHTML="ID format should be 'ddcccddd'";
        e.preventDefault();
    }
    else{
        document.getElementById("e2").innerHTML="";
    }


    // Date of Birth
    if(dob === ""){
        document.getElementById("e3").innerHTML="Required Field";
        e.preventDefault();    
    }
    else if(dob.length !== 10 || dob[2] != '/' || dob[5] != '/'){
        document.getElementById("e3").innerHTML="Date should be in format 'DD/MM/YYYY'";
        e.preventDefault();
    }
    else if(!(isNum(dob[0]) && isNum(dob[1]) && isNum(dob[3]) && isNum(dob[4]) && isNum(dob[6]) && isNum(dob[7]) && isNum(dob[8]) && isNum(dob[9]))){
        document.getElementById("e3").innerHTML="Date can't contain any Characters";
        e.preventDefault();
    }
    else if((parseInt(dob.substring(0,2)) < 1) || (parseInt(dob.substring(0,2)) > 31)){
        document.getElementById("e3").innerHTML="Date can only be between 1-31";
        e.preventDefault();
    }
    else if((parseInt(dob.substring(3,5)) < 1) || (parseInt(dob.substring(3,5)) > 12)){
        document.getElementById("e3").innerHTML="Months can only be between 1-12";
        e.preventDefault();
    }
    else if( 15 >= (2022-parseInt(dob.substring(6,)))){
        document.getElementById("e3").innerHTML="Minimum Age should be 16 years";
        e.preventDefault();
    }
    else if(65 < (2022-parseInt(dob.substring(6,)))){
        document.getElementById("e3").innerHTML="Maximum Age allowed is 65 years";
        e.preventDefault();
    }
    else{
        document.getElementById("e3").innerHTML="";
    }

    // Email ID
    if(email === ""){
        document.getElementById("e4").innerHTML="Required Field";
        e.preventDefault();    
    }
    else if(!isChar(email[0])){
        document.getElementById("e4").innerHTML="Email ID can't start with Numbers or Special Characters";
        e.preventDefault();
    }
    else{
        for(var i = 0 ; i < email.length ; i++){
            if(!(isChar(email[i]) || isNum(email[i]) || email[i] == '_' || email[i] == '.' || email[i] == '@')){
                document.getElementById("e4").innerHTML="Email ID contains Invalid Symbols";
                e.preventDefault();
                break;
            }
            document.getElementById("e4").innerHTML="";
        }
    }

    // Cell Number
    if(cellnum === ""){
        document.getElementById("e5").innerHTML="Required Field";
        e.preventDefault();    
    }
    else if(cellnum.length !== 10){
        document.getElementById("e5").innerHTML="Cell Number length should be 10";
        e.preventDefault();
    }
    else if(!(cellnum[0] == '9' || cellnum[0] == '8')){
        document.getElementById("e5").innerHTML="Cell Number should start with 9 or 8";
        e.preventDefault();
    }
    else{
        for(var i = 0 ; i < cellnum.length ; i++){
            if(!isNum(cellnum[i])){
                document.getElementById("e5").innerHTML="Cell Number can't contain any character";
                e.preventDefault();
                break;
            }
            document.getElementById("e5").innerHTML="";
        }
    }

    // Address
    if(add === ""){
        document.getElementById("e6").innerHTML="Required Field";
        e.preventDefault();    
    }

    // Pincode
    if(pin === ""){
        document.getElementById("e7").innerHTML="Required Field";
        e.preventDefault();    
    }
    else if(pin.length !== 6 || pin[0] === '0' || (parseInt(pin) <= 99999) || isNaN(parseInt(pin))){
        document.getElementById("e7").innerHTML="Please Enter Valid pin Code";
        e.preventDefault();
    }
    else{
        document.getElementById("e7").innerHTML="";
    }

}