document.querySelectorAll(".spoiler-title").forEach(element => 
   element.onclick = ()=>{
    
        element.nextSibling.nextSibling.classList.toggle("active")
        
    }
    
);
