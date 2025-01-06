
document.addEventListener("DOMContentLoaded", () => {
  const dayInput = document.querySelector(".in-day");
  const monthInput = document.querySelector(".in-month");
  const yearInput = document.querySelector(".in-year");
  const enter = document.querySelector(".arrow-key");
  const getDay = document.querySelector(".getDay .hhh");
  const getMonth = document.querySelector(".getMonth .hhh");
  const getYear = document.querySelector(".getYear .hhh");

  enter.addEventListener("click", () => {
    const day = Number(dayInput.value);
    const month = Number(monthInput.value);
    const year = Number(yearInput.value);

    const currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();

    let ageYear = currentYear - year;
    let ageMonth = currentMonth - month;
    let ageDay = currentDay - day;

    if (ageDay < 0) {
      ageDay += 30;
      ageMonth--;
    }

    if (ageMonth < 0) {
      ageMonth += 12;
      ageYear--;
    }

    displayAge(ageDay, ageMonth, ageYear);
  });

  function displayAge(day, month, year) {
    getDay.innerHTML = `<p class="ageDay headyy">${day}</p>`;
    getMonth.innerHTML = `<p class="ageMonth headyy">${month}</p>`;
    getYear.innerHTML = `<p class="ageYear headyy">${year}</p>`;
  }
});
