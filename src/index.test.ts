import { RegexExtra } from '.'

describe('test', () => {
  const RE = /\d+/
  const reg = new RegexExtra(RE)
  test('findAt', () => {
    const str = '123 testing'
    expect(reg.findAt(str)).toMatchInlineSnapshot(`
      {
        "end": 2,
        "value": "123",
      }
    `)
    expect(reg.findAt(str, 5)).toMatchInlineSnapshot('null')
  })
  test('isMatch', () => {
    const str = '123 testing'
    expect(reg.isMatch(str)).toMatchInlineSnapshot('true')
    expect(reg.isMatch(str, 5)).toMatchInlineSnapshot('false')
  })
  test('captures', () => {
    const RE = /(\d+)/
    const reg = new RegexExtra(RE)
    const str = '123 testing'
    expect(reg.captures(str)).toMatchInlineSnapshot(`
      [
        "123",
      ]
    `)
    expect(reg.captures(str, 5)).toMatchInlineSnapshot('null')
  })
  test('multi captures', () => {
    const RE = /(\d+)(\w+)/
    const reg = new RegexExtra(RE)
    const str = '123testing'
    expect(reg.captures(str)).toMatchInlineSnapshot(`
      [
        "123",
        "testing",
      ]
    `)
    expect(reg.captures(str, 5)).toMatchInlineSnapshot('null')
  })
})
