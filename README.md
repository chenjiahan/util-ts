# util.ts
Utils for mobile browsers, built with TypeScript

### Cookies
``` typescript
setCookie(key: string, value: string): void;
getCookie(key: string): string;
getAllCookie(): Cookies;
removeCookie(key: string): void;
```

### QueryString
``` typescript
getQueryString(key: string): string;
getAllQueryString(key: string): QueryStrings;
```

### Object
``` typescript
isEmptyObject(obj: Object): boolean;
objectAssign(target: Object, ...args: Object[]): Object;
objectToQuery(obj: Object): string;
```

### Polyfills
``` typescript
raf(callback: Function): number;
cancelRaf(id: number): void;
```

### Others
``` typescript
decode(value: string): string;
detectWebp(callback: (result: boolean) => void);
```
