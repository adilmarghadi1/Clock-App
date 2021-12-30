 let container = document.getElementById('container')
let container2 = document.getElementById('container2')
 
    // let first = document.getElementById('first');


function quotes() {


fetch(`https://api.quotable.io/random`)
    .then(response => response.json())
    .then(data => {
        const first = document.createElement('h2');
        first.textContent = data.content;
        first.style.margin = "50px";
        first.style.color = "white"
        first.style.fontSize = "1.7em";

        const second = document.createElement('h2')
        second.textContent = data.authorSlug;
        second.style.marginTop='20px';
        second.style.marginLeft = "50px";
        second.style.color = 'white';
        second.style.fontSize = '1.2em';
         let container = document.getElementById('container')

        container.appendChild(first)
        container.appendChild(second)
    })

   .catch(err => {
  
      console.error(err.message);
    });
 

}
    
 
quotes()
 
function dateTimeZone() {
    var container3 = document.getElementById('container3')
    var container4 = document.getElementById('container4')
    fetch(`https://worldtimeapi.org/api/ip`)
    .then(response => response.json())
    .then(dateTime => {
        let first = document.createElement('h1')
        first.textContent = dateTime.timezone;
        first.style.marginLeft = "50px";
        first.style.marginTop = "50px";
        first.style.color = "#ffe8d6";
        container3.appendChild(first)

        let currentTime = new Date();
        let hour = currentTime.getHours()
        let minute = currentTime.getMinutes();

        let third = document.createElement('h1')
        third.textContent = `${hour} H :  ${minute}`;
        third.style.color = "white";
        third.style.marginTop = "90px"
        third.style.textAlign = "center";
        third.style.fontSize = '7em';
        third.style.fontWeight = "1000"
        

        let fourth = document.createElement('h1')
        fourth.textContent = `DAY OF THE YEAR : ${dateTime.day_of_year}`;
        fourth.style.textAlign = "center";
        fourth.style.marginTop = "40px";
        fourth.style.color = "#a8dadc";
        fourth.style.fontWeight = '700'

        let last = document.createElement('h1')
        last.textContent = `DAY OF THE WEEK : ${dateTime.day_of_week}`;
        last.style.textAlign = "center"
        last.style.marginTop = "30px";
        last.style.fontWeight = '700'
        last.style.color = "#ede0d4"
        
        container3.appendChild(third)
        container3.appendChild(last)
        container3.appendChild(fourth)
    })
    .catch(err => {
  
      console.error(err.message);
    });
}

dateTimeZone()