document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reservationForm");
  const reservationList = document.getElementById("reservationData");

  // Load existing reservations from localStorage
  let reservations = JSON.parse(localStorage.getItem("reservations")) || [];
  displayReservations();

  // Handle form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newReservation = {
      fullName: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      bookTitle: document.getElementById("bookTitle").value,
      authorName: document.getElementById("authorName").value,
      pickupDate: document.getElementById("pickupDate").value,
    };

    reservations.push(newReservation);
    localStorage.setItem("reservations", JSON.stringify(reservations));

    displayReservations();
    form.reset();
  });

  // Display reservations
  function displayReservations() {
    reservationList.innerHTML = "";
    reservations.forEach((res, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${res.bookTitle}</strong> by ${res.authorName}<br>
        Reserved by: ${res.fullName} | 📅 ${res.pickupDate}<br>
        <small>${res.email} | ${res.phone}</small>
        <button class="delete-btn" data-index="${index}">❌ Cancel</button>
      `;
      reservationList.appendChild(li);
    });

    // Delete reservation
    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const idx = e.target.getAttribute("data-index");
        reservations.splice(idx, 1);
        localStorage.setItem("reservations", JSON.stringify(reservations));
        displayReservations();
      });
    });
  }
});