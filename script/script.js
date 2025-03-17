const ramens = [
  {
    id: 1,
    name: "Sapporo Ramen",
    restaurant: "Sapporo Ichiban",
    image: "sapporo.jpg",
    rating: 5,
    comment: "Rich miso broth, thick noodles, absolutely amazing!",
  },
  {
    id: 2,
    name: "Hakata Ramen",
    restaurant: "Ippudo",
    image: "hakata.jpg",
    rating: 4.5,
    comment: "Creamy pork broth with thin noodles, a true Fukuoka classic!",
  },
  {
    id: 3,
    name: "Wakayama Ramen",
    restaurant: "Marutaka Ramen",
    image: "wakayama.jpg",
    rating: 4,
    comment: "A unique blend of shoyu and tonkotsu, very satisfying.",
  },
  {
    id: 4,
    name: "Kyoto Ramen",
    restaurant: "Honke Daiichi Asahi",
    image: "kyoto.jpg",
    rating: 4.2,
    comment: "Soy-based broth with extra fatty pork—delicious!",
  },
  {
    id: 5,
    name: "Onomichi Ramen",
    restaurant: "Shukaen",
    image: "onomichi.jpg",
    rating: 4.8,
    comment:
      "Shoyu broth with fish-based depth, topped with pork fat—heavenly!",
  },
  {
    id: 6,
    name: "Okinawa Ramen",
    restaurant: "Shimujo",
    image: "okinawa.jpg",
    rating: 4.5,
    comment:
      "Light pork & bonito broth with chewy udon-like noodles, very unique!",
  },
];



function displayRamens() {
  displayRamens();
}

  const menu = document.getElementById("ramen-menu");
  menu.innerHTML = ""; 

  ramens.forEach((ramen) => {
    console.log("adding ramen:", ramen.name, "image path:", ramen.image); 
    

    const ramenContainer = document.createElement("div");
    ramenContainer.classList.add("ramen-item");

    const img = document.createElement("img");
    img.src = 'images/${ramen.image}';
    img.src = `images/${ramen.image}`;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));

    const name = document.createElement("p");
    name.textContent = ramen.name;

    ramenContainer.appendChild(img);
    ramenContainer.appendChild(name);
    menu.appendChild(ramenContainer);
  });


function handleClick(ramen) {
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
  document.getElementById("ramen-image").src = ramen.image;
  document.getElementById(
    "ramen-rating"
  ).textContent = `Rating: ${ramen.rating}`;
  document.getElementById(
    "ramen-comment"
  ).textContent = `Comment: ${ramen.comment}`;
}
