document.getElementById('downloadResumeBtn2').addEventListener('click', function() {
    // Get the resume content
    var resumeContent = document.getElementById('resume').innerHTML;

    // Create a blob with the resume content and include the links to the CSS files
    var blob = new Blob([`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Lili'S Resume</title>
            <link href="assets/vendor/aos/aos.css" rel="stylesheet">
            <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
            <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
            <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
            <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
            <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            ${resumeContent}
        </body>
        </html>
    `], { type: 'text/html' });

    // Create a link element
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Lili_Resume.html';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download by clicking the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
});
