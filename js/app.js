document.addEventListener("DOMContentLoaded", function() {
    const listArrow = document.querySelector(".list_arrow");
    const li = document.querySelectorAll(".list_panel li");
    const listPanel = document.querySelector(".list_panel");
    const listLabel = document.querySelector(".list_label");
    const color = document.querySelector(".chair");
    const transp = document.querySelector(".transport-value");
    const chairValue = document.querySelector(".chair-value");
    const transport = document.querySelector("#transport");
    const sum = document.querySelector(".sum");
    const test = document.querySelector(".checkbox label");
    let arr = [0];

    let count = () => {
        let reduce = arr.reduce(function(total, item) {
            return total + item;
        });

        sum.innerHTML = `${reduce} PLN`;
    };

    listArrow.addEventListener("click", function(e) {
        if (listPanel.style.display !== "block") {
            listPanel.style.display = "block";
        } else {
            listPanel.style.display = "none";
        }
    });

    li.forEach(e =>
        e.addEventListener("click", function() {
            color.innerHTML = e.innerHTML;
            chairValue.innerHTML = `cena: ${e.dataset.price}`;

            arr.shift();
            arr.unshift(Number(e.dataset.price));
            test.style.display = "block";
            listLabel.innerHTML = e.innerHTML;
            listPanel.style.display = "none";
            count();
        })
    );
    transport.addEventListener("change", function(e) {
        if (!transp.innerHTML) {
            transp.innerHTML = `+ transport: ${transport.dataset.trans} `;
            arr.push(Number(transport.dataset.trans));
        } else {
            transp.innerHTML = "";
            arr.pop();
        }

        count();
    });
});
