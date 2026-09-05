import emailjs from '@emailjs/browser';

declare global {
    interface Window {
        grecaptcha: any;
    }
}

const form = document.getElementById('contact-form') as HTMLFormElement | null;
const formContent = document.getElementById('form-content') as HTMLElement | null;
const formSuccess = document.getElementById('form-success') as HTMLElement | null;
const formErrorBanner = document.getElementById('form-error-banner') as HTMLElement | null;
const successText = document.getElementById('success-text') as HTMLElement | null;

const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
const spinner = document.getElementById('loading-spinner') as HTMLElement | null;
const defaultIcon = document.getElementById('default-icon') as HTMLElement | null;
const btnText = document.getElementById('btn-text') as HTMLElement | null;

form?.addEventListener('submit', async (e: SubmitEvent) => {
    e.preventDefault();

    // 1. Fetch Translations
    const tSending = form.dataset.msgSending || 'Sending...';
    const tSend = form.dataset.msgSend || 'Send';
    const tSuccess = form.dataset.msgSuccess || 'Message sent successfully!';
    const tErrCaptcha = form.dataset.msgErrCaptcha || 'Please complete the reCAPTCHA.';
    const tErrSelect = form.dataset.msgErrSelect || 'Please select a valid subject option.';
    const tErrGeneral = form.dataset.msgErrGeneral || 'Failed to send message. Try again later.';

    if (formErrorBanner) {
        formErrorBanner.classList.add('hidden');
        formErrorBanner.textContent = '';
    }

    const formData = new FormData(form);

    // 2. Validate Select Field (TypeScript Fallback)
    const selectedType = formData.get('type_of_message') as string;
    if (!selectedType || selectedType === '') {
        if (formErrorBanner) {
            formErrorBanner.textContent = tErrSelect;
            formErrorBanner.classList.remove('hidden');
        }
        return;
    }

    // 3. Validate Captcha
    const captcha = window.grecaptcha?.getResponse();
    if (!captcha) {
        if (formErrorBanner) {
            formErrorBanner.textContent = tErrCaptcha;
            formErrorBanner.classList.remove('hidden');
        }
        return;
    }

    // 4. Set UI to Loading State
    if (submitBtn) submitBtn.disabled = true;
    if (defaultIcon) defaultIcon.style.display = 'none';
    if (spinner) spinner.style.display = 'block';
    if (btnText) btnText.textContent = tSending;

    try {
        type MessageType = 'feedback' | 'work' | 'networking' | 'job' | 'other';
        const messageTypeMap: Record<MessageType, string> = {
            feedback: 'Feedback/suggestion for the Website',
            work: 'Work & Collaboration',
            networking: 'Networking & Professional Connections',
            job: 'Job Offers & Recruiter Outreach',
            other: 'Other',
        };

        const finalForm = {
            fullname: formData.get('fullname') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
            type_of_message: messageTypeMap[selectedType as MessageType],
            'g-recaptcha-response': captcha,
        };

        await emailjs.send(
            import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
            import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
            finalForm,
            import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY
        );

        // 5. SUCCESS STATE
        if (formContent) formContent.classList.add('hidden');
        if (formSuccess) {
            formSuccess.classList.remove('hidden');
            formSuccess.classList.add('flex');
        }
        if (successText) successText.textContent = tSuccess;

        form.classList.remove('bg-[#1c232d]/85');
        form.classList.add('bg-green-600');

        // Wait 3 seconds, reset form, and restore default UI
        setTimeout(() => {
            form.reset();

            // Revert Background
            form.classList.add('bg-[#1c232d]/85');
            form.classList.remove('bg-green-600');

            // Swap views back
            if (formSuccess) {
                formSuccess.classList.add('hidden');
                formSuccess.classList.remove('flex');
            }
            if (formContent) formContent.classList.remove('hidden');

            // Reset reCAPTCHA widget
            if (window.grecaptcha) {
                window.grecaptcha.reset();
            }

            // Reset Button states (needs to be done here since success bypasses 'finally' block momentarily)
            if (submitBtn) submitBtn.disabled = false;
            if (defaultIcon) defaultIcon.style.display = 'block';
            if (spinner) spinner.style.display = 'none';
            if (btnText) btnText.textContent = tSend;
        }, 3000);

    } catch (error) {
        const err = error as Error;

        // 6. ERROR STATE
        if (formErrorBanner) {
            formErrorBanner.textContent = `${tErrGeneral} ${err.message ? `(${err.message})` : ''}`;
            formErrorBanner.classList.remove('hidden');
        }

        // Only reset buttons immediately on error. On success, they are reset in the setTimeout.
        if (submitBtn) submitBtn.disabled = false;
        if (defaultIcon) defaultIcon.style.display = 'block';
        if (spinner) spinner.style.display = 'none';
        if (btnText) btnText.textContent = tSend;
    }
});