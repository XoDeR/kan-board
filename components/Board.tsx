"use client";

import { DragDropContext } from "react-beautiful-dnd";
import React, { useEffect } from "react";
import { useBoardStore } from "@/store/BoardStore";

const Board = () => {
  const getBoard = useBoardStore((state) => state.getBoard);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

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
