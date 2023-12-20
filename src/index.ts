export class RegexExtra {
  private reg: RegExp
  constructor(reg: RegExp) {
    this.reg = reg
  }

  findAt(str: string, start = 0, end = str.length) {
    const piece = str.slice(start, end)
    const result = this.reg.exec(piece)
    if (result) {
      const [value] = result
      return {
        value,
        end: value.length - 1,
      }
    }
    return null
  }

  isMatch(str: string, start = 0, end = str.length) {
    return this.findAt(str, start, end) !== null
  }

  captures(str: string, start = 0, end = str.length) {
    const piece = str.slice(start, end)
    const result = this.reg.exec(piece)
    if (result) {
      const [, ...captures] = result
      return captures
    }
    return null
  }

  capturesAll(str: string, start = 0, end = str.length) {
    const piece = str.slice(start, end)
    let result: RegExpExecArray | null
    const captures: string[][] = []
    // eslint-disable-next-line no-cond-assign
    while ((result = this.reg.exec(piece)) !== null) {
      const [, ...capture] = result
      captures.push(capture)
    }
    return captures
  }
}
