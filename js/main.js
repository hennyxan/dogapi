document.addEventListener("DOMContentLoaded", function () {
    var breedSelect = document.getElementById("breedSelect");
    var dogImageContainer = document.getElementById("dogImageContainer");
  
    var apiUrl = "https://dog.ceo/api/breeds/list/all";
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        var breeds = Object.keys(data.message);
  
        breeds.forEach(function (breed) {
          var option = document.createElement("option");
          option.value = breed;
          option.text = breed;
          breedSelect.appendChild(option);
        });
  
        
        breedSelect.addEventListener("change", function () {
          var selectedBreed = breedSelect.value;
          displayDogImage(selectedBreed);
        });
      })
      .catch(error => console.error("Ошибка при запросе к API:", error));
  
    function displayDogImage(breed) {
      
      dogImageContainer.innerHTML = "";
  
      var breedImageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
  
      fetch(breedImageUrl)
        .then(response => response.json())
        .then(data => {
          var imageUrl = data.message;
  
          
          var img = document.createElement("img");
          img.src = imageUrl;
          img.alt = breed + " dog";
          dogImageContainer.appendChild(img);
        })
        .catch(error => console.error("Ошибка при запросе к API для изображения:", error));
    }
  });