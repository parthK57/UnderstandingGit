const posts = [
  { title: "Post 1", body: "Body 1" },
  { title: "Post 2", body: "Body 2" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

function create4thPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

create4thPost(
  { title: "Post 4", body: "Body 4" },
  createPost({ title: "Post 3", body: "Body 3" }, getPosts)
);
