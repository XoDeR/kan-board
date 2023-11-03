import { ID, databases, storage } from "@/appwrite";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import uploadImage from "@/lib/uploadImage";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDb: (todo: Todo, columnId: TypeColumn) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
  addTask: (todo: string, columnId: TypeColumn, image?: File | null) => void;
  deleteTask: (taskIndex: number, todoId: Todo, id: TypeColumn) => void;
  newTaskInput: string;
  setNewTaskInput: (input: string) => void;
  newTaskType: TypeColumn;
  setNewTaskType: (columnId: TypeColumn) => void;
  image: File | null;
  setImage: (image: File | null) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypeColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },
  setBoardState: (board) => set({ board }),
  updateTodoInDb: async (todo, columnId) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },
  searchString: "",
  setSearchString: (searchString) => set({ searchString }),
  addTask: async (todo: string, columnId: TypeColumn, image?: File | null) => {
    let file: Image | undefined;
    if (image) {
      const fileUploaded = await uploadImage(image);
      if (fileUploaded) {
        file = {
          bucketId: fileUploaded.bucketId,
          fileId: fileUploaded.$id,
        };
      }
    }

    await databases.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      ID.unique(),
      {
        title: todo,
        status: columnId,
        ...(file && { image: JSON.stringify(file) }),
      }
    );
  },
  deleteTask: async (taskIndex: number, todo: Todo, id: TypeColumn) => {
    const newColumns = new Map(get().board.columns);
    newColumns.get(id)?.todos.splice(taskIndex, 1);
    set({ board: { columns: newColumns } });
    if (todo.image) {
      await storage.deleteFile(todo.image.bucketId, todo.image.fileId);
    }
    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id
    );
  },
  newTaskInput: "",
  setNewTaskInput: (input: string) => set({ newTaskInput: input }),
  newTaskType: "todo",
  setNewTaskType: (columnId: TypeColumn) => set({ newTaskType: columnId }),
  image: null,
  setImage: (image: File | null) => set({ image }),
}));
