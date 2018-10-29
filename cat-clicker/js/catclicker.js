var catList = {
    "cats": [
        { "name":"Luke", "counter":0, "imageName":"luke.jpg" },
        { "name":"Leia", "counter":0, "imageName":"leia.jpg" },
        { "name":"Han", "counter":0, "imageName":"han.jpg" },
        { "name":"Chewie", "counter":0, "imageName":"chewie.jpg" },
        { "name":"Lando", "counter":0, "imageName":"lando.jpg" }
    ]
 };

createCatGallery(catList);

function createCatGallery(list){

    // crea el menu
    htmlCode = "<ul>";
    for (i=0; i<list.cats.length; i++){
        htmlCode += `<li class="catLink" data-id="${i}">${list.cats[i].name}</li>`;
    };
    htmlCode += "</ul>";
    document.getElementById("cat-list").innerHTML = htmlCode;

    // muestra la foto correspondiente
    for (i=0; i<list.cats.length; i++){
        document.querySelectorAll(".catLink")[i].addEventListener('click', function(e){
            thisCatId=e.target.getAttribute("data-id");
            htmlCode = `<div>
            <p>This is ${list.cats[thisCatId].name}</p>
            <img id="cat-image" src="img/${list.cats[thisCatId].imageName}">
            <p>You've clicked on ${list.cats[thisCatId].name} <span id="click-counter">${list.cats[thisCatId].counter}</span> time(s).</p>
            </div>`;
            document.getElementById("cat-box").innerHTML = htmlCode;

            // controla los clicks que se hacen en cada gato
            document.getElementById('cat-image').addEventListener('click', function(){
                list.cats[thisCatId].counter++;
                document.getElementById('click-counter').innerHTML = list.cats[thisCatId].counter;
            }, false);

        }, false);
    };
};

