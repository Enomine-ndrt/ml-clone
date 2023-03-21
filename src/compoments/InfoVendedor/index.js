
import React from 'react';
import {Container,
        Title,
        Card,
        LocationIcon,
        PlatimunIcon,
        Reputacion,
        Caja,
        Row,
        SupporIcon,
        ClockIcon,
        Link
} from './styled';

export const InfoVendedor = () => {
  return (
    <Container>
       <Title>Informacion sobre el vendedor</Title>
       <Card>
          <LocationIcon />
          <div>
            <p>Ubicacion</p>
            <strong>Teusequillo Bogota D.C</strong>
          </div>
       </Card>
       <Card>
          <PlatimunIcon />
          <div>
            <p className='platimun'>MercadoLider Platimun</p>
            <strong >¡Es uno de los mejores del sitio!</strong>
          </div>
       </Card>
      <Reputacion>
          <Caja>
            <li/>
            <li/>
            <li/>
            <li/>
            <li className='active'/>
          </Caja>
      </Reputacion>
      <Row>
          <div>
            <strong>9452</strong>
            <span>Ventas en los ultimos 60 dias</span>
          </div>
          <div>
            <strong>
              <SupporIcon />
            </strong>
            <span>Brinda buena atención</span>
          </div>
          <div>
             <strong>
                <ClockIcon />
              </strong>
            <span>Entrega sus productos a tiempo</span>
          </div>
      </Row>
      <Link href="#" >
        Ver mas datos de este vendedor
      </Link>
    </Container>
  )
}


