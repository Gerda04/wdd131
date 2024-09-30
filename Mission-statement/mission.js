const themeSelector = document.getElementById('theme-selector');
const logo = document.querySelector('byui-log_blue.webp');

themeSelector.addEventListener('change', changeTheme);

function changeTheme(){
    const selectedTheme = themeSelector.value;

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        FooterImage.src = 'byui-logo_white.png'; 
    } else {
        document.body.classList.remove('dark');
        FooterImage.src = 'byui-logo_blue.webp';
    }
}