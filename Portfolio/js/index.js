var btn = document.getElementsByClassName("btn");

for(var i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active");
        var panel= this.nextElementSibling;

        if (panel.style.display === "block") {
                panel.style.display= "none";
        } else{
            panel.style.display="block";    
        }

    });
}