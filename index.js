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
