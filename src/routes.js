import Cardapio from 'pages/Cardapio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Inicio from 'pages/Inicio';

export default function AppRouter() {
    return (
        <main>
            <Router>
                <Menu/>
                <Routes>
                    <Route path='/' element={<PaginaPadrao/>}>
                        <Route index element={<Inicio/>}/>
                        <Route path='cardapio' element={<Cardapio/>}/>
                    </Route>
                </Routes>
            </Router>
        </main>
    );
}