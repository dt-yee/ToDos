export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            console.log('No Todos Found...Creating...');
            var todos = [
                {
                    text : 'Dinner at Golden Brother'
                },
                {
                    text : 'Take interview'
                },
                {
                    text : 'Take an OA'
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
            return 
        }
        else{
            console.log('Found Todos...')
        }
    }
}