import logo from "../assets/images/abf2.png";
import React, { useState } from "react";
import { fbIcon, IgIcon, linkedin, twitter } from "../assets";

const Footer = () => {
  const [email, setEmail] = useState(""); // State to store email
  const [message, setMessage] = useState(""); // State to store status message
  const [loading, setLoading] = useState(false); // State to show loading

  // Enhanced email validation with regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Validate email
    if (!email || !validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Google Suscription action URL
    const formActionUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSd3VhnV0gHgX9FzsyKbfPbBBwExgakgsb5mnth9zpwZmnVfIuQ/formResponse"; // Your Google Form URL

    // Google Suscription action URL
    const emailFieldName = "entry.2005620554"; // Replace this with the actual entry name of your email field

    const formData = new FormData();
    formData.append(emailFieldName, email);

    try {
      const response = await fetch(formActionUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail(""); // Reset email input
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("There was an error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-bgColor h-auto w-full p-6 text-fontColors font-poppins">
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <img src={logo} className="h-14 me-3" alt="Logo" />
            </div>
            {/* Using flex to align and distribute space between both sections */}
            <div className="flex w-full justify-between gap-8">
              <div className="w-1/2">
                <h2 className="mb-6 text-lg font-semibold text-fontColors uppercase dark:text-white">
                  Navigation
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://forms.gle/aVgxpmVhVW9Zg4W49"
                      className="hover:underline"
                    >
                      Sponsor / Partner
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://forms.gle/Rdw2vaEJZu46pFiK9"
                      className="hover:underline"
                    >
                      Register to Attend
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="mb-6 text-lg font-semibold text-fontColors uppercase dark:text-white">
                  Newsletter
                </h2>
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                    disabled={loading}
                  />
                  <button
                    onClick={handleSubmit}
                    className="p-2 bg-[#6A1B9A] text-white rounded hover:bg-[#5A138A]"
                    disabled={loading}
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                  {message && <div className="mt-2 text-sm">{message}</div>}
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a
                href="https://github.com/bethheal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LiT
              </a>{" "}
              <a
                href="https://github.com/RuthNyankum"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Ruth
              </a>
              . All Rights Reserved.
            </span>

            {/* Social Media Icons */}
            <div className="flex font-nunito text-xl gap-x-4">
              <a
                href="https://facebook.com/your-facebook-username" // Replace with your Facebook profile link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/your-twitter-username" // Replace with your Twitter profile link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={twitter} alt="Twitter" className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/your-instagram-username" // Replace with your Instagram profile link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={IgIcon} alt="Instagram" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/enzeegh/" // Replace with your LinkedIn profile link
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80"
              >
                <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
