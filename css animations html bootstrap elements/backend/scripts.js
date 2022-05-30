function AddTextToList() {
    var input = document.getElementById(myInput).value();
    var li= document.createElement("li");
    var textFromInput=document.createTextNode(input);

    li.appendChild(textFromInput);

    document.querySelector(".myUl").appendChild(li);
}
