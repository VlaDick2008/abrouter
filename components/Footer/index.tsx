import * as React from 'react';
import Image from 'next/image';

import logo from '../../public/logo.webp';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <footer className="footer-wrapper">
      <div className="outer-wrapper profile-footer">
        <div className="footer-blocks">
          <div className="footer-item">
            <div className="logo">
              <Image className="site-logo" layout="fixed" alt="logo" src={logo} />
            </div>
          </div>
          <div className="footer-item">
            <ul className="footer-links">
              <li className="footer-links-item footer-links-item-title profile">Product</li>
              <li className="footer-links-item profile">
                <a href="#">Product overview</a>
              </li>
              <li className="footer-links-item profile">
                <a href="#">Why us</a>
              </li>
              <li className="footer-links-item profile">
                <a href="#">Pricing</a>
              </li>
              <li className="footer-links-item profile">
                <a href="#">Docs</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <ul className="footer-links">
              <li className="footer-links-item footer-links-item-title profile">A/B tests</li>
              <li className="footer-links-item profile">
                <a href="#">Implement A/B tests Laravel</a>
              </li>
              <li className="footer-links-item profile">
                <a href="#">Implement A/B tests PHP</a>
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <ul className="footer-links">
              <li className="footer-links-item profile footer-links-item-title profile">Support</li>
              <li className="footer-links-item profile">
                <a href="#">abrouter@prixedmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-block">
          <div className="copyright-text profile">© ABROUTER 2021. All rights reserved.</div>
          <div className="copyright-privacy-and-terms">
            <div className="privacy profile">
              <a href="#">Privacy Policy</a>
            </div>
            <div className="terms profile">
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
