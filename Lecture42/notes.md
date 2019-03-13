# Lecture 42, Part 1: Javascript Types
## Built-in types
- 7 built-in types
  - 6 primitve
  - 1 object type

### Object Type
Object is a collection of name/value pairs.

- example: Person Object

```
Name      Value

firstName: "Roy"
lastName: "Wang"
social: {
    instagram: "royfalinwang",
    facebook: "roywannago"
}
```

### Primitive Type

represents a single, immutable value
- Single value, not an object
- Immutable: once it's set, it can't be changed
  - Value becomes read-only
  - Can create another value based on an existing one
    - but the memory of first value won't change
    - create a new memory 

1. Boolean
   - `true` or `false`
2. Undefined: not be defined (set value)
   - should never set a variable to undefined
3. Null: lack of value
4. Number
   - Only numeric type in Javascript
   - Always represented under the hood as double-precision 64-bit floating point
   - JS doesn't have an integer type
     - Integers are a subset of doubles instead of a seperate data type
5. String
   - a sequence of characters
6. Symbol
   - new to ES6 (release 2015)


# Lecture 42, Part 2: Javascript Types
undefined -> it has been declared or defined but it has not been set to any value
So in this case the variable has been declared and a memory space has been allocated for it, but no value has been placed in that memory space.
