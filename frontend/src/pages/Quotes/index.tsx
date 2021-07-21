import React from 'react'

import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import { Content, Main } from './styles'

const Quotes: React.FC = () => {


    return (
        <>
            <Menu></Menu>
            <Main>
                <Content>
                    <h1>Cotações</h1>
                    <hr/>
                    <div className="cards-container">
                        <div className="card">
                            <h2>Algodão</h2>
                            <hr/>
                            <iframe title="Algodão - IMEA" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=131"></iframe>
                        </div>
                        <div className="card">
                            <h2>Arroz</h2>
                            <hr/>
                            <iframe title="Arroz" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=167"></iframe>
                        </div>
                        <div className="card">
                            <h2>Café</h2>
                            <hr/> 
                            <iframe title="Café B3" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=250"></iframe>
                        </div>
                        <div className="card">
                            <h2>Carne Bovina</h2>
                            <hr/>
                            <iframe title="Boi à vista" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=122"></iframe>
                        </div>
                        <div className="card">
                            <h2>Carne Suína</h2>
                            <hr/>
                            <iframe title="Suíno Bolsa" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=178"></iframe>
                        </div>
                        <div className="card">
                            <h2>Feijão</h2>
                            <hr/>
                            <iframe title="Feijão Atacado" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=227"></iframe>
                        </div>
                        <div className="card">
                            <h2>Frango</h2>
                            <hr/>
                            <iframe title="Frango Congelado" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=205"></iframe>
                        </div>
                        <div className="card">
                            <h2>Laranja</h2>
                            <hr/>
                            <iframe title="Laranja" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=11"></iframe>
                        </div>
                        <div className="card">
                            <h2>Leite</h2>
                            <hr/>
                            <iframe title="Leite" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=155"></iframe>
                        </div>
                        <div className="card">
                            <h2>Mandioca</h2>
                            <hr/>
                            <iframe title="Mandioca" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=135"></iframe>
                        </div>
                        <div className="card">
                            <h2>Melancia</h2>
                            <hr/>
                            <iframe title="Melancia" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=89"></iframe>
                        </div>
                        <div className="card">
                            <h2>Milho</h2>
                            <hr/>
                            <iframe title="Milho" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=130"></iframe>
                        </div>
                        <div className="card">
                            <h2>Soja</h2>
                            <hr/>
                            <iframe title="Soja" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=127"></iframe>
                        </div>
                        <div className="card">
                            <h2>Sorgo</h2>
                            <hr/>
                            <iframe title="Sorgo" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=216"></iframe>
                        </div>
                        <div className="card">
                            <h2>Trigo</h2>
                            <hr/>
                            <iframe title="Trigo" src="https://www.noticiasagricolas.com.br/widgets/cotacoes?id=225"></iframe>
                        </div>
                    </div>
                </Content>
            </Main>
            <Footer></Footer>
        </>
    )
}

export default Quotes