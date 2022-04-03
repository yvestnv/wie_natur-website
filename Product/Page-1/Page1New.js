let observedElements = document.querySelectorAll('.inview-element'); 

const options = { 
  threshold: 0.2 
}

const inViewCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { 
      entry.target.classList.add('inview');
    } else{
        entry.target.classList.remove('inview')
    }
  });
}
let observer = new IntersectionObserver(inViewCallback,options); 

observedElements.forEach(element => {
  observer.observe(element) 
});