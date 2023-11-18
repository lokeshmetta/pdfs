function generatePDFFromData(data) {
    const pdf = new jsPDF();
    let y = 15;
  
    data.forEach(row => {
      Object.keys(row).forEach((key, index) => {
        pdf.text(15, y, `${key}: ${row[key]}`);
        y += 10;
      });
      y += 10; // Add extra space between rows
    });
  
    // Trigger the download by creating a Blob and creating an anchor tag to initiate the download
    const blob = pdf.output('blob');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'output.pdf';
    link.click();
  }
  function generatePDF() {
    const pdf = new jsPDF();
  
    pdf.text(20, 20, 'Hello, this is a simple PDF.');
    pdf.text(20, 30, 'You can modify this content as needed.');
  
    pdf.save('output.pdf');
  }
  