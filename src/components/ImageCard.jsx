import { Card, Image } from "react-bootstrap";

export function ImageCard(props) {
    return <Card style={{width:"200px", height:"240px", objectFit:"cover"}}>
        <Card.Img as={Image} variant="top" src={props.url} fluid={true} rounded={true}/>
        <Card.Body style={{overflow:"hidden", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>
            <Card.Text>
                {props.title}
            </Card.Text>
        </Card.Body>
    </Card>
}