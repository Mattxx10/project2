function toggleFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById("menuextend");
    var z = document.getElementById("dim");
    if (y.style.height === "280px") {
        y.style.height = "0";
        z.style.opacity="0";
    } else {
        y.style.height = "280px";
        z.style.opacity="0.8";
    }
  }
  function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 

  function toggleFunction2(x) {
    x.classList.toggle("change");
    var y = document.getElementById("menuextend-mobile");
    var x = document.getElementsByClassName('line');
    if (y.style.display === "block") {
        y.style.display = "none";
        enableScroll();
    } else {
        disableScroll();
        y.style.display = "block";
    }
  }