import { Card, Image } from "react-bootstrap"

import './ImageTile.scss'

export function ImageTile(props) {
	const imageData = props.image
	const onClick = props.onClick

	const src = imageData.thumbnailUrl

	return <div className="ImageCardContainer">
		<Card className="ImageCard" onClick={() => onClick(imageData)}>
			<Card.Img as={Image} variant="top" src={src} fluid={true} rounded={true}/>
		</Card>
	</div>
}