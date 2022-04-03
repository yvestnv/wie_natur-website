function ready(callback) {
    // in case the document is already rendered
    if (document.readyState !== 'loading') callback();
    // modern browsers
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
    // IE <= 8
    else document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') callback();
    });
}

// // Scroll - Position
// var scrollPos = 0;
// direction = ' ';
// // adding scroll event
// window.addEventListener('scroll', () => {
//     // detects new state and compares it with the new one
//     if ((entry.target.getBoundingClientRect()).top > scrollPos) {
//         direction = 'UP';
//         console.log(direction);
//     } else {
//         direction = 'DOWN';
//         console.log(direction);
//     }
//     // saves the new position for iteration.
//     scrollPos = (entry.target.getBoundingClientRect()).top;
// });

ready(function() {


    const sections = document.querySelectorAll('[data-section]');
    try {
        let observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {

                });
            }, {
                root: document,
                top: 0,
                threshold: 0.2
            });
        sections.forEach(section => {
            observer.observe(section);
        });
    } catch (e) {}
});