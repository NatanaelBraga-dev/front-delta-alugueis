import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import './VehiclesSection.css';

function VehiclesSection() {

    return (

        <section className="vehicles-section">

            <div className="section-title">
                <h2>Veículos mais alugados</h2>
            </div>

            <div className="vehicles-container">

                <Card className="vehicle-card">

                    <img
                        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
                        alt="HB20"
                    />

                    <div className="vehicle-info">
                        <div className='vehicle-info-specs'>

                            <h3>Corolla</h3>
                            <p className='paragraph-prec'>R$ 340,00</p>

                        </div>

                        <Button
                            label="Alugar agora"
                            icon="pi pi-car"
                            className="vehicle-button"
                        />
                    </div>

                </Card>

                <Card className="vehicle-card">

                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                        alt="Corolla"
                    />

                    <div className="vehicle-info">
                        <div className='vehicle-info-specs'>

                            <h3>Corolla</h3>
                            <p className='paragraph-prec'>R$ 340,00</p>

                        </div>
                        
                        <Button
                            label="Alugar agora"
                            icon="pi pi-car"
                            className="vehicle-button"
                        />
                    </div>

                </Card>

                <Card className="vehicle-card">

                    <img
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                        alt="Corolla"
                    />

                    <div className="vehicle-info">
                        <div className='vehicle-info-specs'>

                            <h3>Corolla</h3>
                            <p className='paragraph-prec'>R$ 340,00</p>

                        </div>

                        <Button
                            label="Alugar agora"
                            icon="pi pi-car"
                            className="vehicle-button"
                        />
                    </div>

                </Card>

            </div>

        </section>

    );
}

export default VehiclesSection;