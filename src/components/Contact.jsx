import pdf from "../images/Matin-Isakhanli.pdf";
const Contact = () => {
  return (
    <>
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 class="text-lg font-bold mb-4">Contact Me</h3>
              <p>Email: misaxanli@gmail.com</p>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Follow Me</h3>
              <div class="flex space-x-1">
                <a
                  href="www.linkedin.com/in/metin-isakhanli-217374266"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-300 hover:text-white transition duration-300">
                  <i class="fab fa-linkedin">Linkedin</i>
                </a>
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">I AM</h3>
              <p>
                Seeking opportunities to contribute skills and expertise,
                committed to excellence in every project. Thank you for
                considering me as a valuable asset to your team!
              </p>
            </div>
          </div>
          <div class="mt-6">
            <h3 class="text-lg font-bold mb-2">Download CV</h3>
            <p class="mb-4">
              If you're interested in learning more about my qualifications and
              experience, feel free to download my CV below:
            </p>
            <a
              href={pdf}
              download
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Download CV
            </a>
          </div>
          <hr class="border-t border-gray-700 my-6" />
          <p class="text-center text-sm">
            &copy; 2024 Matin Isakhanli. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
