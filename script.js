const ratio = .2;
const options = {
    root: null,
    rootMargin :'0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio ) {
            entry.target.classList.add('reveal')
            observer.unobserve(entry.target)
        }
    })
    console.log('handleIntersect')
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.unReveal').forEach(function (r) {
    observer.observe(r)
})


// window.onload = function () {
//     window.scrollTo(0, 0);
//   }