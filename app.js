var _a, _b, _c, _d;
var users = [];
(_a = document.getElementById('birthdayForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var dob = new Date(document.getElementById('dob').value);
    users.push({ username: username, dob: dob });
    displayMessage("User ".concat(username, " added!"));
});
(_b = document.getElementById('todayBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', displayTodayBirthdays);
(_c = document.getElementById('monthSelect')) === null || _c === void 0 ? void 0 : _c.addEventListener('change', displayMonthBirthdays);
(_d = document.getElementById('yearSelect')) === null || _d === void 0 ? void 0 : _d.addEventListener('change', displayYearBirthdays);
function displayMessage(message) {
    var resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.innerHTML = "<p>".concat(message, "</p>");
    }
}
function displayTodayBirthdays() {
    var today = new Date();
    var todayBirthdays = users.filter(function (user) {
        return user.dob.getDate() === today.getDate() &&
            user.dob.getMonth() === today.getMonth();
    });
    displayBirthdays(todayBirthdays, "Today's Birthdays");
}
function displayMonthBirthdays() {
    var month = document.getElementById('monthSelect').value;
    if (month) {
        var monthBirthdays = users.filter(function (user) {
            return user.dob.getMonth() + 1 === parseInt(month);
        });
        displayBirthdays(monthBirthdays, "Birthdays in month ".concat(month));
    }
}
function displayYearBirthdays() {
    var year = document.getElementById('yearSelect').value;
    if (year) {
        var yearBirthdays = users.filter(function (user) {
            return user.dob.getFullYear() === parseInt(year);
        });
        displayBirthdays(yearBirthdays, "Birthdays in year ".concat(year));
    }
}
function displayBirthdays(birthdays, title) {
    var resultDiv = document.getElementById('result');
    if (resultDiv) {
        if (birthdays.length > 0) {
            var listItems = birthdays.map(function (user) {
                return "<li>".concat(user.username, " - ").concat(user.dob.toDateString(), "</li>");
            }).join('');
            resultDiv.innerHTML = "<h3>".concat(title, "</h3><ul>").concat(listItems, "</ul>");
        }
        else {
            resultDiv.innerHTML = "<h3>".concat(title, "</h3><p>No birthdays found.</p>");
        }
    }
}
