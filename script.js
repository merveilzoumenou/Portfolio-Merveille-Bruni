const contactForm = document.querySelector('#contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const fields = [
            { id: 'name', message: 'Veuillez renseigner votre nom.' },
            { id: 'email', message: 'Veuillez renseigner une adresse e-mail valide.' },
            { id: 'message', message: 'Veuillez écrire un message.' }
        ];

        let isValid = true;

        fields.forEach(({ id, message }) => {
            const field = document.querySelector(`#${id}`);
            const error = document.querySelector(`#${id}-error`);
            const feedback = document.querySelector('#form-feedback');

            if (!field || !error || !feedback) {
                return;
            }

            const hasValue = field.value.trim().length > 0;
            const isEmailField = id === 'email';
            const validEmail = !isEmailField || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
            const isFieldValid = hasValue && validEmail;

            error.textContent = isFieldValid ? '' : message;
            field.setAttribute('aria-invalid', String(!isFieldValid));
            isValid = isValid && isFieldValid;
        });

        const feedback = document.querySelector('#form-feedback');
        if (feedback) {
            feedback.textContent = isValid
                ? 'Merci pour votre message. Le formulaire est prêt à être envoyé.'
                : '';
        }

        if (isValid) {
            contactForm.reset();
        }
    });
}
