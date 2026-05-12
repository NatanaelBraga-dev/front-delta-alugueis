// import React from  'react';
import { Menubar } from 'primereact/menubar';
import Deltalogotipo2 from './assets/Deltalogotipo2.png'
// import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import 'primeflex/primeflex.css'
import './App.css'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primereact/resources/primereact.min.css'; // core css
        
function App() {

 const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="p-menuitem-text">{item.label}</span>
            {/* {item.badge && <Badge className="ml-auto" value={item.badge} />} */}
            
        </a>

    );
    const items = [
        {
            label: 'Home',
        },
        {
            label: 'Nosso Catálogo',
        },
        {
            label: 'Sobre',
        },
        {
            label: 'Contatos',
            // icon: 'pi pi-envelope',
            // badge: 3,
            template: itemRenderer
        }
    ];

    const start = <img alt="logo" src={Deltalogotipo2} height="70" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <div className="w-full">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}

export default App
