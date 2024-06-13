document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    const resumeElement = document.getElementById('resume');

    html2canvas(resumeElement).then(canvas => {
        // Convert canvas to image URL
        const imgData = canvas.toDataURL('image/png');

        // Calculate dimensions (A4 size: 595.28 x 841.89 points)
        const pdf = new jsPDF('p', 'pt', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = pdfWidth * 0.75; // Adjust as needed
        const imgHeight = canvas.height * imgWidth / canvas.width;

        // Add image to PDF
        pdf.addImage(imgData, 'PNG', (pdfWidth - imgWidth) / 2, 20, imgWidth, imgHeight);

        // Download the PDF
        pdf.save('LilyResume.pdf');
    });
});
