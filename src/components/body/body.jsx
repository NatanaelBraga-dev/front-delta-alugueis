import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import './Body.css';

function Body() {

    return (

        <main>

            {/* HERO */}
            <section className="hero-section">

                <div className="hero-overlay"></div>

                <div className="hero-content flex flex-column justify-content-center align-items-center">

                    <h1 className='hero-title'>
                        SEU DESTINO <span>COMEÇA</span> AQUI
                    </h1>

                    <form className="hero-form">

                        <input
                            type="text"
                            placeholder="Cidade de retirada"
                        />

                        <input
                            type="date"
                            placeholder="Data"
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

            {/* VEÍCULOS */}
            <section className="vehicles-section">

                <div className="section-title">

                    <h2>Veículos mais alugados</h2>

                </div>

                <div className="flex flex-wrap justify-content-center gap-4">

                    <Card className="vehicle-card">

                        <img
                            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
                            alt="HB20"
                        />

                        <h3>HB20</h3>
                        <p>Econômico e confortável</p>

                    </Card>

                    <Card className="vehicle-card">

                        <img
                            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                            alt="Corolla"
                        />

                        <h3>Corolla</h3>
                        <p>Elegância e desempenho</p>

                    </Card>

                    <Card className="vehicle-card">

                        <img
                            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
                            alt="Compass"
                        />

                        <h3>Compass</h3>
                        <p>Perfeito para aventuras</p>

                    </Card>

                </div>

            </section>

            {/* PARCEIROS */}
            <section className="partners-section">

                <h2>Principais parceiros</h2>

                <div className="flex justify-content-center align-items-center flex-wrap gap-6">

                    <div className="partner-logo">BMW</div>
                    <div className="partner-logo">HYUNDAI</div>
                    <div className="partner-logo">TOYOTA</div>
                    <div className="partner-logo">JEEP</div>

                </div>

            </section>

            {/* FOOTER */}
            <footer className="footer">

                <div className="flex justify-content-between flex-wrap gap-4">

                    <div>

                        <h3>Delta Motors</h3>

                        <p>
                            Os melhores veículos para sua jornada.
                        </p>

                    </div>

                    <div>

                        <h4>Contato</h4>

                        <p>(85) 99999-9999</p>
                        <p>contato@delta.com</p>

                    </div>

                </div>

            </footer>

        </main>

    );
}

export default Body;