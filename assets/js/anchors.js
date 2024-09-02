const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headings.forEach(heading => {
    const id = heading.parentElement.id;
    const level =  heading.parentElement.classList[0];

    const anchor = document.createElement('a');
    if(level == 'level1') {
        anchor.href = location.pathname;
    }
    else {
        anchor.href = location.pathname+`#${id}`;
    }
    anchor.textContent = '§';

    heading.insertBefore(anchor, heading.firstChild);
    anchor.classList.add('heading-anchor');
});