export interface CodeWarsDataModel {
  userId: number;
  title: string;
  completed: boolean;
}

export interface CodeWarsModel {
  id: string;
  taskData: CodeWarsDataModel;
}
