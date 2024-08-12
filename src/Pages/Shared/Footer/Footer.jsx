const Footer = () => {
  return (
      <footer className="footer bg-yellow-950 text-base-content p-10 flex flex-col sm:flex-row sm:flex-wrap justify-between">
          <nav className="w-full sm:w-1/2 lg:w-auto mb-4 sm:mb-0">
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="w-full sm:w-1/2 lg:w-auto mb-4 sm:mb-0">
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="w-full sm:w-1/2 lg:w-auto mb-4 sm:mb-0">
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="w-full sm:w-1/2 lg:w-auto">
              <h6 className="footer-title">Newsletter</h6>
              <fieldset className="form-control w-full sm:w-80">
                  <label className="label">
                      <span className="label-text">Enter your email address</span>
                  </label>
                  <div className="join">
                      <input
                          type="text"
                          placeholder="username@site.com"
                          className="input input-bordered join-item w-full sm:w-auto" />
                      <button className="btn btn-primary join-item">Subscribe</button>
                  </div>
              </fieldset>
          </form>
      </footer>
  );
};

export default Footer;
