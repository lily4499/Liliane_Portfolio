document.getElementById('downloadPdfBtn').addEventListener('click', function() {
    const pdf = new jsPDF();
    const resumeContent = document.getElementById('resume').innerHTML;

    // Optional - Set PDF styling
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0); // black

    // Convert HTML to PDF
    pdf.fromHTML(resumeContent, {
        width: 180
    });

    // Download the PDF
    pdf.save('Lili_Resume.pdf');
});
