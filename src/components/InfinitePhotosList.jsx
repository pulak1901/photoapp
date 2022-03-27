import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ImageTile } from './ImageTile'
import useInfiniteScroll from '../utility/useInfiniteScroll'
import { Spinner } from 'react-bootstrap'
import { downloadImageData } from '../services/imageDataService'

export function InfinitePhotosList(props) {
	const dispatch = useDispatch()

	const { imageData, isFetching, hasMore } = useSelector(state => state.imageData)

	const loadMoreItems = useCallback(() => {
		downloadImageData(dispatch)
	}, [dispatch])

	const createImgFromData = (item, index) => {
		return <ImageTile
			image={item}
			onClick={() => {props.onImageSelected(item)}}
		/>
	}

	const [lastElementRef] = useInfiniteScroll(
		hasMore ? loadMoreItems : () => {},
		isFetching
	); 

	//on initial mount
	useEffect(() => {
		loadMoreItems();
	}, [loadMoreItems]);

	return (
		<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
		<div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
			{imageData.map((item, index) => {
				if (imageData.length === index + 1) {
					return (
						//referencing the last item to be watched by the observer
						<div ref={lastElementRef} key={index}>
							{createImgFromData(item, index)}
						</div>
					);
				} else {
					return <div key={index}> {createImgFromData(item, index)} </div>;
				}
			})}
		</div>
			{isFetching && <Spinner animation="border" role="status" style={{margin:"32px"}}>
				<span className="visually-hidden">Loading...</span>
				</Spinner>}
		</div>
	);
}
