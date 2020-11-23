window.addEventListener("DOMContentLoaded", () => {
    const input_day = document.getElementById('dateofbirth_dd');
    const input_month = document.getElementById('dateofbirth_mm');
    const input_year = document.getElementById('dateofbirth_yyyy');

    limitInputSymbols(input_day, 2);
    input_day.addEventListener('keyup', () => autotab(input_day, input_year));

    limitInputSymbols(input_month, 2);
    input_month.addEventListener('keyup', () => autotab(input_month, input_day));

    limitInputSymbols(input_year, 4);
});

window.addEventListener("DOMContentLoaded", () => {
    setFormObserver("#dateofbirth_dd", "#dateofbirth_mm", "#dateofbirth_yyyy");
})

function limitInputSymbols(input_id, limit) {
    const input = typeof input_id === "string" ? document.querySelector(input_id) : input_id,
    f = function (e) {
        const v = input.value.split("");
        if (v.length > limit) {
            input.value = v.slice(0, limit).join("");
        }
    };
    input.addEventListener("input", f);
}

function setFormObserver(dd_id, mm_id, yyyy_id) {
    const input_day = document.querySelector(dd_id);
    const input_month = document.querySelector(mm_id);
    const input_year = document.querySelector(yyyy_id);

    let day, month, year;
    let day_is_valid = false, 
        month_is_valid = false, 
        year_is_valid = false;

    function shouldShowError() {
        const lengthIsValid = `${day}`.length >= 1 && `${month}`.length >= 1 && `${year}`.length === 4;
        return lengthIsValid && !(day_is_valid && month_is_valid && year_is_valid);
    }

    const error_element_id = '#dateValidationMessage > span';

    input_day.addEventListener("input", function(e) { 
        const value = e.target.value;
        day = value && parseInt(value, 10);
        hide(error_element_id);
        day_is_valid = input_day.checkValidity();
        if (shouldShowError()) {
            show(error_element_id);
        }
    });
    input_month.addEventListener("input", function(e) {
        const value = e.target.value;
        month = value && parseInt(value, 10);
        hide(error_element_id);
        month_is_valid = input_month.checkValidity();
        if (shouldShowError()) {
            show(error_element_id);
        }
    });
    input_year.addEventListener("input", function(e) {
        const value = e.target.value;
        year = value && parseInt(value, 10);
        hide(error_element_id);
        year_is_valid = input_year.checkValidity();
        if (shouldShowError()) {
            show(error_element_id);
        }
    });
}

function show(elem_id) {
    const element = document.querySelector(elem_id);
    if (element) {
        if (element.classList.contains('hide')) {
            element.classList.remove('hide'); 
        }
        element.classList.add('show');
    }
}

function hide(elem_id) {
    const element = document.querySelector(elem_id);
    if (element) {
        if (element.classList.contains('show')) {
            element.classList.remove('show'); 
        }
        element.classList.add('hide');
    }
}

function getInputValue(input_id) {
    const value = document.querySelector(input_id) && document.querySelector(input_id).value;
    return value ? parseInt(value, 10) : null;
} 

function autotab(original, destination){
    if (original.getAttribute && original.value.length == original.getAttribute("maxlength")) {
        destination.focus();
    }
}

function injectElement(html, parent) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = html;
    parent.appendChild(newDiv);
}

function setStylesToElement(el_id, styles) {
    const element = document.getElementById(el_id);
    Object.entries(styles).forEach(([property, value]) => {
        element.style[property] = value;
    });
    return element;
}

function uncoverPage() {
    
};

// function isValidDob(day, month, year) {
//    function isValidDay(day, month) {
//        return month === 2 ? 1 <= day && day < 30 : 1 <= day && day <= 31;
//    }
//    function isValidMonth(month) {
//        return 1 <= month && month <= 12;
//    }
//    function isValidYear(year) {
//        return 1915 <= year && year < new Date().getFullYear();
//    }

//    return isValidDay(day, month) && isValidMonth(month) && isValidYear(year);
// }

