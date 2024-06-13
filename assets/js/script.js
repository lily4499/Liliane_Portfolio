document.getElementById('downloadPdfBtn').addEventListener('click', function() {
    const element = document.getElementById('resume');
    html2pdf()
        .from(element)
        .save('LilyResume.pdf');
});
