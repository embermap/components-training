# Principles of good component design

## **Well-designed APIs** start with the user.

  - Good design starts with the user, which in this case is other developers. Consider their actual needs, goals and use cases. Think about what problems they may encounter, how their needs might change.

## Always consider **composability**, and maximize it.

  - Compose in HBS whenever possible.
  - Think about how your component will compose with Ember primitives like {{if}} and {{each}}
  - Think about how your component will compose with popular Addons
  - Impose no unnecessary constraints. They make it harder for devs to work around. (thinking root element, styling assumptions about positioning that make it hard to work with later etc.)
  - Impose no unnecessary complexity. Using things like DDAU or contextual components when not needed is bad.
  - Components that are only focused on data can be really nice. Lets consumer use it in any use case.

## Prefer **declarative interfaces** to imperative.

  - Identify all states in which your component can exist, and declare them
  - Expose that state to the outer world

## Store local state on the **lowest common ancestor**.

## Store more complex state in a **service**.

## Use **data down actions up** to interact with data your component doesn't own or manage.

## But when a component is responsible for its own data, make it a **smart component** to avoid unnecessary decoupling.
