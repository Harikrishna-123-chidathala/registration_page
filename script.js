// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const userDetailsContainer = document.querySelector('.user-details-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const firstName = form.elements.firstName.value;
        const lastName = form.elements.lastName.value;
        const email = form.elements.email.value;

        const userCard = document.createElement('div');
        userCard.classList.add('user-card');
        userCard.innerHTML = `
            <h2>User Details:</h2>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        userDetailsContainer.appendChild(userCard);

        // Clear the form fields after registration
        form.reset();
    });
});
