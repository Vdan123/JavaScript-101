/**
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar' 
 */
import words from './words.js'

const camelCase = (string) => {
  debugger
  // 只识别有效字符串，非字母则不识别且将其空格替换
  // 如果是有效字符串，则将第一个字母转换为小写，其余字母转换为大写

  words(String(string).replace(/['\u2019]/g, '')).reduce((result, word, index) => {
    word = word.toLowerCase()
    return result + (index ? (word) : word)
  })
}

camelCase('a a CC')

