import { RegexExtra } from '.'

describe('test', () => {
  const RE = /\d+/
  const reg = new RegexExtra(RE)
  it('findAt', () => {
    const str = '123 testing'
    expect(reg.findAt(str)).toMatchInlineSnapshot(`
      {
        "end": 2,
        "value": "123",
      }
    `)
    expect(reg.findAt(str, 5)).toMatchInlineSnapshot('null')
  })
  it('isMatch', () => {
    const str = '123 testing'
    expect(reg.isMatch(str)).toMatchInlineSnapshot('true')
    expect(reg.isMatch(str, 5)).toMatchInlineSnapshot('false')
  })
  it('captures', () => {
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
  it('multi captures', () => {
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
  it('captures all', () => {
    const RE = /(\d+)(\w+)/gm
    const reg = new RegexExtra(RE)
    const str = '123abc\n123abc'
    expect(reg.capturesAll(str)).toMatchInlineSnapshot(`
      [
        [
          "123",
          "abc",
        ],
        [
          "123",
          "abc",
        ],
      ]
    `)
  })
})
