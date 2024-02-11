import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function print2DArray(arr) {
  for(let i = 0; i < arr.length; i++) {
      console.log(arr[i].join(''));
  }
}

function Square({value, onSquareClick}){
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board() {
  const initial_board = Array(15).fill(null).map(() => Array(15).fill("."));
  
  //states
  const [squares, setSquares] = useState(initial_board);

  //handler
  function handleSquareClick(row, col, stone){
    const new_squares = squares.map(r=>[...r]);
    const new_row = new_squares[row].slice();
    new_row[col] = stone;
    new_squares[row] = new_row;
    setSquares(new_squares);
  }

  useEffect(()=>{
    print2DArray(squares);
  });
  //render
  const oneRowRender = (index_row)=>{
    const result = []
    for (let index_col = 0; index_col<squares[index_row].length; index_col++){
      result.push(<Square value={squares[index_row][index_col]} onSquareClick={()=>{handleSquareClick(index_row, index_col, "X");}}/>)
    };
    return result;
  };
  const RowsRender = ()=>{
    const result = []
    for(let index_row = 0; index_row<squares.length; index_row++){
      result.push(<div className='board-row'>{oneRowRender(index_row)}</div>);
    };
    return result
  };

  //return
  return (
    <>
      {RowsRender()}
    </>
  );
}

export default Board;
