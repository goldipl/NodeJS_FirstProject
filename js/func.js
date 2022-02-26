alert("Hello");

document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("output").innerText = document.getElementById('input').value;
})