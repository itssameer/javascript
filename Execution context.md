
# Execution Context(Creation Phase)

Its a stack of function calls which are executed LIFO fashion. 
This the first step in running the code i.e creation phase this is where all the variables and function are hoised and declared.



## Examples

```javascript

function printName() {
  return 'Sameer';
}

function findName(){
    return printName();
}

function sayMyName(){
    return findName()
}

sayMyName()
```

## Execution stack looks something like this
```
printName() 
findName()
sayMyName()
Global()
```
### Global Execution context
it provided Global Object and 'this' to all the function Execution.

