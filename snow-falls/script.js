'use-strict'

document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function() {
        document.getElementById('snowFalls').style.height = document.body.scrollHeight + 'px';
    }, 1000);
});