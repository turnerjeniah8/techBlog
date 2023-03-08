const editFormHandler = async function(event) {
    event.preventDefault();
  
    const titleEl = document.getElementById('post-title');
    const postId = document.getElementById('post-id')  
    const bodyEl = document.getElementById('post-body');
   
  
    fetch("/api/post/" + postId.value, {
        method: "put", 
        body: JSON.stringify({
            title: titleEl.value,
            body: bodyEl.value
        }),
        headers: { "Content-Type": "application/json"}
    })
        .then(function() {
            document.location.replace("/dashboard");
        })
        .catch(err => console.log(err))
  }
  
  document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);