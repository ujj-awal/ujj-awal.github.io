document.getElementById('topmenu').onclick = function () {
    document.getElementById('navmenu').classList.remove("hidden")
    document.getElementById('topclose').classList.remove("hidden")
    document.getElementById('topmenu').classList.add("hidden")

}

document.getElementById('topclose').onclick = function () {
    document.getElementById('topclose').classList.add("hidden")
    document.getElementById('navmenu').classList.add("hidden")
    document.getElementById('topmenu').classList.remove("hidden")
}

document.getElementById('drop').onclick = function () {
    document.getElementById('dropmenu').classList.remove("hidden")

}

document.getElementById('dropmenu').onmouseout = function () {
    document.getElementById('dropmenu').classList.add("hidden")

}

// $(document).ready(function () {
//     $("#topmenu").click(function () {
//         $("#navmenu").slideDown();
//     });
// )};

