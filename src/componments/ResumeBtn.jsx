const DownloadButton = ({ fileUrl, fileName }) => (
  <a
    href={fileUrl}
    download={fileName}
    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
  >
     Resume
  </a>
);

export default DownloadButton;
