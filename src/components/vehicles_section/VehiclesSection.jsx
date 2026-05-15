import { Card } from 'primereact/card';

import './VehiclesSection.css';

function VehiclesSection() {

    return (

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

            </div>

        </section>

    );
}

export default VehiclesSection;