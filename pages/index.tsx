import type { NextPage } from 'next';
import Image from 'next/image';

import aboutImg from '../public/about-img.webp';
import aboutImg2 from '../public/about-img2.webp';
import companyLogo1 from '../public/company-logo1.webp';
import companyLogo2 from '../public/company-logo2.webp';
import headerImg from '../public/header-img.webp';
import logo from '../public/logo.webp';
import logoDark from '../public/logo-dark.webp';

const LandingPage: NextPage = () => {
  return (
    <div>
      <header className="header-wrapper">
        <div className="logo-block">
          <div className="logo">
            <Image className="site-logo" layout="fixed" alt="logo" src={logo} />
          </div>
          <nav className="nav-bar">
            <div className="nav-item-wrapper nav-active">
              <a href="#" className="nav-item">
                Product overview
              </a>
            </div>
            <div className="nav-item-wrapper">
              <a href="#" className="nav-item">
                Why us
              </a>
            </div>
            <div className="nav-item-wrapper">
              <a href="#" className="nav-item">
                Pricing
              </a>
            </div>
          </nav>
        </div>
        <div className="sign-block">
          <button className="btn sign-in-button">Sign in</button>
          <button className="btn sign-up-button">Sign up</button>
        </div>
      </header>
      <main className="main-wrapper">
        <div className="outer-wrapper overview-wrapper">
          <div className="overview-block">
            <div className="text-block">
              <h1 className="overview-title">Making A/B tests is challenging. We make it easy</h1>
              <p className="overview-subtitle">
                - Multiple clicks to create an experiment, single request to run <br />- Ideal
                solution for startups and mid-size business
              </p>
              <button className="btn small-button">Get started</button>
              <div className="companies">
                <p className="companies-text">You are in good company:</p>
                <div className="company-logo">
                  <Image alt="company" src={companyLogo1} />
                </div>
                <div className="company-logo">
                  <Image className="company-logo" alt="company" src={companyLogo2} />
                </div>
              </div>
            </div>
            <div className="overview-img-block">
              <Image
                className="overview-img"
                alt="company"
                src={headerImg}
                width={600}
                height={612}
                layout="fixed"
              />
            </div>
          </div>
        </div>
        <div className="outer-wrapper product-wrapper">
          <div className="product-block">
            <div className="text-block">
              <h3 className="global-subtitle title-left">Meet the product</h3>
              <h1 className="global-title title-left">
                The single place for all your product experiments
              </h1>
              <div className="product-cons-wrapper">
                <div className="product-cons">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#F7F8FC" />
                    <path
                      d="M32.1666 23L26.2741 28.8925L25.0958 27.7142L29.8099 23L25.0958 18.2858L26.2741 17.1075L32.1666 23ZM16.1899 23L20.9041 27.7142L19.7258 28.8925L13.8333 23L19.7258 17.1075L20.9041 18.2858L16.1899 23Z"
                      fill="#5262EE"
                    />
                  </svg>
                  <div className="product-cons-text">
                    Run experiment by passing your internal user id.
                  </div>
                </div>
                <div className="product-cons">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#F7F8FC" />
                    <path
                      d="M27.5833 29.5C26.8098 29.5 26.0679 29.1927 25.5209 28.6457C24.974 28.0987 24.6667 27.3569 24.6667 26.5833C24.6667 25.8098 24.974 25.0679 25.5209 24.5209C26.0679 23.974 26.8098 23.6667 27.5833 23.6667C28.3569 23.6667 29.0987 23.974 29.6457 24.5209C30.1927 25.0679 30.5 25.8098 30.5 26.5833C30.5 27.3569 30.1927 28.0987 29.6457 28.6457C29.0987 29.1927 28.3569 29.5 27.5833 29.5ZM27.5833 27.8333C27.9149 27.8333 28.2328 27.7016 28.4672 27.4672C28.7016 27.2328 28.8333 26.9149 28.8333 26.5833C28.8333 26.2518 28.7016 25.9339 28.4672 25.6995C28.2328 25.465 27.9149 25.3333 27.5833 25.3333C27.2518 25.3333 26.9339 25.465 26.6995 25.6995C26.465 25.9339 26.3333 26.2518 26.3333 26.5833C26.3333 26.9149 26.465 27.2328 26.6995 27.4672C26.9339 27.7016 27.2518 27.8333 27.5833 27.8333ZM18.4167 20.3333C18.0336 20.3333 17.6544 20.2579 17.3005 20.1113C16.9466 19.9647 16.6251 19.7499 16.3543 19.4791C16.0834 19.2082 15.8686 18.8867 15.722 18.5328C15.5754 18.179 15.5 17.7997 15.5 17.4167C15.5 17.0336 15.5754 16.6544 15.722 16.3005C15.8686 15.9466 16.0834 15.6251 16.3543 15.3543C16.6251 15.0834 16.9466 14.8686 17.3005 14.722C17.6544 14.5754 18.0336 14.5 18.4167 14.5C19.1902 14.5 19.9321 14.8073 20.4791 15.3543C21.026 15.9013 21.3333 16.6431 21.3333 17.4167C21.3333 18.1902 21.026 18.9321 20.4791 19.4791C19.9321 20.026 19.1902 20.3333 18.4167 20.3333ZM18.4167 18.6667C18.7482 18.6667 19.0661 18.535 19.3006 18.3006C19.535 18.0661 19.6667 17.7482 19.6667 17.4167C19.6667 17.0851 19.535 16.7672 19.3006 16.5328C19.0661 16.2984 18.7482 16.1667 18.4167 16.1667C18.0851 16.1667 17.7672 16.2984 17.5328 16.5328C17.2984 16.7672 17.1667 17.0851 17.1667 17.4167C17.1667 17.7482 17.2984 18.0661 17.5328 18.3006C17.7672 18.535 18.0851 18.6667 18.4167 18.6667ZM28.8925 14.9292L30.0708 16.1075L17.1083 29.0708L15.93 27.8925L28.8917 14.9292H28.8925Z"
                      fill="#5262EE"
                    />
                  </svg>

                  <div className="product-cons-text">
                    ABRouter will define a branch based on branches percentage.
                  </div>
                </div>
                <div className="product-cons">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#F7F7FC" />
                    <path
                      d="M17.1667 14.5V27.8333H30.5V29.5H15.5V14.5H17.1667ZM29.9108 17.2442L31.0892 18.4225L26.3333 23.1783L23.8333 20.6792L20.2558 24.2558L19.0775 23.0775L23.8333 18.3217L26.3333 20.8208L29.9108 17.2442Z"
                      fill="#5262EE"
                    />
                  </svg>
                  <div className="product-cons-text">
                    The system will remember the branch for further requests.
                  </div>
                </div>
                <div className="product-cons">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#F7F8FC" />
                    <path
                      d="M29.6667 31.3334H16.3333C16.1123 31.3334 15.9004 31.2456 15.7441 31.0893C15.5878 30.933 15.5 30.721 15.5 30.5V15.5C15.5 15.279 15.5878 15.067 15.7441 14.9108C15.9004 14.7545 16.1123 14.6667 16.3333 14.6667H29.6667C29.8877 14.6667 30.0996 14.7545 30.2559 14.9108C30.4122 15.067 30.5 15.279 30.5 15.5V30.5C30.5 30.721 30.4122 30.933 30.2559 31.0893C30.0996 31.2456 29.8877 31.3334 29.6667 31.3334ZM28.8333 29.6667V16.3334H17.1667V29.6667H28.8333ZM19.6667 18.8334H26.3333V20.5H19.6667V18.8334ZM19.6667 22.1667H26.3333V23.8334H19.6667V22.1667ZM19.6667 25.5H23.8333V27.1667H19.6667V25.5Z"
                      fill="#5262EE"
                    />
                  </svg>

                  <div className="product-cons-text">Curl and postman collection included</div>
                </div>
                <div className="product-cons">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle cx="22.5" cy="22.5" r="22.5" fill="#F7F8FC" />
                    <path
                      d="M20.3109 27H21.1668V22.8333H22.8334V27H23.6893C23.7993 25.9983 24.3101 25.1716 25.1393 24.2691C25.2334 24.1675 25.8326 23.5466 25.9034 23.4583C26.492 22.723 26.8609 21.8364 26.9677 20.9006C27.0745 19.9648 26.9148 19.0179 26.507 18.1689C26.0992 17.3199 25.4599 16.6034 24.6627 16.1018C23.8655 15.6002 22.9428 15.334 22.001 15.3338C21.0591 15.3336 20.1364 15.5994 19.339 16.1007C18.5416 16.6019 17.902 17.3182 17.4938 18.167C17.0856 19.0158 16.9255 19.9627 17.0319 20.8985C17.1383 21.8343 17.5068 22.7211 18.0951 23.4566C18.1668 23.5458 18.7676 24.1675 18.8601 24.2683C19.6901 25.1716 20.2009 25.9983 20.3109 27ZM20.3334 28.6666V29.5H23.6668V28.6666H20.3334ZM16.7951 24.5C16.0102 23.5194 15.5184 22.337 15.3761 21.0891C15.2339 19.8412 15.4471 18.5785 15.9911 17.4464C16.5352 16.3144 17.388 15.359 18.4512 14.6905C19.5145 14.0219 20.745 13.6673 22.001 13.6675C23.257 13.6677 24.4874 14.0227 25.5504 14.6916C26.6135 15.3605 27.466 16.3161 28.0096 17.4484C28.5533 18.5806 28.7661 19.8434 28.6235 21.0912C28.4808 22.3391 27.9886 23.5213 27.2034 24.5016C26.6868 25.145 25.3334 26.1666 25.3334 27.4166V29.5C25.3334 29.942 25.1578 30.3659 24.8453 30.6785C24.5327 30.9911 24.1088 31.1666 23.6668 31.1666H20.3334C19.8914 31.1666 19.4675 30.9911 19.1549 30.6785C18.8424 30.3659 18.6668 29.942 18.6668 29.5V27.4166C18.6668 26.1666 17.3126 25.145 16.7951 24.5Z"
                      fill="#5262EE"
                    />
                  </svg>
                  <div className="product-cons-text">
                    We will show you insights for every experiment based on data that you allow us
                    to use.
                  </div>
                </div>
              </div>
              <button className="btn explore-button">Explore ABRouter ></button>
            </div>
            <div className="tab-img-block">
              {/* <img className="tab-img" src="./img/about-img.png" alt="" /> */}
              <div className="tab-img">
                <Image layout="fixed" width={523} height={407} alt="about" src={aboutImg} />
              </div>
              <div className="tabs-wrapper">
                <div className="tab">Management interface</div>
                <div className="tab active-tab">API Interface</div>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-wrapper features-wrapper">
          <div className="features-block"></div>
          <h3 className="global-subtitle">Features</h3>
          <h1 className="global-title">Benefits from using ABRouter</h1>
          <div className="features-subsubtitle">Сustomize your project using the ABRouter</div>
          <div className="feature-list-wrapper">
            <div className="feature-item">
              <div className="feature-img">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect opacity="0.23" width="76" height="76" rx="38" fill="#32AD67" />
                  <path
                    d="M50 38L44.343 43.657L42.929 42.243L47.172 38L42.929 33.757L44.343 32.343L50 38ZM28.828 38L33.071 42.243L31.657 43.657L26 38L31.657 32.343L33.07 33.757L28.828 38ZM35.788 47H33.66L40.212 29H42.34L35.788 47Z"
                    fill="#32AD67"
                  />
                </svg>
              </div>
              <div className="feature-title">Automation</div>
              <div className="feature-text">
                No one line code needs to create new experiments except request to run experiment.
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-img">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    opacity="0.23"
                    x="0.000244141"
                    width="76"
                    height="76"
                    rx="38"
                    fill="#32AD67"
                  />
                  <path
                    d="M38.0002 44.485L42.2432 40.243C43.0823 39.4038 43.6536 38.3347 43.885 37.1709C44.1165 36.007 43.9976 34.8007 43.5434 33.7044C43.0893 32.6081 42.3202 31.6711 41.3336 31.0118C40.3469 30.3526 39.1869 30.0007 38.0002 30.0007C36.8136 30.0007 35.6536 30.3526 34.6669 31.0118C33.6803 31.6711 32.9112 32.6081 32.4571 33.7044C32.0029 34.8007 31.884 36.007 32.1155 37.1709C32.3469 38.3347 32.9182 39.4038 33.7572 40.243L38.0002 44.485ZM43.6572 41.657L38.0002 47.314L32.3432 41.657C31.2245 40.5382 30.4626 39.1127 30.1539 37.5609C29.8453 36.009 30.0037 34.4005 30.6093 32.9387C31.2148 31.4769 32.2401 30.2275 33.5557 29.3485C34.8713 28.4695 36.418 28.0003 38.0002 28.0003C39.5825 28.0003 41.1292 28.4695 42.4448 29.3485C43.7604 30.2275 44.7857 31.4769 45.3912 32.9387C45.9968 34.4005 46.1552 36.009 45.8466 37.5609C45.5379 39.1127 44.776 40.5382 43.6572 41.657ZM31.0002 48H45.0002V50H31.0002V48Z"
                    fill="#32AD67"
                  />
                </svg>
              </div>
              <div className="feature-title">One place</div>
              <div className="feature-text">Manage all your experiments anytime on any device.</div>
            </div>
            <div className="feature-item">
              <div className="feature-img">
                <svg
                  width="76"
                  height="76"
                  viewBox="0 0 76 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    opacity="0.23"
                    x="0.000488281"
                    width="76"
                    height="76"
                    rx="38"
                    fill="#32AD67"
                  />
                  <path
                    d="M46.0005 48H30.0005C29.7353 48 29.4809 47.8946 29.2934 47.7071C29.1058 47.5196 29.0005 47.2652 29.0005 47V29C29.0005 28.7348 29.1058 28.4804 29.2934 28.2929C29.4809 28.1054 29.7353 28 30.0005 28H46.0005C46.2657 28 46.5201 28.1054 46.7076 28.2929C46.8951 28.4804 47.0005 28.7348 47.0005 29V47C47.0005 47.2652 46.8951 47.5196 46.7076 47.7071C46.5201 47.8946 46.2657 48 46.0005 48ZM45.0005 46V30H31.0005V46H45.0005ZM34.0005 33H42.0005V35H34.0005V33ZM34.0005 37H42.0005V39H34.0005V37ZM34.0005 41H42.0005V43H34.0005V41Z"
                    fill="#32AD67"
                  />
                </svg>
              </div>
              <div className="feature-title">Reporting</div>
              <div className="feature-text">
                The system will create reports for every branch of your experiment to help you make
                the right decision.
              </div>
            </div>
          </div>
        </div>
        <div className="outer-wrapper about-wrapper">
          <div className="about-block">
            <div className="text-block">
              <h3 className="global-subtitle title-left">Features</h3>
              <h1 className="global-title title-left">What is ABRouter?</h1>
              <div className="about-text">
                ABRouter provides the system to run ab-tests/experiments on the back-end side of
                your application.
              </div>
              <button className="btn explore-button">Explore ABRouter ></button>
            </div>
            <div className="tab-img-block">
              <img className="tab-img" src="./img/about-img2.png" alt="" />
              <Image layout="fixed" width={687} height={373} alt="about" src={aboutImg2} />
              <div className="tabs-wrapper">
                <div className="tab active-tab">What is ABRouter?</div>
                <div className="tab">Experiments</div>
                <div className="tab">Branch</div>
                <div className="tab">Easy to manage</div>
                <div className="tab">Best price</div>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-wrapper pricing-wrapper">
          <h3 className="global-subtitle">Pricing</h3>
          <h1 className="global-title">Plans scale with your growth</h1>
          <div className="price-block-wrapper">
            <div className="price-item">
              <div className="price-title">Free</div>
              <div className="price-number">$0/month</div>
              <div className="price-features-block">
                <div className="price-features-title">What you can do?</div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
              </div>
              <button className="btn start-trial-btn">Start free trial</button>
            </div>
            <div className="price-item">
              <div className="price-title">Team</div>
              <div className="price-number">$8/month</div>
              <div className="price-features-block">
                <div className="price-features-title">What you can do?</div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
              </div>
              <button className="btn start-trial-btn">Start free trial</button>
            </div>
            <div className="price-item">
              <div className="price-title">Premium</div>
              <div className="price-number">$20/month</div>
              <div className="price-features-block">
                <div className="price-features-title">What you can do?</div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">Some feature text</div>
                </div>
                <div className="price-features-item">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse opacity="0.2" cx="10" cy="10.101" rx="10" ry="10.101" fill="white" />
                    <g clipPath="url(#clip0_35_542)">
                      <path
                        d="M9.38877 11.9508L13.7294 7.5658L14.3976 8.24026L9.38877 13.2997L6.38354 10.2641L7.05127 9.58967L9.38877 11.9508Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_35_542">
                        <rect
                          width="11.3333"
                          height="11.4478"
                          fill="white"
                          transform="translate(4.66675 4.71387)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="price-feature-text">
                    Somssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssst
                  </div>
                </div>
              </div>
              <button className="btn start-trial-btn">Start free trial</button>
            </div>
          </div>
        </div>
        <div className="outer-wrapper get-started-wrapper">
          <h1 className="global-title">Getting started is easy</h1>
          <div className="get-started-text">
            Start using ABRouter for free and see how it can improve your application.
          </div>
          <button className="btn small-button">Start free trial</button>
        </div>
      </main>
      <footer className="footer-wrapper">
        <div className="outer-wrapper footer-inner-wrapper">
          <div className="footer-blocks">
            <div className="footer-item">
              <div className="logo">
                <Image className="site-logo" layout="fixed" alt="logo" src={logoDark} />
              </div>
            </div>
            <div className="footer-item">
              <ul className="footer-links">
                <li className="footer-links-item footer-links-item-title">Product</li>
                <li className="footer-links-item">
                  <a href="#">Product overview</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Why us</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Pricing</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Docs</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <ul className="footer-links">
                <li className="footer-links-item footer-links-item-title">A/B tests</li>
                <li className="footer-links-item">
                  <a href="#">Implement A/B tests Laravel</a>
                </li>
                <li className="footer-links-item">
                  <a href="#">Implement A/B tests PHP</a>
                </li>
              </ul>
            </div>
            <div className="footer-item">
              <ul className="footer-links">
                <li className="footer-links-item footer-links-item-title">Support</li>
                <li className="footer-links-item">
                  <a href="#">abrouter@prixedmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright-block">
            <div className="copyright-text">© ABROUTER 2021. All rights reserved.</div>
            <div className="copyright-privacy-and-terms">
              <div className="privacy">
                <a href="#">Privacy Policy</a>
              </div>
              <div className="terms">
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
