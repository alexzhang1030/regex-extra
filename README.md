# regex-extra

Including missing essential functions for Regex. (ESM Only)

## Usage

construct core class with regex, and all the following functions are bind to the instance.

```ts
const RE = /\d+/
const reg = new RegexExtra(RE)
```

## Functions

### 1. findAt

```ts
interface FindAtResult {
  value: string
  end: number
}
function findAt(str: string, start?: number, end?: number): FindAtResult | null
```

Pass start and end index to find the string.

### 2. isMatch

```ts
function isMatch(str: string, start?: number, end?: number): boolean
```

Pass string to check if the regex is matched.

### 3. captures

```ts
function captures(str: string, start?: number, end?: number): string[] | null
```

Get all the captures.
