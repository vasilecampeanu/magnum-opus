// On page load
$(window).on('load', function () {
    setTimeout(removeLoader, 1000); // Wait for page load PLUS one second
});

// Remove loading animation
function removeLoader() {
    $('#loading').fadeOut(350, function() {
        $('#loading').remove();
    });
    $('#site-wrapper').css('opacity', '1');
    body.classList.remove('hide-overflow');
}

// Highlight
const links = document.getElementsByTagName('a')
const current_url = location.href;
const post_page = "/posts";

console.log("Post page: " + current_url.includes(post_page));

if (current_url.includes(post_page)) {
    const blog_url = current_url.substring(0, current_url.lastIndexOf(post_page)) + '/';

    for (const link of links) {
        if (link.href === blog_url) {
            link.classList.add('active')
        }
    }

    // Initializa TOC Bot
    tocbot.init({
        // Where to render the table of contents.
        tocSelector: '.table-of-contet',
        
        // Where to grab the headings to build the table of contents.
        contentSelector: '.toc-content-selector',
        
        // Which headings to grab inside of the contentSelector element.
        headingSelector: 'h1, h2, h3, h4, h5, h6',
        
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: true,

        // Include the HTML markup from the heading node instead of just including the textContent.
        includeHtml: true,

        // Create unorder lists
        orderedList: false,

        // How many heading levels should not be collapsed.
        collapseDepth: -1,
    });
}

// This ill only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function () {
    // Enable blob background animation
    var current = window.location.pathname;

    if ((current != "/") && (current != "/ro/")) {
        console.log("Not on home page!");
        document.getElementById("desktop-navbar").style.backgroundColor = "var(--background-primary)";
    }

    // Play animation only when on main page
    if (current == '/') 
    {
        blobBackgroundAnimation();
    }

    // Theme
    ThemeSwitcher();

    // Navigation bar
    if($(document).height() > $(window).height())
    {
        HideNavbar();
    }
});

// Blob animation
function blobBackgroundAnimation() {
    var tl = new TimelineMax({
        yoyo: true,
        repeat: -1,
    });

    tl.to(".blob", 3, {
        attr: 
        {
            d: "M470.3 133c45.8 42.5 75.3 104.8 60.3 152-15 47.3-74.4 79.6-120.2 110.7-45.8 31.2-78.1 61.3-116.5 67.4-38.4 6.1-83-11.7-110.2-42.8-27.1-31.2-36.9-75.8-44.7-128.1-7.8-52.3-13.5-112.4 13.6-154.9 27.2-42.5 87.3-67.4 148.5-68.5 61.1-1 123.4 21.7 169.2 64.2z",
        }
    }).to(".blob", 3, {
        attr: 
        {
            d: "M452.9 141.3c41.2 47 67.6 102.8 56.3 147.4-11.3 44.5-60.4 77.8-101.6 120.6-41.1 42.8-74.4 95.3-117.3 104.9-42.9 9.7-95.4-23.4-122.1-66.2-26.7-42.9-27.4-95.4-32.6-153.2-5.2-57.7-14.8-120.7 11.9-167.7 26.6-47 89.6-78 149-74.5 59.4 3.5 115.2 41.7 156.4 88.7z",
        }
    }).to(".blob", 3, {
        attr: 
        {
            d: "M423.5 172.8c30.2 33.9 43.8 80.5 42.9 126.3-.9 45.7-16.5 90.5-46.7 113.1-30.1 22.7-74.9 23.3-124.8 28.3-49.8 5.1-104.7 14.7-146.6-8-41.8-22.7-70.6-77.6-57.8-119.8 12.7-42.2 66.9-71.6 108.7-105.5 41.9-33.8 71.3-72 109.4-80.6 38.1-8.6 84.7 12.4 114.9 46.2z",
        }
    }).to(".blob", 3, {
        attr: 
        {
            d: "M455.4 151.1c43.1 36.7 73.4 92.8 60.8 136.3-12.7 43.5-68.1 74.4-111.3 119.4-43.1 45-74 104.1-109.8 109-35.9 5-76.7-44.2-111.8-89.2-35.2-45-64.7-85.8-70.8-132.6-6-46.8 11.6-99.6 46.7-136.3 35.2-36.6 88-57.2 142.4-58.8 54.5-1.7 110.6 15.6 153.8 52.2z",
        },
    });
}

// Theme
const defaultTheme = 'dark';
const currentTheme = localStorage.getItem('theme') ?? defaultTheme;

function ThemeSwitcher(params) {

    if (currentTheme)
    {
        document.documentElement.setAttribute('saved-theme', currentTheme);
    }

    $(document).keydown(function(event) {
        if (event.ctrlKey && (event.which === 66)) 
        {
            console.log(event.which);
            console.log(String.fromCharCode(event.which));
    
            // Switch theme
            document.documentElement.setAttribute('saved-theme', 'dark');
            localStorage.setItem('theme', 'dark');

            // Toggle checkbox
            const checkbox = document.getElementById('darkmode-toggle');
            if(!checkbox.checked)
                checkbox.checked = !checkbox.checked;
            console.log(checkbox.checked);
        }
    
        if (event.ctrlKey && (event.which === 76)) 
        {
            console.log(event.which);
            console.log(String.fromCharCode(event.which));
    
            // Switch theme
            document.documentElement.setAttribute('saved-theme', 'light');
            localStorage.setItem('theme', 'light');
            
            const checkbox = document.getElementById('darkmode-toggle');
            console.log(checkbox.checked);

            if(checkbox.checked)
            {
                checkbox.checked = !checkbox.checked;
            }
        }
    });
}

const switchTheme = (e) => {
    if (e.target.checked) 
    {
        document.documentElement.setAttribute('saved-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } 
    else 
    {
        document.documentElement.setAttribute('saved-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // Darkmode toggle
    const toggleSwitch = document.querySelector('#darkmode-toggle');

    // listen for toggle
    toggleSwitch.addEventListener('change', switchTheme, false);

    if (currentTheme === 'dark') 
    {
        toggleSwitch.checked = true;
    }
});

// Mobile navbar
var burger = document.getElementById('burger'),
    nav    = document.getElementById('mobile-navbar');

burger.addEventListener('click', function(e) {
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
    body.classList.toggle('hide-overflow');
    var navbar_color = document.getElementById('desktop-navbar').classList.toggle('navbarBackgroundColor');
});

// Navigation bar hide on scroll down, show on scroll up
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function HideNavbar() {
    const body = document.body;
    let lastScroll = 0;
    
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
    
        if (currentScroll <= 0)
        {
            body.classList.remove("scroll-up");
            return;
        }
    
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) 
        {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
            var language_dropdown = document.getElementById("dropdown-language-content");
            if (hasClass(language_dropdown, 'show')) {
                language_dropdown.classList.toggle("show");
            }
        } 
        else if (currentScroll < lastScroll && body.classList.contains("scroll-down")) 
        {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }
    
        lastScroll = currentScroll;
    });
}

// Language switch
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) 
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        
        for (var i = 0; i < dropdowns.length; i++) 
        {
            var openDropdown = dropdowns[i];
            
            if (openDropdown.classList.contains('show')) 
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function dropDownFunction() 
{
    document.getElementById("dropdown-language-content").classList.toggle("show");
}