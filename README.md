# React Router Tutorial (Paul Sherman)

> App built following [this](https://blog.pshrmn.com/entry/simple-react-router-v4-tutorial/) article.

> README are rough notes made while following the article.

> React Router is a third party library, React has no router

# Installation

- `npm install —save react-router-dom`

# The router

- two types, can either use `Browser` or `Hash` apparently hash is good for static sites on a server.

## History

[A Little bit of History](https://blog.pshrmn.com/entry/a-little-bit-of-history/)

- router creates a history object. Used to keep track of current location and re-render app then that changes
- other components provided by React Router rely on having access to that history object via reacts context (Context provides a way to pass data through the component tree without having to pass props down manually at every level.)
- this means react router components must be children of a react router router component

## Rendering a <Router>

- only expects one child so we wrap the `<App>` component in a `<Router>` component

# The <App>

- have split into Main and Header

# Routes

- When you only want to render content based on location's (the current location in the locations array in the history object) pathname (not the entire URL)

## Path

- <Route> expects a path prop

## Matching paths

- React Router uses the `path-to-regex` package to determine if a location matches a path prop - means path strings have some advanced features
- when a route's path matches a match object is generated:

![Screenshot_2019-03-14_at_12-ad0cb8fb-a88f-475c-a043-fd2bd6e4e599 41 56](https://user-images.githubusercontent.com/20629455/55970282-2c8fdc80-5c77-11e9-9329-6a9503341383.png)


- this is passed on as `props` to component rendered by the Router component

![Screenshot_2019-03-14_at_13-801f33e1-de98-49b6-8f5f-be414f2acf16 03 45](https://user-images.githubusercontent.com/20629455/55970283-2c8fdc80-5c77-11e9-95c2-2312c05cf76a.png)

## Nested routes

- helpful from grouping routes with common prefixes. Parent components become pure routing components.

    ```export function Roster() {
      return (
        <Switch>
          <Route exact path="/roster" component={FullRoster} />
          <Route exact path="/roster/:number" component={Player} />
        </Switch>
      );
    }```

- can access params from within the props object passes to routed components

    ```export function Player(props) {
      return <p>Player {props.match.params.number}</p>;
    }```

- can also nest routes inside routes. Nested components here are passed as props.children to their parent components.

# Links

- anchor elements would cause a full page refresh, not what we want when using a SPA
- react router provides a `Link` component to prevent that from happening
- when clicking `Link` URL will be updated and rendered content will change without a page reload
- `Link` takes a `to` prop to describe where it should link to. A string or object can be provided:

    `<Link to={{ pathname: '/roster/7' }}>Player #7</Link>`
