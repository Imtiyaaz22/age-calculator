"use strict";

const currentDayEl = document.querySelector(".current-weekday");
const currentDateEl = document.querySelector(".current-day");
const currentMonthEl = document.querySelector(".current-month");
const currentYearEl = document.querySelector(".current-year");
const currentDateContainer = document.querySelector(".current-date");

const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDay = String(date.getDate());
const currentDate = days[date.getDay()];
const currentMonth = months[date.getMonth()];
const currentYear = date.getFullYear();

// Dynamically update current date

window.addEventListener("load", () => {
	const html = `<span class="current-weekday">${currentDate}</span>
                <p class="current-date__highlight">
                  <span class="current-day">${
										currentDay <= 9 ? currentDay.padStart(2, "0") : currentDay
									}</span></span> <span class="current-month">${currentMonth}</span>
                  <span class="current-year">${currentYear}</span>
                </p>`;
        ;
  return currentDateContainer.insertAdjacentHTML("afterend", html);
});
