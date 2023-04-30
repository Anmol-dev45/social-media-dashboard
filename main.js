const themeSwitcher = document.querySelector('.toggle');

themeSwitcher.addEventListener('click', switchTheme)

function switchTheme() {
    const p = document.documentElement.style;
    themeSwitcher.classList.toggle('dark');
    if (themeSwitcher.classList.contains('dark')) {
        p.setProperty('--primary-text', 'var(--dark-t-text-1)');
        p.setProperty('--secondary-text', 'var(--dark-t-text-2)');
        p.setProperty('--bg-clr', 'var(--dark-t-bg)');
        p.setProperty('--card-clr', 'var(--dark-t-card)');
        p.setProperty('--top-clr', 'var(--dark-t-top)');

    } else {
        p.setProperty('--primary-text', 'var(--light-t-text-1)');
        p.setProperty('--secondary-text', 'var(--light-t-text-2)');
        p.setProperty('--bg-clr', 'var(--light-t-bg)');
        p.setProperty('--card-clr', 'var(--light-t-card)');
        p.setProperty('--top-clr', 'var(--light-t-top)');
    }
}