interface Board {
  columns: Map<TypeColumn, Column>;
}

type TypeColumn = "todo" | "in_progress" | "done";

interface Column {
  id: TypeColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypeColumn;
  image?: Image;
}

interface Image {
  bucketId: string;
  fileId: string;
}
