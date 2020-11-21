var selection = document.getElementById("selection-result-placeholder");

function getCookieValue(name) {
    let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)")
    return result ? result.pop() : ""
}

selection.innerText = getCookieValue("selectedBird");