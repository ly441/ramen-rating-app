const ramens = [
  {
    id: 1,
    name: "Sapporo Ramen",
    restaurant: "Sapporo Ichiban",
    image: "Sapporo Serenity from Hokkaido, Japan.jpeg",
    rating: 5,
    comment: "Rich miso broth, thick noodles, absolutely amazing!",
  },
  {
    id: 2,
    name: "Hakata Ramen",
    restaurant: "Ippudo",
    image: "Hakata Ikkousha Yogyakarta.jpeg",
    rating: 4.5,
    comment: "Creamy pork broth with thin noodles, a true Fukuoka classic!",
  },
  {
    id: 3,
    name: "Wakayama Ramen",
    restaurant: "Marutaka Ramen",
    image: "[I ate] Tonkotsu ramen.jpeg",
    rating: 4,
    comment: "A unique blend of shoyu and tonkotsu, very satisfying.",
  },
  {
    id: 4,
    name: "Kyoto Ramen",
    restaurant: "Honke Daiichi Asahi",
    image: "_ (47).jpeg",
    rating: 4.2,
    comment: "Soy-based broth with extra fatty pork—delicious!",
  },
  {
    id: 5,
    name: "Onomichi Ramen",
    restaurant: "Shukaen",
    image: "You've Been Slurping Ramen All Wrong.jpeg",
    rating: 4.8,
    comment:
      "Shoyu broth with fish-based depth, topped with pork fat—heavenly!",
  },
  {
    id: 6,
    name: "Okinawa Ramen",
    restaurant: "Shimujo",
    image: "yum.jpeg",
    rating: 4.5,
    comment:
      "Light pork & bonito broth with chewy udon-like noodles, very unique!",
  },
];



function displayRamens() {
  const menu = document.getElementById("ramen-menu");
  menu.innerHTML = ""; // Clear existing content

  ramens.forEach((ramen) => {
    console.log("Adding ramen:", ramen.name, "Image path:", ramen.image);

    const ramenContainer = document.createElement("div");
    ramenContainer.classList.add("ramen-item");

    const img = document.createElement("img");
    img.src = encodeURI(`./images/${ramen.image}`);
    console.log(encodeURI(`./images/${ramen.image}`));

    img.alt = ramen.name;
    img.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default behavior
      console.log(`Clicked: ${ramen.name}`);
      handleClick(ramen);
    });

    const name = document.createElement("p");
    name.textContent = ramen.name;

    ramenContainer.appendChild(img);
    ramenContainer.appendChild(name);
    menu.appendChild(ramenContainer);
  });
}

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

// Run this only once, after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  displayRamens(); // ✅ Call it once here
});


function addSubmitListener() {
  document
    .getElementById("new-ramen-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const newRamen = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        rating: event.target.rating.value,
        comment: event.target.comment.value,
      };
      addRamenToMenu(newRamen);
      event.target.reset();
    });
}
