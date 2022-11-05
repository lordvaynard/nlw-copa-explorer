function createGame(player1, hour, player2) {
return `
<li>
<img src="./assets/icons/${player1}.svg" 
alt="Bandeira ${player1}">

<strong> ${hour} </strong>

<img src="./assets/icons/${player2}.svg" 
alt="Bandeira ${player2}">
</li> 
`
}

let delay = -0.5;
function createCard(date, day, games){
  delay = delay + 0.5;
  return `
  <div = class="card" style="animation-delay: ${delay}s">
  <h2>${date} <span>${day}</span></h2>
  <ul>
    ${games}                      
  </ul>
</div>
  `
}

document.querySelector('#cards').innerHTML=
    createCard('24/11', 'quinta', 
      createGame('brazil', '16:00', 'cameroon')+
      createGame('uruguay', '16:00', 'qatar')
    )+
    createCard('21/11', 'sexta', createGame('germany', '18:00', 'serbia'))
