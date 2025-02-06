import { useState, FormEvent } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Função de validação de e-mail com regex
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please, enter a valid e-mail!');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please, enter a valid e-mail!');
      return;
    }

    // Se passar na validação
    setError('');
    setIsSubscribed(true);
    setEmail(''); // Limpa o campo

    // Reseta a mensagem após 3 segundos
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };


  return (
    <footer className="w-full bg-white border-t border-black/[0.17] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="font-poppins font-bold text-2xl leading-9 text-black">Funiro.</h2>
            <p className="font-poppins text-base leading-6 text-[#9F9F9F] mt-4">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
            
            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4">
              {["facebook", "instagram", "twitter", "linkedin"].map((social) => (
                <a key={social} href={`https://www.${social}.com`} target="_blank" rel="noopener noreferrer" className="w-8 h-8">
                  <div className="w-full h-full rounded-full bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.15)] flex items-center justify-center">
                    <img src={`/src/assets/icons/${social}.svg`} alt={social} className="w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 className="font-poppins font-medium text-base text-[#9F9F9F]">Links</h3>
            <ul className="mt-4 space-y-4">
              {["Home", "Shop", "About", "Contact"].map((link) => (
                <li key={link}>
                <a href="#" className="font-poppins font-medium text-base text-black hover:text-gray-600 transition-colors cursor-pointer">
                  {link}
                </a>
              </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="font-poppins font-medium text-base text-[#9F9F9F]">Help</h3>
            <ul className="mt-4 space-y-4">
              {["Payment Options", "Returns", "Privacy Policies"].map((item) => (
                <li key={item}>
                <a href="#" className="font-poppins font-medium text-base text-black hover:text-gray-600 transition-colors cursor-pointer">
                  {item}
                </a>
              </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-poppins font-medium text-base text-[#9F9F9F]">Newsletter</h3>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className={`font-poppins text-sm text-[#9F9F9F] border-b ${
                    error ? 'border-red-500' : 'border-black'
                  } pb-1 flex-1`}
                />
                <button
                  type="submit"
                  className="font-poppins font-medium text-sm text-black border-b border-black pb-1 mt-2 w-full sm:w-auto hover:bg-gray-100 transition-colors"
                >
                  SUBSCRIBE
                </button>
              </div>
              
              {/* Mensagens de erro e sucesso */}
              {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
              )}
              {isSubscribed && (
                <p className="text-green-600 text-sm mt-1">
                  Subscribed!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#D9D9D9] mt-8 pt-8">
          <p className="font-poppins text-base text-black text-left">
            2023 furino. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
