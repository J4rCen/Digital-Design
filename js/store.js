const doc = document;
const renderCatFood = doc.querySelector("#cat-food-area")
const renderDogFood = doc.querySelector("#dog-food-area")
const renderRodentsFood = doc.querySelector("#rodents-food-area")


const store = {
    renderFood : [

        // Food Cat
        
        {
            id: 1,
            render: renderCatFood,
            img: "/img/cat-food/catFood1.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 2,
            render: renderCatFood,
            img: "/img/cat-food/catFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 3,
            render: renderCatFood,
            img: "/img/cat-food/catFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 4,
            render: renderCatFood,
            img: "/img/cat-food/catFood3.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 5, 
            render: renderCatFood,
            img: "/img/cat-food/catFood3.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 6, 
            render: renderCatFood,
            img: "/img/cat-food/catFood1.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 7, 
            render: renderCatFood,
            img: "/img/cat-food/catFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 8,
            render: renderCatFood,
            img: "/img/cat-food/catFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },

        // Food dog

        {
            id: 9, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood1.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 10,
            render: renderDogFood,
            img: "/img/dog-food/dogFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 11, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 12, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood3.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 13,
            render: renderDogFood,
            img: "/img/dog-food/dogFood1.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 14, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood3.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 15, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 16, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 17, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood1.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 18, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood1.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 19, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood3.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 20, 
            render: renderDogFood,
            img: "/img/dog-food/dogFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },

        // Food Rodents

        {
            id: 21,
            render: renderRodentsFood,
            img: "/img/rodents-food/rodentsFood1.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 22,
            render: renderRodentsFood,
            img: "/img/rodents-food/rodentsFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 23,
            render: renderRodentsFood,
            img: "/img/rodents-food/rodentsFood3.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 24,
            render: renderRodentsFood,
            img: "/img/rodents-food/rodentsFood1.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 25,
            render: renderRodentsFood,
            img: "/img/rodents-food/rodentsFood3.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
        {
            id: 26,
            render: renderRodentsFood,
            img: "/img/rodents-food/rodentsFood2.png", 
            descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            data: "Суббота, 1 неделя Января 2022 года"
        },
    ]
}


store.renderFood.map(item => createElements(item.render, item.id, item.img))


function createElements (area, id, imgSrc) {
    const div = doc.createElement("div");
    const figure = doc.createElement("figure");
    const img = doc.createElement("img");
    const figcaption = doc.createElement("figcaption");
    const button = doc.createElement("button");
    const p = doc.createElement("p");

    div.classList.add("commodity-card");
    figure.classList.add("product-picture");
    button.classList.add("buy-button");
    p.classList.add("date-added");

    img.src = imgSrc;
    img.alt = "упаковка корма";
    figcaption.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
    button.textContent = "Купить";
    p.textContent = "Суббота, 1 неделя Января 2022 года";
    
    area.appendChild(div);
    div.id = id;
    div.appendChild(figure);
    figure.appendChild(img);
    figure.appendChild(figcaption);
    div.appendChild(button);
    div.appendChild(p);
}