let resultField = document.getElementById("result");

function appendValue(value) {

    resultField.value += value;

}

function clearScreen() {

    resultField.value = "";

}

function deleteLast() {

    resultField.value = resultField.value.slice(0, -1);

}

function calculate() {

    try {

        resultField.value = eval(resultField.value);

    } catch (error) {

        resultField.value = "Error";

    }

}