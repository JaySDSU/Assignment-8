/*eslint-env browser*/
var $ = function(id) {
    "use strict";
    return window.document.getElementById(id);
};

var persons = [
    ["Jay Patel", "Professor-1", 1001],
    ["Harsh Patel", "Professor-2", 2001],
    ["Dhvanesh Patel", "Professor-3", 3001],
    ["Romil Patel", "Professor-4", 4001],
    ["Bansi Patel", "Professor-5", 5001],
]

function display() {
    var html = ""
    for (var i = 0; i < persons.length; i++) {
        var person = persons[i];
        html = html + '<tr><td>' + person[0] + '</td><td>' + person[1] + '</td><td>' + person[2] + '</td><td><button class="delete" onclick="del(' + i + ')">Delete</button></td></tr>';
    }
    document.querySelector("tbody").innerHTML = html;
    $('count').innerHTML = persons.length;
}

function del(n) {
    persons.splice(n, 1);
    display();
}

var submit = $('add').addEventListener("click", function() {
    var name = $('name').value;
    var title = $('title').value;
    var extension = $('extension').value;

    if (!name) $("name").nextElementSibling.style.display = "inline-block";
    else $("name").nextElementSibling.style.display = "none";

    if (!title) $('title').nextElementSibling.style.display = "inline-block";
    else $('title').nextElementSibling.style.display = "none";

    if (!extension) $('extension').nextElementSibling.style.display = "inline-block";
    else $('extension').nextElementSibling.style.display = "none";

    if (!name || !title || !extension) return;
    else persons.push([name, title, extension]);

    display();
})

window.addEventListener("load", function() {
    display();
})