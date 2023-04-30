//Toggle Menu
const toggleMenu = document.querySelector('#toggle-menu');
const toggleMenuIcon = toggleMenu.querySelector('img');
const menu = document.querySelector('#menu');

toggleMenu.addEventListener('click',()=>{
    menu.classList.toggle('translate-y-[-200%]');
    changeMenuIcon();
})

//close menu when click Menu list
const navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach(navlink =>{
    navlink.addEventListener('click',()=>{
        menu.classList.add('translate-y-[-200%]');
        changeMenuIcon();
    })
})
function changeMenuIcon(){
    const isContainTranslate = menu.classList.contains('translate-y-[-200%]');
    const icon = isContainTranslate ? 'icon-menu':'icon-close';
    toggleMenuIcon.src = `./images/icons/${icon}.svg`;
}

// Toggle Theme
const html = document.querySelector('html');
const toggleTheme = document.querySelector('#toggle-theme');
const toggleThemeIcon = toggleTheme.querySelector('img');

toggleTheme.addEventListener('click',()=>{
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    const themeIcon = isDark ? 'light' : 'dark';
    toggleThemeIcon.src = `./images/icons/icon-${themeIcon}.svg`; 
})

