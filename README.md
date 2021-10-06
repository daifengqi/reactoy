# reactoy

<a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/-React-black?style=plastic&logo=React" /></a> toys made for fun (or work :)

# use

```bash
npm i reactoy
```

# components

Text effects with dual-colored shadow.

```typescript
import { Dual } from "reactoy";

function App() {
  return (
    <>
      <Dual
        content={"Hi Reactoy"}
        width={500}
        height={120}
        color={["#25F4EE", "white", "#FE2C55"]}
        fontSize={80}
        fontFamily={"Sans"}
        fontStyle={"normal"}
        fontWeight={"bold"}
        offset={"lg"}
        letterSpacing={2}
        default
      />
    </>
  );
}
```

<img src="https://i.loli.net/2021/10/05/pzhUdBAca5euINf.png" width="700" height="200">

# ps

will include more React things, not only UI components but context/hooks. Let's see.
