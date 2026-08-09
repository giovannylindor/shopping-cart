# Notes on TypeScript

* JS doesn't check data "shape" at runtime 
    - TS catches data before running

* Interface: A contract that defines the shape of an object
    - Used for Objects representing entities
* Type: Label, describes the shape, properties and methods a value can have
    - Used for unions or comparisons
* Union: Allows a var to have one of several types

* `children`: this is a special prop React automatically passes.
    - It represent anything nested between a components opening/closing tags
* `React.ReactNode`: A special type that covers all types of data that could be considered a child

* `?`: Optional Chain, if the first val = `undefined`, just return undefined instead of returning an error
* `??`: Null Coalescing: If the left side = null/undefined, use the right side instead

* `(id: number) => void`: function that takes a number + returns nothing 