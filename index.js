const data = [
    {
        id: 1,      
        title: 'Calculator App',
        category: 'javascript',
        tool: 'html, context api',
        detail: 'Mary had a little lamb little lamb little lamb mary had a littlr lamb Mary had a little lamb little lamb little lamb mary had a littlr lamb whose fur was whiye as snow',
        img:'image/Untitled.png',
        website: 'https://google.com',
        github: 'https://github.com'
     
    },

    {
        id: 2,
        title: 'Google',
        category: 'reactjs',
        tool: 'html, css, bootstrap',
        detail: 'Mary had a little lamb little lamb little lamb mary had a littlr lamb Mary had a little lamb little lamb little lamb mary had a littlr lamb whose fur was whiye as snow',
        img:'image/Untitled.png',
        website: 'https://google.com',
        github: 'https://github.com'
    },

    {
        id: 3,
        title: 'Twitter App',
        category: 'reactjs',
        tool: 'html, css, bootstrap',
        detail: 'Mary had a little lamb little lamb little lamb mary had a littlr lamb Mary had a little lamb little lamb little lamb mary had a littlr lamb whose fur was whiye as snow',
        img:'image/Untitled.png',
        website: 'https://google.com',
        github: 'https://github.com'
    },

    {
        id: 4,
        title: 'E Commerce Website',
        category: 'wordpress',
        tool: 'html, css, bootstrap',
        detail: 'Mary had a little lamb little lamb little lamb mary had a littlr lamb Mary had a little lamb little lamb little lamb mary had a littlr lamb whose fur was whiye as snow',
        img:'image/Untitled.png',
        website: 'https://google.com',
        github: 'https://github.com'
    },

    {
        id: 5,
        title: "Builder Story",
        category: 'javascript',
        tool: 'html, css, bootstrap',
        detail: 'Mary had a little lamb little lamb little lamb mary had a littlr lamb Mary had a little lamb little lamb little lamb mary had a littlr lamb whose fur was whiye as snow',
        img:'image/Untitled.png',
        website: 'https://google.com',
        github: 'https://github.com'
    },
]


// SELECTORS
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')
const linksContainer = document.querySelector('.links-container')
const nav = document.querySelector('.nav-center');
const scrollLinks = document.querySelectorAll('.scroll-link');
const topLink = document.querySelector('.scroll-top');
const articleContainer = document.querySelector('.article-container');
const tabs = document.querySelectorAll('.tab')

// EVENT LISTENERS
navToggle.addEventListener('click', toggleNavBar)
window.addEventListener('scroll', showFixedNav)
topLink.addEventListener('click', scrollToTop)
window.addEventListener('DOMContentLoaded', displayPortfolio(data))

// Setting NavBar to collapse initially
linksContainer.style.height = 0

scrollLinks.forEach(link => {
    link.addEventListener('click', e => {

        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
       
        const element = document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
    
        let position = element.offsetTop ;
    
    
        window.scrollTo({
            left: 0, top: position,
    
        })
    
        linksContainer.style.height = 0
    })
})


// FUNCTIONS
function toggleNavBar() {
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height + 60;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linkHeight}px`
    }
    else 
    {
        linksContainer.style.height = 0
    }

}

function showFixedNav(){
    const navHeight = nav.getBoundingClientRect().height

    if (window.pageYOffset > navHeight) {
        nav.classList.add('fixed-nav')
    }
    else {
        nav.classList.remove('fixed-nav')

    }


    if (window.pageYOffset > 500 ) {
        topLink.classList.add('show-top')
    } else {
        topLink.classList.remove('show-top')
    }

     
}


function scrollToTop(){
    window.scrollTo({
        left: 0, top: 0,
    })
}

function displayPortfolio(param){
    let work = param.map(item => {
        return `<article>
                    <img src=${item.img} alt=${item.title} >
                    <div class="container">
                        <p>${item.title}</p>
                    </div>
                    <div class="overlay">
                        <div class="tools"><p>${item.tool}</p></div>
                        <div class="detail"><p>${item.detail}</p></div>
                        <div class="container2">
                            <a  target="_blank" href=${item.website}><i class="far fa-eye"> view</i></a>
                            <a target="_blank" href=${item.github}> <i class="fas fa-code"></i> code</a>                    
                        </div>
                    </div>
                </article>`
    }).join('')


    articleContainer.innerHTML = work
}

tabs.forEach(tab => {
    tab.addEventListener('click', function(e){

        tabs.forEach(tablet =>{
            tablet.classList.remove('tab-select');
        })

        if (!tab.classList.contains('tab-select')) {
            tab.classList.add('tab-select');
        }

        const tabId = e.currentTarget.dataset.id;

        const filterCategory = data.filter(val =>{
            if(val.category === tabId) {
                return val;
            }
        })


        if (tabId === "all") {
            displayPortfolio(data);
        } else {
            displayPortfolio(filterCategory);
        }



    })
});

// window.addEventListener('load', function(){
//     articleContainer.classList.add('tran')
// })

