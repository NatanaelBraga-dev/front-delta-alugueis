import { useEffect, useState } from 'react';

import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';

import Deltalogotipo2 from '../../assets/Deltalogotipo2.png';

import './Header.css';

function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const items = [
        { label: 'HOME' },
        { label: 'NOSSO CATÁLOGO' },
        { label: 'SOBRE' },
        { label: 'CONTATOS' }
    ];

    const start = (
        <img
            alt="logo"
            src={Deltalogotipo2}
            height="75"
        />
    );

    const end = (
        <Avatar
            image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
            shape="circle"
        />
    );

    return (

        <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>

            <Menubar
                model={items}
                start={start}
                end={end}
            />

        </header>

    );
}

export default Header;