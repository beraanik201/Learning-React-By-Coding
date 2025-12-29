import contact from "../styles/contact.css";
const Contact = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-card">
        <div className="contact-page-leftbar">
          <h1>Contact Information</h1>
          <p>Say something to start a live chat</p>
          <p className="contact-logo">+91 7872450163</p>
          <p className="mail-logo">beraanik201@gmail.com</p>
          <p className="location-logo">Kolkata, West Bengal</p>
          <div className="social-logos">
            <div className="social-icon facebook-logo" title="Facebook"></div>
            <div className="social-icon thread-logo" title="Thread"></div>
            <div className="social-icon twitter-logo" title="Twitter"></div>
          </div>
        </div>
        <div className="contact-page-rightbar">
          <form className="contact-form">
            <label>
              First Name
              <input type="text" name="firstName" required />
            </label>
            <label>
              Last Name
              <input type="text" name="lastName" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Phone Number
              <input type="tel" name="phone" required />
            </label>
            <div className="form-subject-group">
              <p className="form-subject-title">Select Subject?</p>
              <div className="radio-group">
                <label className="radio-option">
                  <input type="radio" name="subject" value="general" required />
                  <span>General Inquiry</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="subject" value="demo" required />
                  <span>Call For Demo</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="subject" value="meeting" required />
                  <span>Schedule a Meeting</span>
                </label>
                <label className="radio-option">
                  <input type="radio" name="subject" value="other" required />
                  <span>Other</span>
                </label>
              </div>
            </div>
            <div className="message-group">
              <p>Message</p>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="2"
                required
              ></textarea>
            </div>
            <div className="form-submit-button-container">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
