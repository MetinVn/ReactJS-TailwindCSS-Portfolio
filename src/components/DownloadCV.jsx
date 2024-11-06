import pdf from "../images/Metin.pdf";

const DownloadCV = () => (
  <div className="mt-6">
    <h3 className="text-lg font-bold mb-2">Download CV</h3>
    <p className="mb-4">
      If you're interested in learning more about my qualifications and experience, feel free to download my CV below:
    </p>
    <div className="flex justify-between items-center">
      <a
        href={pdf}
        download
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Download CV
      </a>
      <a
        href="https://dashboard.simpleanalytics.com/?utm_source=metinvn.github.io&utm_content=badge"
        referrerPolicy="origin"
        rel="noreferrer"
        target="_blank"
        className="ml-4">
        <picture>
          <source
            srcSet="https://simpleanalyticsbadges.com/metinvn.github.io?mode=dark"
            media="(prefers-color-scheme: dark)"
          />
          <img
            src="https://simpleanalyticsbadges.com/metinvn.github.io?mode=light"
            loading="lazy"
            referrerPolicy="no-referrer"
            crossOrigin="anonymous"
          />
        </picture>
      </a>
    </div>
  </div>
);

export default DownloadCV;
