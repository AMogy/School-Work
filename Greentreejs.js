function isFormValid(form) {
    if (form.userInfo.value == "") {
        alert("Error: Input is empty!");
        form.userInfo.focus();
        return false;
    }
    return true;
}