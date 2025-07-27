interface LogoProps {
  className?: string;
  height?: string;
}

function Logo({ className, height }: LogoProps = {}) {
  return (
    <img
      src="src\assets\images\logo-conecta-doações.png"
      alt="Conecta Doações Logo"
      className={`
                w-auto h-20 min-h-16 max-h-28
                md:h-28 md:min-h-24 md:max-h-36
                xl:h-36 xl:min-h-32 xl:max-h-44
                object-contain flex-shrink-0
                ${className || ''}
            `
        .trim()
        .replace(/\s+/g, ' ')}
      style={{ height: height }}
    />
  );
}

export default Logo;
