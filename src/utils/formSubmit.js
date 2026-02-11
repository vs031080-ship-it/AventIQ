const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxkjrGwqqfW7c0iQ372XZFVi6GVfkaldxmaAUR2ZNdy8266UTBt6cCofaUoIIFFG_P3/exec';

export function submitToGoogleSheet(formData, submitBtn) {
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    return fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => {
            alert('Thank you! Your submission has been received.');
            return true;
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Something went wrong. Please try again later.');
            return false;
        })
        .finally(() => {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
        });
}
