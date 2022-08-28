export class Todo {
  id!: string;
  title!: string;
  description: string | undefined;
  isDone: boolean = false;
}
