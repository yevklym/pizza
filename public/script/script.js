function toggleVisibility(id) {
   var el = document.getElementById(id);

   if (el.style.visibility=="visible") {
          el.style.visibility="hidden";
     }
     else {
          el.style.visibility="visible";
     }
 }
