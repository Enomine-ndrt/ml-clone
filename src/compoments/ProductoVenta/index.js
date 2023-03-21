
import React from 'react';
import {
    Container,
    Estado,
    Row,
    HeartIcon,
    Price,
    Card,
    CheckIcon,
    Color,
    Cantidad,
    ButtonCard,
    Beneficios,
    CopaIcon,
    ShildeIcon,
    Button

} from './styles';

export const ProductoVenta = () => {
  return (
    <Container>
        <Estado>Nuevo | 4 vendidos</Estado>
        <Row>
            <h1>Tarjeta De Sonido Negra, Tarjeta De Sonido Pci Envolvente In</h1>
            <HeartIcon/>
        </Row>
        <Price>
        $1,056.83
        </Price>
        <Card>
            <CheckIcon/>
            <div>
                <span className='title'>Llega gratis mañana</span>
                <span className='detalle'>Beneficio mercado puntos</span>
                <a href='#' className='more'>Ver mas formas de entrega</a>
            </div>
        </Card>
        <Color>
            color: <strong>Negro/Rojo</strong>
        </Color>
        <Color>
            Color de la luz: <strong>Rojo</strong>
        </Color>
        <Cantidad>
            <p>Cantidad</p>
            <strong>1 Unidad</strong>
            <input type="number"  value=""/>
            <span>(7 disponibles)</span>
        </Cantidad>

        <ButtonCard>
            <Button className="solid">Comprar ahora</Button>
            <Button>Agregar al carrito</Button>
        </ButtonCard>
        <Beneficios>
            <li>
                <ShildeIcon />
                <p>Compra Protegida,<span>recibe el producto que esperabas o te devolvemos tu dinero.</span></p>
            </li>
            <li>
                <CopaIcon />
                <p>Mercado Puntos,<span>Sumas 55 puntos.</span></p>
            </li>
        </Beneficios>

    </Container>
  )
}


