
## Stack and Heap
- Primitive Datatypes are stored in stack memory
    - Stack memory gives a copy of value
- Non-Primitive Datatypes are stored in Heap Memory
    - Heap Memory gives references of orignal value
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## Strings



## Math
```js
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
```
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## DOM 
- DOM stands for Document object model.
- `console.dir(document)` learn about it.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Larning</title>
</head>
<body>
    <div class="bg-black">
        <h1 class="heading">DOM learning on chai aur code</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium excepturi quae alias maxime, nobis ea voluptatum numquam ipsa ut reprehenderit error sit perferendis iusto pariatur omnis impedit incidunt vel dolorum.</p>
    </div>
</body>
</html>
```
- window
    - document
        - HTML
            - HEAD
                - meta
                    - attribute
                - title
                    - text node
        - BODY
                - div ---> attribute
                    - h1 ---> attribute
                        - textnode
                    - p
                        - textnode
- .innerHTML 
## Async Javascript Fundamentals
- Javascript
        - Synchronous
        - Single threaded   **Default JS behaviour**

- Execution Context
    - execute one line of code at a time
    - console.log() - 1      
    - console.log() - 2
    - each operation waits for the last one to complete before executing
    - CALL STACK ------ MEMORY HEAP     

- Blocking Code vs Non Blocking code
    - Blocking Code
        - Block the flow of program
        - Read File Sync
    - Non Blocking code
        - Do not block execution
        - Read File Async    





## Execution Context:
- Javascript Execution Context
- First of all It always creats Global EC, and it refers to `this` or (First of all It always creats Global EC and attached to global object or `this`)
- Code Execution happens in two phases   
    - Memory creation phase
    - Execution phase
- Function / Function Execution context
- Eval Execution Context       
- call stack follow Lifo 