async function getPosts() {
  const post = await fetch("http://localhost:3000/posts");
  const finalPost = await post.json();
  console.log(finalPost);
  showPosts(finalPost);
}


async function showPosts(myData){
  const myDiv = document.querySelector(".my_js_cards");
  for (let i = 0; i < myData.length; i++) {
  myDiv.innerHTML += `
  <div class="card_${i}">
  <img src="${myData[i].image}"/>
  <h4>${myData[i].title}</h4>
  <p>${myData[i].description}</p>
  <a>${myData[i].link}</a>
  </div>
  `
  }
}

getPosts()

/* GRACIAS JERALD POR LA AYUDA*/
let getInfoVisitor ="http://localhost:3000/messages"
async function postInfoVisitor(event
  ) {
    event.preventDefault();
  const data = {
    fullname: document.querySelector("#field_name").value,
    email:document.querySelector("#field").value,
    phone:document.querySelector("#phone_field").value,
    body:document.querySelector("#write_your_message").value,
  };

const info = await fetch(getInfoVisitor, {
  method:"POST",
  headers : {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
const final_info_visitor = await info.json();
console.log(final_info_visitor)
}

document.addEventListener('submit', postInfoVisitor);