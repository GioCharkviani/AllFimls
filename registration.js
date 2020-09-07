document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    let errors = {};
    let form = event.target;


    //username 
    const username = form.querySelector('[name="username"]').value;
    if (username.length < 3) {
        errors.username = "Min 3 letters";
    }

    // Email
    const email = form.querySelector('[name="email"]').value;
    if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        errors.email = "Invalid email";
        document.getElementById('error_email').textContent = 'Invalid email';

    }

    // Passwords
    const password = form.querySelector('[name="password"]').value;
    const password2 = form.querySelector('[name="password2"]').value;

    if (password.length < 5) {
        errors.password = "Invalid Password";
    }
    if (password != password2) {
        errors.password = "Passwords do not match";
    }

    // Radio - gender
    let gender =  false;
    form.querySelectorAll('[name="gender"]').forEach(item => {
        if (item.checked) {
            gender = true;
        }            
    });

    if (gender === false) {
        errors.gender = "Please select gender";
    }

    // Checkbox
    const agree = form.querySelector('[name="agree"]').checked;
    if (!agree) {
        errors.agree = "You must agree terms and conditions";
    }


    // Errors
    form.querySelectorAll('.error-div').forEach(item => {
        item.textContent = ' ';
    });
    for (let name in errors) {
        let errorPlaceholder = document.getElementById('error_' + name);
        if (errorPlaceholder) {
            errorPlaceholder.textContent = errors[name];
        }

    }

    // Submit
    if (Object.keys(errors).length === 0) {
        form.submit();
    }

    console.log(errors);

});