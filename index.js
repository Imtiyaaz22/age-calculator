"use strict";

const birthDateInput = document.querySelector(".capture-date");
birthDateInput.max = new Date().toISOString().split("T")[0];
const calculateBtn = document.querySelector(".capture-btn");

const currentDateContainer = document.querySelector(".current-date");
const outputContainer = document.querySelector(".output");

const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

// Dynamically update current date

const renderCurrentDate = function () {
	const currentDay = String(date.getDate());
	const currentDate = days[date.getDay()];
	const currentMonth = months[date.getMonth()];
	const currentYear = date.getFullYear();
	const html = `<span class="current-weekday">${currentDate}</span>
                <p class="current-date__highlight">
                  <span class="current-day">${
										currentDay <= 9 ? currentDay.padStart(2, "0") : currentDay
									}</span></span> <span class="current-month">${currentMonth}</span>
                  <span class="current-year">${currentYear}</span>
                </p>`;

	return currentDateContainer.insertAdjacentHTML("afterend", html);
};

window.addEventListener("load", renderCurrentDate);

// Calculate age

const getDaysInMonth = function (year, month) {
	return new Date(year, month, 0).getDate();
}

const calculateAge = function (e) {
	e.preventDefault();
	const birthDate = new Date(birthDateInput.value);
	const birthDay = birthDate.getDate();
	const birthMonth = birthDate.getMonth() + 1;
	const birthYear = birthDate.getFullYear();
	const today = new Date();
	const currentDay = today.getDate();
	const currentMonth = today.getMonth() + 1;
	const currentYear = today.getFullYear();

	let resultDay, resultMonth, resultYear;

	resultYear = currentYear - birthYear;

	if (currentMonth >= birthMonth) {
		resultMonth = currentMonth - birthMonth;
	} else {
		resultYear--;
		resultMonth = 12 + currentMonth - birthMonth;
	}

	if (currentDay >= birthDay) {
		resultDay = currentDay - birthDay;
	} else {
		resultMonth--;
		resultDay = getDaysInMonth(birthYear, birthMonth) + currentDay - birthDay;
	}

	if (resultMonth < 0) {
		resultMonth = 11;
		resultYear--;
	}

	const html = `
								<p class="output-text">
									You are <span class="years">${resultYear}</span> years, <span class="months">${resultMonth}</span> months and
									<span class="days">${resultDay}</span> days old!
								</p>	
								`;

	outputContainer.classList.remove("output-hidden");
	outputContainer.insertAdjacentHTML("beforeend", html);
	calculateBtn.disabled = true;
}

calculateBtn.addEventListener("click", calculateAge);
