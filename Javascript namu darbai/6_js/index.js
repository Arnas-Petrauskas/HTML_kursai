document.querySelector("#star").addEventListener("submit", function(event){
    event.preventDefault();
    pyramid();
    })

function pyramid(){
    x = document.querySelector("#number").value;
    const ul_item = document.querySelector("ul");
    for (i = 1; i <= x; i++) {
        let li_item = document.createElement("li");
        let text = document.createTextNode("*".repeat(i));
        li_item.appendChild(text);
        ul_item.appendChild(li_item);
    }

}
