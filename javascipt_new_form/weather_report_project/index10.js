const weatherform = document.querySelector(".weatherform");
const inputtag = document.querySelector(".inputtag");
const container = document.querySelector(".container");
const apikey = "194a869b8d39c9f14e42f2a9f33b8d61";

weatherform.addEventListener("submit",  async event =>{
    event.preventDefault();

    const city = inputtag.value;

    if(city){
        try{
            const weatherdata = await getweatherdata(city);
            displayweatherinfo(weatherdata);

        }
        catch(error){
            console.error(error);
            displayerror(error);

        }



    }
    else{
        displayerror("please select the  city");
    }


const weatherdata = await getweatherdata(city);

console.log(weatherdata);         

const lat = weatherdata.coord.lat;
const lon = weatherdata.coord.lon;

const map = L.map("map").setView([lat, lon], 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.marker([lat, lon])
    .addTo(map)
    .bindPopup(city)
    .openPopup();





});

async function getweatherdata(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


    const response = await fetch(apiUrl);


    if(!response.ok){
        throw new Error("Could not fetch the weather Data");
        
    }
    return await response.json();
    

};


function displayweatherinfo(data){

    const {name: city,
           main: {temp,humidity},
           weather:[{description,id}]} = data;

    container.textContent = "";
    container.style.display = "flex";
    
    const citydisplay = document.createElement("h1");
    const tempdisplay= document.createElement("p");
    const humdisplay = document.createElement("p");
    const descdisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    citydisplay.textContent = city;
    tempdisplay.textContent = `${(temp -273.15).toFixed(1)}°C`;
    humdisplay.textContent = `humidity: ${humidity}%`;
    weatherEmoji.textContent =getweatherEmoji(id);
    descdisplay.textContent = description.toUpperCase(0);



    citydisplay.classList.add("citydisplay");
    tempdisplay.classList.add("tempdisplay");
    humdisplay.classList.add("humdisplay");
    weatherEmoji.classList.add("weatherEmoji");
    descdisplay.classList.add("descdisplay");




    container.appendChild(citydisplay);
    container.appendChild(tempdisplay);
    container.appendChild(humdisplay);
    container.appendChild(weatherEmoji);
    container.appendChild(descdisplay);

};
function getweatherEmoji(weatherid){

    switch(true){
        case(weatherid >= 200 && weatherid < 300):
        return "🌧️";
        case(weatherid >=300 && weatherid < 400):
        return "🌧️";
        case(weatherid >=500 && weatherid < 600):
        return "🌧️";
        case(weatherid >=600 && weatherid < 700):
        return "❄️";
        case(weatherid >=700 && weatherid < 800):
        return "🌀";
        case(weatherid === 800):
        return "☀️";
        case(weatherid >=801 && weatherid < 809):
        return "☁️";
        
        
        

    }

};
function displayerror(message){
    const errordisplay = document.createElement("p");
    errordisplay.textContent = message;

    errordisplay.classList.add("displayerror");

    container.textContent = "";
    container.style.display = "flex";
    container.appendChild(errordisplay);

};
