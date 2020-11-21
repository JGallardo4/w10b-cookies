function setCookie(name, value) {
    document.cookie = name + "=" + escape(value) + "; path=/;";
}

var birdForm = document.getElementById("bird-form");

birdForm.addEventListener('submit', event => {
    event.preventDefault();

    var selectedBird = document.getElementById("birds-select").value;
    if (selectedBird == "") {
        alert("Make a selection!");
    } else {
        setCookie("selectedBird", selectedBird);
        window.location.href = "pages/selection.html";
    }

    birdForm.reset();
});

document.getElementById("bird-submit-button").addEventListener('submit', event => {
    event.preventDefault();
});