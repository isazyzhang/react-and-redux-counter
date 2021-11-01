import { useDispatch } from "react-redux";
import './Square.css';

export default function Square(props) {
    const color = props.color;
    const dispatch = useDispatch();
    return (
        <div onClick={() => {
            dispatch(
                {
                    type: 'clickOnSquare',
                    x: props.x,
                    y: props.y
                }
            )
        }}
        id="square" class={color}>
        </div>
    )
}