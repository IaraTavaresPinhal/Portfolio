// JavaScript Document

document.querySelector('.toggle-vertical').addEventListener('click', function() {
    const vertical = document.querySelector('.vertical-guidelines');
    if (vertical.style.display === "none" || vertical.style.display === "") {
        vertical.style.display = "block";
        // Add lines dynamically
        if (!vertical.innerHTML.trim()) {
            for (let i = 0; i < 7; i++) {
                let line = document.createElement('div');
                vertical.appendChild(line);
            }
        }
    } else {
        vertical.style.display = "none";
    }
});

document.querySelector('.toggle-horizontal').addEventListener('click', function() {
    const horizontal = document.querySelector('.horizontal-guidelines');
    horizontal.style.display = (horizontal.style.display === "none" || horizontal.style.display === "") ? "block" : "none";
});
