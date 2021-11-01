import React from "react";
import './Square.css';
import './Board.css';
import { useSelector } from "react-redux";
import Square from "./Square";

export default function Board() {

    const boardState = useSelector((state) => state.curState[0]);
    const blackNum = useSelector((state) => state.curState[1]);
    const boardComponent = [];
    for (let i = 0; i <  boardState.length; i++) {
        let row = boardState[i];
        for (let j = 0; j < row.length; j++) {
            boardComponent.push(<Square color={boardState[i][j]} x={i} y={j} />);
        }
    }
    return (
        <div id="with-counter">
            <div>
                <h1>Count: {blackNum}</h1>
            </div>
            <div id="board">
                {boardComponent}
            </div>
        </div>
    );
}