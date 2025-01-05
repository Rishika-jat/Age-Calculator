// let day = document.querySelector(".in-day");
// let month = document.querySelector(".in-month");
// let year = document.querySelector(".in-year");

// let enter = document.querySelector(".arrow-key");
// let getday = document.querySelector(".getDay");
// let getmonth = document.querySelector(".getMonth");
// let getyear = document.querySelector(".getYear");
// let h1 = document.querySelector(".h1");
// let h2 = document.querySelector(".h2");
// let h3 = document.querySelector(".h3");
// let d = new Date();
// let CurrentDate = d.getDate();
// let CurrentMonth = d.getMonth() + 1;
// let CurrentYear = d.getFullYear();
// enter.addEventListener("click", () => {
//   day = Number(day.value);
//   month = Number(month.value);
//   year = Number(year.value);

//   let exactyear = CurrentYear - year;
//   let exactmonth = CurrentMonth - month;
//   let exactday = CurrentDate - day;
//   if (CurrentMonth < month) {
//     CurrentYear = CurrentYear - 1;
//     let t;
//     t = month;
//     month = CurrentMonth;
//     CurrentMonth = t;
//     let d;
//     d = day;
//     day = CurrentDate;
//     CurrentDate = d;
//     console.log(CurrentYear - year);
//     console.log(CurrentMonth - month - 12);
//     console.log(CurrentDate - day - 30);
//     let DayAge = document.createElement("p");
//     DayAge.textContent = CurrentDate - day-30;
//     DayAge.className = "headyy";
//     getday.firstChild.remove();
//     h1.innerHTML = "";
//     getday.insertBefore(DayAge, getday.lastElementChild);
  
//     let MonthAge = document.createElement("p");
//     MonthAge.textContent = CurrentMonth - month-12;
  
//     MonthAge.className = "headyy";
//     getmonth.firstChild.remove();
//     h2.innerHTML = "";
//     getmonth.insertBefore(MonthAge, getmonth.lastElementChild);
  
//     let YearAge = document.createElement("p");
//     YearAge.textContent = CurrentYear - year;
//     YearAge.className = "headyy";
//     getyear.firstChild.remove();
//     h3.innerHTML = "";
//     getyear.insertBefore(YearAge, getyear.lastElementChild);
//   }
// else{
// let DayAge = document.createElement("p");
//   DayAge.textContent = CurrentDate - day;
//   DayAge.className = "headyy";
//   getday.firstChild.remove();
//   h1.innerHTML = "";
//   getday.insertBefore(DayAge, getday.lastElementChild);

//   let MonthAge = document.createElement("p");
//   MonthAge.textContent = CurrentMonth - month;

//   MonthAge.className = "headyy";
//   getmonth.firstChild.remove();
//   h2.innerHTML = "";
//   getmonth.insertBefore(MonthAge, getmonth.lastElementChild);

//   let YearAge = document.createElement("p");
//   YearAge.textContent = CurrentYear - year;
//   YearAge.className = "headyy";
//   getyear.firstChild.remove();
//   h3.innerHTML = "";
//   getyear.insertBefore(YearAge, getyear.lastElementChild);
// }
  
// });
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
