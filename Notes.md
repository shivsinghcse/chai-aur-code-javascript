
## Stack and Heap
- Primitive Datatypes are stored in stack memory
    - Stack memory gives a copy of value
- Non-Primitive Datatypes are stored in Heap Memory
    - Heap Memory gives references of orignal value
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## Strings




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