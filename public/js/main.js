
$(document).ready(function() {
    
    $(".navbar-toggler").on("click", function() {
      $(".navbar-collapse").toggleClass("show");
    });
  });

  function deleteRecipe(){
    let btn = document.getElementById('deleteBtn')
    let id = btn.getAttribute('data-id')
  
    axios.delete('/recipes/delete/' + id)
    .then( (res)=> {
      console.log(res.data)
      alert('recipe was deleted')
      window.location.href = '/recipes'
    })
    .catch((err)=> {
      
      console.log(err)
    })
  }