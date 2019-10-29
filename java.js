// array of animals 
$(document).ready(function(){
    const animals = ["cat", "dog", "rabbit", "cow", "tiger"];

    function createButtons(){
        $(".animal-buttons").empty();
        for(var i=0; i < animals.length; i++){
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


    })

})
