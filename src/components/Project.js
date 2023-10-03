import weatherAppImage from './Assest/Weather App.png'
import crudAppImage from './Assest/Crud App.png'
import productCardImage from './Assest/Product card.png'
import crudAppWithLS from './Assest/Crud App with local storage.png'
import digitalClockImage from './Assest/Digital clock.png'
function Project(){
    return(     
    <div className="project-section">
        <div className="project-heading">
            <h1>My Recent <span>Works</span></h1>
            <p>Here are a few project i've worked on recently.</p>
        </div>
        <div className="projects">
            <div className="project1 project">
                <img src={weatherAppImage} alt="Weather app"/>
                <p className="title">Weather App</p>
                <p className='technolgy-used'>React, API, Jsx </p>
                <p className="description">
                    A weather app is a software application or mobile app that provides users with up-to-date information about the current weather conditions and forecasts for a specific location or multiple locations. </p>
                <div className="btn-group">
                    <a href="https://github.com/Rajgupta152/React-Weather-App"><button className="git-btn btn">Github</button></a>
                    <a href="https://rajgupta152.github.io/React-Weather-App/"><button className="demo-btn btn">Demo</button></a>
                </div>
            </div>
            <div className="project2 project">
                <img src={crudAppImage} alt='Crud App'/>
                <p className="title">Crud App</p>
                <p className='technolgy-used'>React, Jsx </p>
                <p className="description">
                    A crud app is an application that performs four basic operations on a database or data storage system: Create, Read, Update, and Delete. These operations correspond to the fundamental actions that can be performed on data.
                </p>
                <div className="btn-group">
                    <a href="https://github.com/Rajgupta152/React-crud-app"><button className="git-btn btn">Github</button></a>
                    <a href="https://rajgupta152.github.io/React-crud-app/"><button className="demo-btn btn">Demo</button></a>
                </div>
            </div>
            <div className="project3 project">
                <img src={productCardImage} alt="Project3"/>
                <p className="title">Product card (API)</p>
                <p className='technolgy-used'>Html, Css, Javascript, API </p>
                <p className="description">A product card typically refers to the process of retrieving product information from a remote server or external source using an API and then displaying that data in a product card format on a web page or within an application. This is a common scenario in e-commerce websites and applications where product details need to be dynamically loaded and presented to users.</p>
                <div className="btn-group">
                    <a href="https://github.com/Rajgupta152/Pruduct-Card-Fetch-Data-From-Api"><button className="git-btn btn">Github</button></a>
                    <a href="https://rajgupta152.github.io/Pruduct-Card-Fetch-Data-From-Api/"><button className="demo-btn btn">Demo</button></a>
                </div>
            </div>
            <div className="project4 project">
                <img src={crudAppWithLS} alt="Crud app with local storage"/>
                <p className="title">Crud App With Local Storage</p>
                <p className='technolgy-used'>Html, Css, Javascript, Local storage </p>
                <p className="description">A crud app is an application that performs four basic operations on a database or data storage system: Create, Read, Update, and Delete. These operations correspond to the fundamental actions that can be performed on data.</p>
                <div className="btn-group">
                    <a href="https://github.com/Rajgupta152/Crud-App-With-Local-Storage.github.io"><button className="git-btn btn">Github</button></a>
                    <a href="https://rajgupta152.github.io/Crud-App-With-Local-Storage.github.io/"><button className="demo-btn btn">Demo</button></a>
                </div>
            </div>
            <div className="project5 project">
                <img src={digitalClockImage} alt="Digital clock"/>
                <p className="title">Digital Clock</p>
                <p className='technolgy-used'>Html, Css, Javascript</p>
                <p className="description">A digital clock is a web-based application that displays the current time in a digital format, typically with hours, minutes, and seconds, and updates in real-time.Clocks can be used in sites where time is the main concern like some booking sites or some app showing arriving times of train, buses, flights, etc. </p>
                <div className="btn-group">
                    <a href="https://github.com/Rajgupta152/digiclock.github.io"><button className="git-btn btn">Github</button></a>
                    <a href="https://rajgupta152.github.io/digiclock.github.io/"><button className="demo-btn btn">Demo</button></a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Project;