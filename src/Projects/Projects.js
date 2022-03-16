import React from 'react';
import './Projects.css';
import {Card} from 'react-bootstrap'; 

const Projects = () =>{

    return(<div className = 'Projects'>
        <h1 style={{textAlign:'center'}}>Projects</h1>
        <div className='Cards'>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="./Project.png" />
        <Card.Body>
            <Card.Title>Project 1</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="#">GitHub Link</Card.Link>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="./Project.png" />
        <Card.Body>
            <Card.Title>Project 2</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="#">GitHub Link</Card.Link>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./Project.png" />
        <Card.Body>
            <Card.Title>Project 3</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="#">GitHub Link</Card.Link>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="./Project.png" />
        <Card.Body>
            <Card.Title>Project 4</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="#">GitHub Link</Card.Link>
        </Card.Body>
        </Card>
        </div>

        <div className='Cards'>
        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="./Project.png" />
        <Card.Body>
            <Card.Title>Project 5</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="#">GitHub Link</Card.Link>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="./Project.png" />
        <Card.Body>
            <Card.Title>Project 6</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="#">GitHub Link</Card.Link>
        </Card.Body>
        </Card>

        <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src="./Project.png" />
        <Card.Body>
            <Card.Title>Project 7</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
        <Card.Body>
            <Card.Link href="#">GitHub Link</Card.Link>
        </Card.Body>
        </Card>
        </div>
      
    </div>);
}

export default Projects;