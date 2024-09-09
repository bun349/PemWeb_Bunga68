
var val1, val2;

function konversi() {
    val1 = parseInt(document.kirim.T1.value) || 0; // Convert T1 to integer, default to 0 if NaN
    val2 = parseInt(document.kirim.T2.value) || 0; // Convert T2 to integer, default to 0 if NaN
}

function tambah() {
    konversi(); // Call konversi() to convert the values
    document.kirim.T3.value = val1 + val2; // Add the two values and assign the result to T3
}
function kurang() {
    konversi(); // Call konversi() to convert the values
    document.kirim.T3.value = val1 - val2; // Add the two values and assign the result to T3
}
function bagi() {
    konversi(); // Call konversi() to convert the values
    document.kirim.T3.value = val1 / val2; // Add the two values and assign the result to T3
}