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

document
  .getElementById("ratingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const ramen = document.getElementById("ramenSelect").value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const reviewText = document.getElementById("review").value;

    if (!rating) {
      alert("Please select a rating!");
      return;
    }

    const ratingValue = rating.value;

    // Create review entry
    const reviewEntry = document.createElement("div");
    reviewEntry.classList.add("review-card");

    reviewEntry.innerHTML = `
        <h3>${ramen}</h3>
        <p>⭐ Rating: ${ratingValue}/5</p>
        <p>📝 Review: ${reviewText}</p>
        <hr>
    `;

    // Append the new review
    document.getElementById("ratingsDisplay").appendChild(reviewEntry);

    alert("Thank you for your review!");

    // Reset the form after submission
    document.getElementById("ratingForm").reset();
  });















  
 