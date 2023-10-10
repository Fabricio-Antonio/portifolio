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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_riCOxe3XqU?si=Hup72wg0Ooxa0Pvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <CardBody className=''>
                    <CardTitle tag="h5">
                    Pokédex
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        HTML, CSS, JavaScript, API
                    </CardSubtitle>
                    <CardText className='CardText'>
                    
                    </CardText>
                        <Button href='https://pokedex-6kwr2bzxo-fabricio-antonio.vercel.app/' target="_blank" className='button'>
                            Visitar
                        </Button>
                        <Button href='https://github.com/Fabricio-Antonio/Pokedex' target="_blank" className='button'>
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
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rywkB1tC0gw?si=z9JOJNk3C1Ayzz72" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <CardBody className=''>
                    <CardTitle tag="h5">
                        Quiz pokémon
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        HTML, CSS, JavaScript
                    </CardSubtitle>
                    <CardText className='CardText'>
        
                    </CardText>
                        <Button href='https://quiz-pokemon-nine.vercel.app/' target="_blank" className='button'>
                            Visitar
                        </Button>
                        <Button href='https://github.com/Fabricio-Antonio/Quiz-pokemon' target="_blank"className='button'>
                            Ver código
                        </Button >
                </CardBody>
            </Card>
        </StyledCardProject>
    </>

);

export default StyledCardProject;