import parcialmenteNublado from '../../assets/weatherIcons/parcialmente-nublado.svg'
import chuvaNeve from '../../assets/weatherIcons/chuva-neve.svg'
import chuva from '../../assets/weatherIcons/chuva.svg'
import chuvasEsparsas from '../../assets/weatherIcons/chuvas-esparsas.svg'
import chuviscos from '../../assets/weatherIcons/chuviscos.svg'
import ensolarado from '../../assets/weatherIcons/ensolarado.svg'
import estrelado from '../../assets/weatherIcons/estrelado.svg'
import gelo from '../../assets/weatherIcons/gelo.svg'
import muitasNuvens from '../../assets/weatherIcons/muitas-nuvens.svg'
import neblina from '../../assets/weatherIcons/neblina.svg'
import neve from '../../assets/weatherIcons/neve.svg'
import tempestade from '../../assets/weatherIcons/tempestade.svg'
import tempestadesIsoladas from '../../assets/weatherIcons/tempestades-isoladas.svg'
import tempoNublado from '../../assets/weatherIcons/tempo-nublado.svg'
import trovoadas from '../../assets/weatherIcons/trovoadas.svg'
import ventania from '../../assets/weatherIcons/ventania.svg'
import poucasNuvens from '../../assets/weatherIcons/poucas-nuvens.svg'

const WeatherIcon = (weather?: string) => {
    if (weather === 'Tempo nublado') {

        return <img src={tempoNublado} alt={weather}/>

    } else if (weather === 'Parcialmente nublado') {

        return <img src={parcialmenteNublado} alt={weather}/>

    } else if (
        weather === 'Tempo limpo' ||
        weather === 'Ensolarado' ||
        weather === 'Ar quente' 
    ) {

        return <img src={ensolarado} alt={weather}/>
        
    } else if (weather === 'Sol com poucas nuvens') {

        return <img src={poucasNuvens} alt={weather}/>

    } else if (weather === 'Ensolarado com muitas nuvens') {

        return <img src={muitasNuvens} alt={weather}/>

    } else if (weather === 'Chuvas esparsas') {

        return <img src={chuvasEsparsas} alt={weather}/>

    } else if (weather === 'Chuva') {

        return <img src={chuva} alt={weather}/>

    } else if (
        weather === 'Chuviscos' ||
        weather === 'Alguns chuviscos'
    ) {

        return <img src={chuviscos} alt={weather}/>
        
    } else if (weather === 'Tempestades isoladas') {

        return <img src={tempestadesIsoladas} alt={weather}/>

    } else if (weather === 'Trovoadas dispersas') {

        return <img src={trovoadas} alt={weather}/>

    } else if (weather === 'Estrelado') {

        return <img src={estrelado} alt={weather}/>

    } else if (
        weather === 'Tempestade forte' ||
        weather === 'Tempestade tropical' ||
        weather === 'Tempestades severas' ||
        weather === 'Tempestades' 
    ) {

        return <img src={tempestade} alt={weather}/>
        
    } else if (
        weather === 'Ventania' ||
        weather === 'Vento acentuado' ||
        weather === 'Ventania com neve' ||
        weather === 'Tempestade de areia' ||
        weather === 'Poeira' ||
        weather === 'Furacão' ||
        weather === 'Tempo frio'
    ) {

        return <img src={ventania} alt={weather}/>
        
    } else if (
        weather === 'Chuviscos com neve' ||
        weather === 'Misto chuva e granizo' ||
        weather === 'Misto de neve e chuva' ||
        weather === 'Misto chuva e gelo'
    ) {

        return <img src={chuvaNeve} alt={weather}/>
        
    } else if (
        weather === 'Neblina' ||
        weather === 'Fumacento'
    ) {

        return <img src={neblina} alt={weather}/>
        
    } else if (
        weather === 'Neve' ||
        weather === 'Granizo' ||
        weather === 'Tempestade com neve' ||
        weather === 'Misto neve e gelo' ||
        weather === 'Congelamento chuva' ||
        weather === 'Queda de neve' ||
        weather === 'Geada fina'
    ) {

        return <img src={neve} alt={weather}/>
        
    } else if (
        weather === 'Gelo' ||
        weather === 'Neve baixa' ||
        weather === 'Pesados neve' ||
        weather === 'Neve pesada' 
    ) {

        return <img src={gelo} alt={weather}/>
        
    } else {
        return <p>Tem nada aqui</p>
    }
    
}

export default WeatherIcon