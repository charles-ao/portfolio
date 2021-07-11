const data = [
    {
        id: 101,      
        title: 'Microsoft Homepage Clone',
        category: 'reactjs',
        tool: 'react, react-dom, contextapi',
        detail: 'A web clone of the Microsoft Official Homepage',
        img:'image/microsoft.png',
        website: 'https://adedunmola-microsoft-homepage-clone.netlify.app',
        github: 'https://github.com/charles-ao/microsoft-homepage-clone'
    },

    {
        id: 1,      
        title: 'Restaurant Landing Page',
        category: 'javascript',
        tool: 'Html, CSS, Bootstrap',
        detail: 'A Restaurant/Eatery Landing Page created with the Bootstrap Styling frame work. U.I Design from S.M Sowkot',
        img:'image/restaurant.png',
        website: 'https://charles-ao.github.io/restaurant_landing_page',
        github: 'https://github.com/charles-ao/restaurant_landing_page'
     
    },

    {
        id: 2,
        title: 'CreateX Agency Landing Page',
        category: 'reactjs',
        tool: 'react, react-dom, styled-components',
        detail: 'A typical agency Landing Page developed with React',
        img:'image/createx.png',
        website: 'https://createx.netlify.app',
        github: 'https://github.com/charles-ao/createx'
    },

    {
        id: 3,
        title: 'Weather App',
        category: 'javascript',
        tool: 'Html, CSS, jQuery, API',
        detail: 'A Weather forecast application to that shows the current Weather temperature with other details with daily and hourly forecasts',
        img:'image/weather.png',
        website: 'https://charles-ao.github.io/weather-app',
        github: 'https://github.com/charles-ao/weather-app'
    },

    {
        id: 4,
        title: 'E-STORE',
        category: 'reactjs',
        tool: 'react, react-dom, contextAPI, styled components',
        detail: 'An E-Commerce web application developed with ReactJS, to show products and add products to cart prior to purchase. ',
        img:'image/estore.png',
        website: 'https://e-store-react-adedunmola.netlify.app',
        github: 'https://github.com/charles-ao/e-store-with-React'
    },

    {
        id: 5,
        title: "To-Do App",
        category: 'javascript',
        tool: 'Html, CSS, JavaScript',
        detail: 'A CRUD productivity Application to manage tasks. Add, Edit, Mark as complete and Remove Tasks',
        img:'image/todo.png',
        website: 'https://charles-ao.github.io/my-todo-list',
        github: 'https://github.com/charles-ao/my-todo-list'
    },

    {
        id: 6,
        title: "BintaBadmus",
        category: 'others',
        tool: 'Wordpress, Elementor, wooCommerce',
        detail: 'An E-commerce website for BintaBadmus, a major scarf and modest dress distributor in Nigeria',
        img:'image/bintabadmus.png',
        website: 'https://bintabadmus.com',
        github: 'https://bintabadmus.com'
    },

    {
        id: 7,
        title: "Data Visualization",
        category: 'others',
        tool: 'Html, CSS, D3.js, topoJSON',
        detail: 'Dynamic and Interactive Bar-chart, Scatterplot and Choropleth Charts created with Data Driven Documents (D3.JS)',
        img:'image/datavisual.png',
        website: 'https://charles-ao.github.io/data-visualization',
        github: 'https://github.com/charles-ao/data-visualization'
    },

    {
        id: 8,
        title: "Login Authenticator",
        category: 'reactjs',
        tool: 'React, Firebase',
        detail: 'A email and password login page created with firebase authentication',
        img:'image/login.png',
        website: 'https://ade-login-authenticator.netlify.app',
        github: 'https://github.com/login-authenticator'
    },

    {
        id: 9,
        title: "Calculator",
        category: 'javascript',
        tool: 'Html, CSS, JavaScript',
        detail: 'A simple calculator with basic Addition, Substraction, Multiplication and Division operations',
        img:'image/calculator.png',
        website: 'https://charles-ao.github.io/simple_calculator',
        github: 'https://github.com/charles-ao/simple_calculator'
    },

    {
        id: 10,
        title: "Emoji Thesaurus",
        category: 'reactjs',
        tool: 'react, API',
        detail: 'A library that holds hunndreds of emojis and their respective names and details',
        img:'image/emoji.png',
        website: 'https://emoji-thesaurus.netlify.app',
        github: 'https://github.com/charles-ao/emoji-thesaurus'
    },

    {
        id:11,
        title: "Simon",
        category: 'javascript',
        tool: 'Html, CSS, JavaScript',
        detail: 'Simon is a game of memory skill that creates a series of tones and lights and requires the player to repeat the sequence',
        img:'image/simon.png',
        website: 'https://charles-ao.github.io/simonGame',
        github: 'https://github.com/charles-ao/simonGame'
    },

    
    {
        id: 12,
        title: "Tic-Tac-Toe",
        category: 'javascript',
        tool: 'Html, CSS, JavaScript',
        detail: 'A game for two players, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner.',
        img:'image/tictactoe.png',
        website: 'https://charles-ao.github.io/tic-tac-toe',
        github: 'https://github.com/charles-ao/tic-tac-toe'
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

