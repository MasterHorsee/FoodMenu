document.querySelectorAll('.whitener').forEach((whitener, index) => {
    whitener.addEventListener('click', () => {
        alert(`You clicked on Whitener ${index + 1}`);
    });
});
