// JavaScript Document

document.getElementById("toggleTechnical").addEventListener("click", function() {
    toggleSidebar("technical");
});

document.getElementById("toggleExpressive").addEventListener("click", function() {
    toggleSidebar("expressive");
});

function toggleSidebar(side) {
    let technicalSidebar = document.getElementById("technical");
    let expressiveSidebar = document.getElementById("expressive");
    let technicalButton = document.getElementById("toggleTechnical");
    let expressiveButton = document.getElementById("toggleExpressive");

    if (side === "technical") {
        technicalSidebar.classList.toggle("open");
        expressiveSidebar.classList.remove("open");

        // Move the button when sidebar opens
        technicalButton.style.left = technicalSidebar.classList.contains("open") ? "90vw" : "0";
        expressiveButton.style.right = "0"; // Reset expressive button position
    } 
    
    if (side === "expressive") {
        expressiveSidebar.classList.toggle("open");
        technicalSidebar.classList.remove("open");

        // Move the button when sidebar opens
        expressiveButton.style.right = expressiveSidebar.classList.contains("open") ? "90vw" : "0";
        technicalButton.style.left = "0"; // Reset technical button position
    }
}

// Synchronize scrolling between main content and sidebars
document.addEventListener("DOMContentLoaded", function () {
    let mainContent = document.querySelector(".container");
    let sidebarContent = document.querySelectorAll(".sidebar-content"); 

    let isSyncingMain = false;
    let isSyncingSidebar = false;

    // Sync sidebar scrolling with main content
    mainContent.addEventListener("scroll", function () {
        if (!isSyncingMain) {
            isSyncingSidebar = true;
            sidebarContent.forEach(sidebar => {
                sidebar.scrollTop = mainContent.scrollTop;
            });
            isSyncingSidebar = false;
        }
    });

    // Sync main content scrolling with sidebar
    sidebarContent.forEach(sidebar => {
        sidebar.addEventListener("scroll", function () {
            if (!isSyncingSidebar) {
                isSyncingMain = true;
                mainContent.scrollTop = sidebar.scrollTop;
                isSyncingMain = false;
            }
        });
    });
});

