
## Stack and Heap
- Primitive Datatypes are stored in stack memory
    - Stack memory gives a copy of value
- Non-Primitive Datatypes are stored in Heap Memory
    - Heap Memory gives references of orignal value
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
## Strings




++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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