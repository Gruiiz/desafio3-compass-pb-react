
function Footer() {
    return (
        <footer className="absolute w-full h-[505px] left-[calc(50%-720px)] bottom-0 bg-white border-t border-black/[0.17]">
          <div className="absolute left-[6.94%] right-[6.94%] top-[9.5%] bottom-[7.52%]">
            {/* Left Section */}
            <div className="absolute left-0 top-0">
              <h2 className="font-poppins font-bold text-2xl leading-9 text-black">Funiro.</h2>
              <p className="font-poppins text-base leading-6 text-[#9F9F9F] mt-16 max-w-[300px]">
                400 University Drive Suite 200 Coral Gables,
                <br /> FL 33134 USA
              </p>
              
              {/* Social Media Icons */}
              <div className="mt-8 flex space-x-4">
                {/* Facebook */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="w-[34px] h-[34px] relative">
                  <div className="absolute w-full h-full rounded-full bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.15)]">
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3" viewBox="0 0 12 12" fill="none">
                      <path d="M7.5 4V3C7.5 2.73478 7.60536 2.48043 7.79289 2.29289C7.98043 2.10536 8.23478 2 8.5 2H9.5V0H7.5C6.70435 0 5.94129 0.31607 5.37868 0.87868C4.81607 1.44129 4.5 2.20435 4.5 3V4H2.5V6H4.5V12H7.5V6H9.5L10.5 4H7.5Z" fill="black"/>
                    </svg>
                  </div>
                </div>
                </a>

            {/* Instagram */}
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="w-[34px] h-[34px] relative">
            <div className="absolute w-full h-full rounded-full bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.15)]">
                <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3" viewBox="0 0 13 13">
                <path 
                    d="M9.5 1H3.5C2.11929 1 1 2.11929 1 3.5V9.5C1 10.8807 2.11929 12 3.5 12H9.5C10.8807 12 12 10.8807 12 9.5V3.5C12 2.11929 10.8807 1 9.5 1Z"
                    stroke="black"
                    strokeWidth="1"
                    fill="none"
                />
                <circle 
                    cx="6.5" 
                    cy="6.5" 
                    r="2.5" 
                    stroke="black"
                    strokeWidth="1"
                    fill="none"
                />
                <circle 
                    cx="9.5" 
                    cy="3.5" 
                    r="0.5" 
                    stroke="black"
                    strokeWidth="1"
                    fill="none"
                />
                </svg>
            </div>
            </div>
            </a>

                {/* Twitter */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <div className="w-[34px] h-[34px] relative">
                  <div className="absolute w-full h-full rounded-full bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.15)]">
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3" viewBox="0 0 13 13" fill="none">
                      <path d="M13 1.54286C12.5 1.80357 11.9571 1.97321 11.3929 2.05357C11.9786 1.72321 12.4214 1.17857 12.6286 0.517857C12.0857 0.839286 11.4857 1.07143 10.85 1.19643C10.3357 0.642857 9.61429 0.303571 8.82143 0.303571C7.29286 0.303571 6.05357 1.54286 6.05357 3.07143C6.05357 3.32143 6.08214 3.56071 6.14286 3.78929C3.97857 3.65357 2.07143 2.55357 0.714286 0.875C0.435714 1.34286 0.278571 1.87679 0.278571 2.44643C0.278571 3.52679 0.828571 4.48214 1.67857 5.02679C1.22143 5.00893 0.785714 4.88393 0.407143 4.66607V4.70536C0.407143 6.05357 1.35714 7.17857 2.64286 7.46429C2.37857 7.53393 2.08929 7.57143 1.79286 7.57143C1.58571 7.57143 1.38571 7.55179 1.19286 7.50536C1.59286 8.61071 2.62857 9.41429 3.85714 9.44286C2.89286 10.1786 1.67857 10.6214 0.364286 10.6214C0.107143 10.6214 -0.142857 10.6036 -0.385714 10.5679C0.857143 11.3571 2.32857 11.8214 3.92857 11.8214C8.82143 11.8214 11.4857 7.625 11.4857 3.98214L11.475 3.55357C12.0286 3.17857 12.5 2.70536 12.8929 2.16071L13 1.54286Z" fill="black"/>
                    </svg>
                  </div>
                </div>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <div className="w-[34px] h-[34px] relative">
                  <div className="absolute w-full h-full rounded-full bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.15)]">
                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3" viewBox="0 0 11 11" fill="none">
                      <path d="M2.45455 11V3.66667H0V11H2.45455ZM1.22727 2.66667C1.90909 2.66667 2.45455 2.09167 2.45455 1.375C2.45455 0.658333 1.90909 0.083333 1.22727 0.083333C0.545455 0.083333 0 0.658333 0 1.375C0 2.09167 0.545455 2.66667 1.22727 2.66667ZM11 11H8.54545V7.425C8.54545 6.575 8.54545 5.5 7.31818 5.5C6.09091 5.5 5.90909 6.4 5.90909 7.33333V11H3.45455V3.66667H5.81818V4.75H5.84091C6.18182 4.125 6.95455 3.46667 8.09091 3.46667C10.5909 3.46667 11 5 11 6.91667V11Z" fill="black"/>
                    </svg>
                  </div>
                </div>
                </a>
              </div>
            </div>
            
            {/* Links Section */}
            <div className="absolute left-[36.32%] top-0">
              <h3 className="font-poppins font-medium text-base text-[#9F9F9F]">Links</h3>
              <ul className="mt-16 space-y-7">
                <li className="font-poppins font-medium text-base text-black">Home</li>
                <li className="font-poppins font-medium text-base text-black">Shop</li>
                <li className="font-poppins font-medium text-base text-black">About</li>
                <li className="font-poppins font-medium text-base text-black">Contact</li>
              </ul>
            </div>
    
            {/* Help Section */}
            <div className="absolute left-[51.04%] top-0">
              <h3 className="font-poppins font-medium text-base text-[#9F9F9F]">Help</h3>
              <ul className="mt-16 space-y-7">
                <li className="font-poppins font-medium text-base text-black">Payment Options</li>
                <li className="font-poppins font-medium text-base text-black">Returns</li>
                <li className="font-poppins font-medium text-base text-black">Privacy Policies</li>
              </ul>
            </div>
    
            {/* Newsletter Section */}
            <div className="absolute left-[65.76%] top-0">
              <h3 className="font-poppins font-medium text-base text-[#9F9F9F]">Newsletter</h3>
              <div className="mt-16 flex">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    className="font-poppins text-sm text-[#9F9F9F] border-b border-black pb-1 w-[200px]"
                  />
                </div>
                <button className="font-poppins font-medium text-sm text-black border-b border-black pb-1 ml-8">
                  SUBSCRIBE
                </button>
              </div>
            </div>
    
            {/* Footer Bottom */}
            <div className="absolute left-0 right-0 bottom-0">
              <div className="border-t border-[#D9D9D9] pt-8">
                <p className="font-poppins text-base text-black">
                  2023 furino. All rights reverved
                </p>
              </div>
            </div>
          </div>
        </footer>
      );
    };
export default Footer;
