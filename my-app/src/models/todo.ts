class Todo{
    id:string;
    text:string;
    constructor(textCode:string){
        this.id = new Date().toISOString();
        this.text = textCode;
    }
}

export default Todo;