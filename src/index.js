console.log('%c HI', 'color: firebrick')

window.addEventListener('load', () => {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogBreeds = document.getElementById("dog-breeds");

fetch (imgUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        const images = data.message;
        const container = document.getElementById ("dog-image-container");
        images.forEach( imageUrl => {
            const img = document.createElement("img");
            img.src = imageUrl;
            container.appendChild(img);
        });
    })
    .catch(function (error){
        alert("Bad things!");
        console.log(error.message);
    });

fetch (breedUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        const breeds = data.message;

        for (const breed in breeds) {
            const li = document.createElement("li");
            li.textContent = breed;

            li.addEventListener("click", () => {
                li.style.color = "blue";
                dogBreeds.appendChild(li);
            });
        }

    })
    .catch(function(error){
        alert("Uh oh!");
        console.log(error.message);
    })
});
