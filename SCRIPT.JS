function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecial = document.getElementById("special").checked;

    let characterSet = '';
    
    if (includeUppercase) characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characterSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characterSet += '0123456789';
    if (includeSpecial) characterSet += '!@#$%^&*()_+-={}[];:<>,.?/~';

    if (characterSet === '') {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("password");
    
    if (passwordField.value === '') {
        alert('Please generate a password first!');
        return;
    }

    passwordField.select();
    document.execCommand('copy');
}