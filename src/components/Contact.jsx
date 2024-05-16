import pdf from "../images/Metin-Isakhanli.pdf";
const Contact = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Me</h3>
              <p>Email: misaxanli@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-1">
                <a
                  href="https://www.linkedin.com/in/metin-isakhanli-217374266"
                  target="_blank"
                  className="text-gray-300 hover:text-white transition duration-300">
                  <i className="fab fa-linkedin">Linkedin</i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">I AM</h3>
              <p>
                Seeking opportunities to contribute skills and expertise,
                committed to excellence in every project. Thank you for
                considering me as a valuable asset to your team!
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Download CV</h3>
            <p className="mb-4">
              If you're interested in learning more about my qualifications and
              experience, feel free to download my CV below:
            </p>
            <a
              href={pdf}
              download
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Download CV
            </a>
          </div>
          <hr className="border-t border-gray-700 my-6" />
          <p className="text-center text-sm">
            &copy; 2024 Matin Isakhanli. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
