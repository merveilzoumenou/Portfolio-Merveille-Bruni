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
            const validEmail = id !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
            const hasValue = field.value.trim().length > 0;

            error.textContent = hasValue && validEmail ? '' : message;
            field.setAttribute('aria-invalid', String(!(hasValue && validEmail)));
            isValid = isValid && hasValue && validEmail;
        });

        const feedback = document.querySelector('#form-feedback');
        feedback.textContent = isValid
            ? 'Merci pour votre message. Le formulaire est prêt à être envoyé.'
            : '';

        if (isValid) {
            contactForm.reset();
        }
    });
}