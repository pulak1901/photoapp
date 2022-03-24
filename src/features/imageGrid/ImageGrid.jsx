import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { ImageCard } from '../../components/ImageCard';

export function ImageGrid(props) {
    const items = props.items
    const Cell = ({ columnIndex, rowIndex, style }) => {
        const index = rowIndex*3+columnIndex
        return <div style={style}>
          <ImageCard url={items[index].thumbnailUrl} title={items[index].title} />
        </div>
    }
    
    return <AutoSizer>
        {({width, height}) => (
            <Grid
            columnCount={3}
            rowCount={150}
            columnWidth={width / 3}
            rowHeight={350}
            height={height}
            width={width}
            >
                {Cell}
            </Grid>
        )
        }
    </AutoSizer>
}