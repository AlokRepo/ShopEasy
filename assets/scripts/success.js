// This is to make sure the success page is only shown after payment
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('status'); // Get the 'status' parameter from the URL

    // If payment status is not successful, redirect to home page
    if (paymentStatus !== 'success') {
        window.location.href = "index.html"; // Redirect to home if payment was not successful
    }
});
