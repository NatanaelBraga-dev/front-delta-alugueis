import { Button } from 'primereact/button';

import './HeroSection.css';

function HeroSection() {

    return (

        <section className="hero-section">

            <div className="hero-overlay"></div>

            <div className="hero-content flex flex-column justify-content-center align-items-center">

                <h1 className='hero-title'>
                    SEU DESTINO <span>COMEÇA</span> AQUI
                </h1>

                <form className="hero-form">

                    <input
                        maxLength={40}
                        type="text"
                        placeholder="Cidade de retirada"
                    />

                    <input
                        type="date"
                    />

                    <input
                        type="text"
                        placeholder="Modelo do veículo"
                    />

                </form>

                <Button
                    label="VER OPÇÕES"
                    icon="pi pi-car"
                    className="hero-button"
                />

            </div>

        </section>

    );
}

export default HeroSection;