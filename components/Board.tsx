"use client";

import { DragDropContext } from "react-beautiful-dnd";
import React from "react";

const Board = () => {
  return (
    <div>Board</div>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/* rendering all the columns */}</div>}
    //   </Droppable>
    // </DragDropContext>
  );
};

export default Board;
