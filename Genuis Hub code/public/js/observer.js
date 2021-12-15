var headerSection  = document.querySelector('.banner__header');


let options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach((entry) => {
         if(entry.isIntersecting == false) {
            document.querySelector('.navbar').classList.add('blur');
         } else {
            document.querySelector('.navbar').classList.remove('blur');
         }
    })
}, options)

observer.observe(headerSection);