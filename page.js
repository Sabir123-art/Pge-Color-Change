var a = 0, b = 0, c = 0; 
var f, a1, b1, c1;
function changeColor(f) {
    var formData = new FormData(f);
    a = parseInt(formData.get('red')) % 256;
    b = parseInt(formData.get('green')) % 256;
    c = parseInt(formData.get('blue')) % 256;

    document.body.style.backgroundColor = `rgb(${a},${b},${c})`;

    console.log(a, b, c);
}  
