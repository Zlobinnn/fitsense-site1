import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <Image 
          src="/images/logo.png" 
          alt="FITSENSE Logo" 
          width={240} 
          height={80} 
          className="logo" 
        />
      </header>

      <main className="main">
        <h1>Смарт-костюмы для вашего здоровья</h1>
        <p className="tagline">
          Технологии будущего, доступные сегодня. <br />
          Уникальный стиль и контроль вашего состояния.
        </p>
        <Image 
          src="/images/suit.png" 
          alt="Спортивный костюм" 
          width={300} 
          height={300} 
          className="product-image" 
        />
        <div className="price-container">
          <p className="old-price">$500</p>
          <p className="new-price">$300</p>
        </div>
        <button className="btn-buy">
          <a 
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Купить сейчас
          </a>
        </button>
      </main>

      <footer className="footer">
        <p>&copy; 2024 FITSENSE. Сделано с заботой о вашем здоровье.</p>
      </footer>
    </div>
  );
}
