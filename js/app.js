document.addEventListener("DOMContentLoaded", function() {
    const listArrow = document.querySelectorAll(".list_arrow");
    const color = document.querySelector(".color");
    const transp = document.querySelector(".transport-value");
    const colorVal = document.querySelector(".color-value");
    const transport = document.querySelector("#transport");
    const sum = document.querySelector(".sum");

    listArrow.forEach(item =>
        item.addEventListener("click", function(e) {
            if (e.srcElement.nextElementSibling.style.display !== "block") {
                e.srcElement.nextElementSibling.style.display = "block";
            } else {
                e.srcElement.nextElementSibling.style.display = "none";
            }
        })
    );
    const li = document.querySelectorAll(".list_panel li");
    li.forEach(e =>
        e.addEventListener("click", function() {
            console.log(e.innerHTML);
            color.innerHTML = e.innerHTML;
            colorVal.innerHTML = `cena: ${e.dataset.price}`;
            sum.innerHTML = e.dataset.price;
        })
    );
    transport.addEventListener("click", function(e) {
        if (!transp.innerHTML) {
            transp.innerHTML = `+ transport: ${transport.dataset.trans}`;
        } else {
            transp.innerHTML = "";
        }
    });
});
