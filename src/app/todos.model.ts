export class todos {
    public id: number | undefined;
    public todo: string | undefined;
    public completed: boolean | undefined;

    constructor(id:number, todo: string, completed: boolean) {
        this.id = id;
        this.todo = todo;
        this.completed = completed;
    }

}