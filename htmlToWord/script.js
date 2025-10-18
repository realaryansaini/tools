function exportHTMLToWord(elementId, filename = 'document') {
    // Construct the Word-compatible HTML structure
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
        "xmlns:w='urn:schemas-microsoft-com:office:word' " +
        "xmlns='http://www.w3.org/TR/REC-html40'>" +
        "<head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";

    var postHtml = "</body></html>";

    var content = document.getElementById(elementId).innerHTML;
    var html = preHtml + content + postHtml;

    // Create a Blob for IE/Edge support
    var blob = new Blob(['\ufeff', html], { type: 'application/msword' });

    var downloadLink = document.createElement("a");
    document.body.appendChild(downloadLink);

    // For IE/Edge
    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename + '.doc');
    } else {
        // For other browsers
        var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        downloadLink.href = url;
        downloadLink.download = filename + '.doc';
        downloadLink.click();
    }
    document.body.removeChild(downloadLink);
}
