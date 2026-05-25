import './PartnersSection.css';

function PartnersSection() {

    const partners = [
        {
            name: 'BMW',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg'
        },
        {
            name: 'HYUNDAI',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg'
        },
        {
            name: 'TOYOTA',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg'
        },
        {
            name: 'JEEP',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Jeep_logo.svg'
        },
        {
            name: 'AUDI',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Audi_logo_detail.svg'
        },
        {
            name: 'MERCEDES',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg'
        }
    ];

    const infinitePartners = [
        ...partners,
        ...partners,
        ...partners,
        ...partners
    ];

    return (

        <section className="partners-section">

            <h2>NOSSOS PARCEIROS</h2>

            <div className="carousel">

                <div className="carousel-track">

                    {infinitePartners.map((partner, index) => (

                        <div className="partner-card" key={index}>

                            <img
                                src={partner.logo}
                                alt={partner.name}
                            />

                            <h3>{partner.name}</h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );
}

export default PartnersSection;