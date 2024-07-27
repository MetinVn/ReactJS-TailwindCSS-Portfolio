import ContactInfo from "./ContactInfo";
import SocialLinks from "./SocialLinks";
import DownloadCV from "./DownloadCV";

const Contact = () => {
  return (
    <>
      <footer className="bg-transparent h-[] text-white py-8">
        <hr style={{ width: "full" }} />
        <div className="container mx-auto px-4 py-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ContactInfo />
            <SocialLinks />
            <div>
              <h3 className="text-lg font-bold mb-4">I AM</h3>
              <p>
                Seeking opportunities to contribute skills and expertise,
                committed to excellence in every project. Thank you for
                considering me as a valuable asset to your team!
              </p>
            </div>
          </div>
          <DownloadCV />
          <hr className="border-t border-white my-6" />
          <p className="text-center text-sm">
            &copy; 2024 Matin Isakhanli. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
