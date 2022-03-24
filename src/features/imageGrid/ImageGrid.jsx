import { FixedSizeList as Grid } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";

export function ImageGrid(props) {
    const items = props.items
    const Cell = ({ index, style }) => (
        <div style={style}>
          <img src={items[index].thumbnailUrl} width={150} height={150}/>
        </div>
    )
    
    return <Grid
    itemCount={100}
    itemSize={150}
    height={600}
    width={200}
    >
        {Cell}
    </Grid>
}