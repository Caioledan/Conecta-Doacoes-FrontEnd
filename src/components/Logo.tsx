import Logo_main from '../assets/images/logo-conecta-doações.png';

function Logo() {
  return (
    <img
      src={Logo_main}
      alt=""
      className={`
                w-auto h-20 min-h-16 max-h-28
                md:h-28 md:min-h-24 md:max-h-36
                xl:h-36 xl:min-h-32 xl:max-h-44
                object-contain flex-shrink-0
                
            `
        .trim()
        .replace(/\s+/g, ' ')}
    />
  );
}

export default Logo;
