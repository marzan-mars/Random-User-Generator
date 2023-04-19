const generbtn = document.querySelector('button');
const infoPerson = document.getElementById('info');


generbtn.addEventListener('click', ()=> {
  fetch('https://randomuser.me/api/')
  .then((res)=> res.json())
  .then((data) => {
    const user = data.results[0];
    infoPerson.innerHTML = 
  `     <div id="left-image">
       <img src="${user.picture.large}" alt="#404">
     </div>
     <div id="right-box">
       <p> <strong> Name: </strong>${user.name.first} ${user.name.last} </p>
       <p> <strong> Email: </strong>${user.email} </p>
       <p> <strong> Phone: </strong>${user.phone} </p>
       <p> <strong> Location: </strong>${user.location.city} </p>
       <p> <strong> Age: </strong>${user.dob.age} </p>
       <p> <strong> Gender: </strong>${user.gender} </p>
     </div>
   </div>`
  })
})