interface User {
    username: string;
    dob: Date;
}

let users: User[] = [];

document.getElementById('birthdayForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const dob = new Date((document.getElementById('dob') as HTMLInputElement).value);

    users.push({ username, dob });
    displayMessage(`User ${username} added!`);
});

document.getElementById('todayBtn')?.addEventListener('click', displayTodayBirthdays);
document.getElementById('monthSelect')?.addEventListener('change', displayMonthBirthdays);
document.getElementById('yearSelect')?.addEventListener('change', displayYearBirthdays);

function displayMessage(message: string) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = `<p>${message}</p>`;
    }
}

function displayTodayBirthdays() {
    const today = new Date();
    const todayBirthdays = users.filter(user => 
        user.dob.getDate() === today.getDate() && 
        user.dob.getMonth() === today.getMonth()
    );
    displayBirthdays(todayBirthdays, "Today's Birthdays");
}

function displayMonthBirthdays() {
    const month = (document.getElementById('monthSelect') as HTMLSelectElement).value;
    if (month) {
        const monthBirthdays = users.filter(user => 
            user.dob.getMonth() + 1 === parseInt(month)
        );
        displayBirthdays(monthBirthdays, `Birthdays in month ${month}`);
    }
}

function displayYearBirthdays() {
    const year = (document.getElementById('yearSelect') as HTMLSelectElement).value;
    if (year) {
        const yearBirthdays = users.filter(user => 
            user.dob.getFullYear() === parseInt(year)
        );
        displayBirthdays(yearBirthdays, `Birthdays in year ${year}`);
    }
}

function displayBirthdays(birthdays: User[], title: string) {
    const resultDiv = document.getElementById('result');
    if (resultDiv) {
        if (birthdays.length > 0) {
            const listItems = birthdays.map(user => 
                `<li>${user.username} - ${user.dob.toDateString()}</li>`
            ).join('');
            resultDiv.innerHTML = `<h3>${title}</h3><ul>${listItems}</ul>`;
        } else {
            resultDiv.innerHTML = `<h3>${title}</h3><p>No birthdays found.</p>`;
        }
    }
}
