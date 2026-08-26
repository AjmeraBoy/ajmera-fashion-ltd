// =========================================================
// CONTACT PAGE
// =========================================================
// REQUIRED ELEMENT IDs:
//   #addressText     (Text)
//   #phoneText        (Text) — also fine as a link/button
//   #emailText         (Text)
//   #contactForm        (Wix Forms element, OR individual inputs
//                        below if not using the Forms app)
//   #inputName / #inputEmail / #inputPhone / #inputMessage
//   #submitButton
//   #successMessage    (Text, hidden by default)
// =========================================================

const ADDRESS = "7th Floor, Shop-701 to 706, Surana 101, Tower B, Sahara Darwaja, Umarwada, Surat Textile Market, Surat, Gujarat, India, 395002";
const PHONE = "+91-635-890-7210";
const EMAIL = "ajmerafashionlimited@gmail.com";

$w.onReady(function () {

    if ($w('#addressText')) $w('#addressText').text = ADDRESS;
    if ($w('#phoneText')) $w('#phoneText').text = PHONE;
    if ($w('#emailText')) $w('#emailText').text = EMAIL;

    if ($w('#successMessage')) $w('#successMessage').hide();

    // If NOT using the Wix Forms app, and instead built the form from
    // individual input elements, wire up basic validation + submission
    // to a "ContactSubmissions" CMS collection here:
    if ($w('#submitButton')) {
        $w('#submitButton').onClick(async () => {
            const name = $w('#inputName') ? $w('#inputName').value : '';
            const email = $w('#inputEmail') ? $w('#inputEmail').value : '';
            const message = $w('#inputMessage') ? $w('#inputMessage').value : '';

            if (!name || !email || !message) {
                console.warn('Please fill in all required fields.');
                return;
            }

            // OPTIONAL: save to a CMS collection called "ContactSubmissions"
            // (fields: name, email, phone, message, submittedAt) so
            // enquiries show up in the Wix admin panel / CMS table, or
            // wire this to the Wix Forms app instead for built-in email
            // notifications — see README.md for setup steps.

            if ($w('#successMessage')) $w('#successMessage').show();
        });
    }
});
