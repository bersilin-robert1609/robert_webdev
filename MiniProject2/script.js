function add(){
    event.preventDefault();
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = document.getElementById("c").value;
    console.log(a);
    switch(c){
        case '1':{
            console.log(typeof(a+b));
            document.getElementById("answer").value = a + b;
            break;
        }case '2':{
            console.log(typeof(a-b));
            document.getElementById("answer").value = a - b;
            break;
        }case '3':{
            console.log(typeof(a*b));
            document.getElementById("answer").value = a * b;
            break;
        }case '4':{
            console.log(typeof(a/b));
            document.getElementById("answer").value = a / b;
            break;
        }
    }
    document.getElementById("ans").style.display = "block"
}