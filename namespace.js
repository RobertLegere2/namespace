var ROBERTLEGERE2 = {

    init: function () {
        let newBoxSection = document.createElement("div");
        newBoxSection.className = "box"; //assinging class name
        newBoxSection.textContent = "RobertLegere2";

        let box = document.getElementById("boxes");
        boxes.appendChild(newBoxSection);

        //  let box = document.getElementById("boxes"); //looking for an id instead of class
        newBoxSection.addEventListener("click", function () {

            newBoxSection.style.borderColor = "maroon";
            newBoxSection.style.backgroundColor = "grey";
        });
        
        newBoxSection.addEventListener("mouseover", function() {
            
            target.classList.toggle("highlight");
        });
        
        newBoxSection.addEventListener("mouseout", function() {
            target.classList.toggle("highlight");
            target.removeAttribute('style');
        });
    }

};