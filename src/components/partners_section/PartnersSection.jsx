import './PartnersSection.css';

function PartnersSection() {

    return (

        <section className="partners-section">

            <h2>Principais parceiros</h2>

            <div className="flex justify-content-center align-items-center flex-wrap gap-6">

                <div className="partner-logo">BMW</div>
                <div className="partner-logo">HYUNDAI</div>
                <div className="partner-logo">TOYOTA</div>
                <div className="partner-logo">JEEP</div>

            </div>

        </section>

    );
}

export default PartnersSection;