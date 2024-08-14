import logo from '../../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer gradient-bg text-base-content p-10">
    <div className="w-full flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
      <aside className="w-full md:w-1/4 flex flex-col items-center md:items-start">
    <img className='mb-5' src={logo} alt="" />
        <p className="text-center md:text-left text-yellow-100">
          SK-shop online Industries Ltd.
          <br />
          Providing reliable online service since 2024
        </p>
      </aside>
      <nav className="w-full md:w-1/4 flex flex-col items-center md:items-start text-yellow-100">
        <h6 className="footer-title mb-4">Services</h6>
        <a className="link link-hover">Online Order</a>
        <a className="link link-hover">Home Delivery</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="w-full md:w-1/4 flex flex-col items-center md:items-start text-yellow-200">
        <h6 className="footer-title mb-4">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="w-full md:w-1/4 flex flex-col items-center md:items-start text-yellow-200">
        <h6 className="footer-title mb-4">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </div>
  </footer>
  
  );
};

export default Footer;
