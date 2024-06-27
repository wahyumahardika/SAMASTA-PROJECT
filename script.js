document.getElementById('hamburger').onclick = function() {
    document.getElementById('sidebar').style.width = '250px';
};

document.getElementById('close-btn').onclick = function() {
    document.getElementById('sidebar').style.width = '0';
};
