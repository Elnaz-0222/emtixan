var a = Number(prompt("Бірінші сан енгізіңіз"))
var b = Number(prompt("Екінші сан енгізіңіз"))
var c = Number(prompt("Үшінші санды енгізіңіз"))

var ten = "";
var az ="";

if(a > b && a > c) {
    ten += a
} else if(b > a && b > c){
    ten += b
} else if (c > a && c > b) {
    ten += c
}

if(a < b && a < c) {
    az += a
} else if(b < a && b < c){
    az += b
} else if (c < a && c < b) {
    az += c
}

alert(ten - az)