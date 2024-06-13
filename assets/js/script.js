document.getElementById('downloadResumeBtn').addEventListener('click', function() {
    // Create jsPDF instance
    const pdf = new jsPDF();
    
    // Get HTML content to be converted
    const resumeContent = document.getElementById('resume').innerHTML;
    
    // Convert HTML to PDF
    pdf.html(resumeContent, {
        callback: function(pdf) {
            // Save PDF file
            pdf.save('MyResume.pdf');
        },
        x: 10,
        y: 10,
    });
});
