
    function openNav() {
    document.getElementById("sidepanel").style.width = "250px";
    }

    function closeNav() {
    document.getElementById("sidepanel").style.width = "0";
    }

   
    var ac = document.getElementsByClassName("trigger");
    var i;
    
    for (i = 0; i < ac.length; i++) {
      ac[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
    
        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
      });
    }
   