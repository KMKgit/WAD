window.onload = function() {



    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('res/json/myjson.json')
        .then((response) => response.json()) // returns javascript usable object
        .then(json => {
            // Parent <div> for all posts
            let parentDiv = document.createElement("div");

            // Iterate through all the posts
            json.forEach(post => {
                // For each post
                // Create a div
                let postDiv = document.createElement("div");
                postDiv.className = "post";
                // Create a <h3> element
                let postTitle = document.createElement("h3");
                postTitle.className = "header";
                // Add the post.title to the h3
                postTitle.innerHTML = post.title;
                // Create a <p> element
                let postBody = document.createElement("p");
                postBody.className = "body";
                // Add the post.body to the <p> element
                postBody.innerHTML = post.body;
                // Add both <h3> and <p> to the post <div>
                postDiv.appendChild(postTitle);
                postDiv.appendChild(postBody);
                // Add the post <div> to the parent <div>
                parentDiv.appendChild(postDiv);

            });
            document.body.appendChild(parentDiv)<
            console.log(json);

        })

        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
        })

        .finally(() => {
            let footer = document.createElement("footer");
            date = new Date().toLocaleString()
            footer.innerText = date;
            document.body.appendChild(footer);
        })

}