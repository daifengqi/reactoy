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
        content={"Welcome To"}
        width={500}
        height={120}
        color={["#25F4EE", "white", "#FE2C55"]}
        fontSize={80}
        fontFamily={"Sans"}
        fontStyle={"normal"}
        fontWeight={"bold"}
        offset={"lg"}
        top
        letterSpacing={2}
      />
    </>
  );
}
```
![dual.png](https://i.loli.net/2021/10/05/pzhUdBAca5euINf.png)

# ps
will include more React things, not only UI components but context/hooks. Let's see.
