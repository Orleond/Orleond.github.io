const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');
    
    const getData = (nameLink) => {        
        fetch('/db/db.json')
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem(nameLink, JSON.stringify(data));
        });
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData(link.innerHTML);
        });
    });
};

getGoods();