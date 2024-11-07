"use strict";
const shareLink = () => {
    let link = window.location.href;
    if (link[link.length - 1] == "/")
        link += "resume/" + savedResumeData.username;
    else
        link += "/resume/" + savedResumeData.username;
    navigator.clipboard.writeText(link);
    alert("Link copied!");
};
const downloadPdf = () => {
    const resume = document.getElementById('resume');
    // Hide all buttons from the resume
    const buttons = resume.querySelectorAll("button");
    const originalWidth = resume.style.width;
    const originalHeight = resume.style.height;
    for (let button of buttons)
        button.style.display = "none";
    resume.style.width = "2480px";
    resume.style.height = "3508px";
    window.html2canvas(resume).then((canvas) => {
        for (let button of buttons)
            button.style.display = "initial";
        resume.style.width = originalWidth;
        resume.style.height = originalHeight;
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 5, 5);
        doc.save('resume.pdf');
    });
};
const getShareButtons = () => {
    /**
     * Structure:
     * < div>[button for sharing link] [button for pdf] </div>
     */
    let buttonsContainer = document.createElement('div');
    let linkButton = getElement({ tag: 'button', innerText: 'Share Link' });
    let downloadButton = getElement({ tag: 'button', innerText: 'Download Resume' });
    // Share link logic binding
    linkButton.onclick = shareLink;
    // Download logic binding
    downloadButton.onclick = downloadPdf;
    buttonsContainer.appendChild(linkButton);
    buttonsContainer.appendChild(downloadButton);
    return buttonsContainer;
};
