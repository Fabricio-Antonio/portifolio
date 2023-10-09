import { StyledCardProject } from './style';
import { CardBody } from 'reactstrap';
import { Card } from 'reactstrap';
import { CardSubtitle } from 'reactstrap';
import { CardTitle } from 'reactstrap';
import { CardText } from 'reactstrap';
import { Button } from 'reactstrap';



export const CardProject = () => (

    <>
        <StyledCardProject>  
            <Card className='Card'
                style={{
                    width: '18rem'
                }}
            >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZaYvwn9nBD4?si=8xmBwaNs9khB-Y5L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <CardBody className=''>
                    <CardTitle tag="h5">
                        Título
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Tecnologias utilizadasnpm
                    </CardSubtitle>
                    <CardText className='CardText'>
                        test
                    </CardText>
                        <Button className='button'>
                            Visitar
                        </Button>
                        <Button className='button'>
                            Ver código
                        </Button >
                </CardBody>
            </Card>

            <Card className='Card'
                style={{
                    width: '18rem',
                    marginright: '1rem'
                }}
            >
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ZaYvwn9nBD4?si=8xmBwaNs9khB-Y5L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <CardBody className=''>
                    <CardTitle tag="h5">
                        Título
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Tecnologias utilizadas
                    </CardSubtitle>
                    <CardText className='CardText'>
                        test
                    </CardText>
                        <Button className='button'>
                            Visitar
                        </Button>
                        <Button className='button'>
                            Ver código
                        </Button >
                </CardBody>
            </Card>
        </StyledCardProject>
    </>

);

export default StyledCardProject;