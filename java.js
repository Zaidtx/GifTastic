$(document).ready(function(){
    const animals = ["cat", "dog", "rabbit", "cow", "tiger"];

    function createButtons(){
        $(".animal-buttons").empty();
        for(let i=0; i < animals.length; i++) {
            const button = $("<button>");
            button.addClass("animalButton");
            button.attr("data-type", animals[i]);
            button.text(animals[i]);
            $(".animal-buttons").append(button);
        }
    }
    createButtons();
    $(document).on("click", ".animalButton", function(){
        const name = $(this).attr("data-type");
        console.log("name: " +name);
        
        // url with key
    

        const queryUrl = `https://api.giphy.com/v1/gifs/search?q=${name}&api_key=lce25bMPzWCIbAFmwtBgFtub26pRDd58&limit=10`;
        $.ajax({
            url: queryUrl,
            method: "GET"
        })
        .then(function(response){
            console.log(queryUrl);

            console.log(response);

           
            const animlas = response.data;

            console.log(data);
        })
    })
    $("#add-animal").on("click", function(event){
        event.preventDefault();
        const newAnimal = $("input").val();
        console.log("new Animal: " +newAnimal);
        animals.push(newAnimal);
        createButtons();
    })
})


