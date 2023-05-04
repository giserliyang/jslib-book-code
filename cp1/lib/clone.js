function type (data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

console.log(Object.prototype.toString.call([])) // 输出"[object Array]"
console.log(Object.prototype.toString.call({})) // 输出"[object Object]"

console.log(type({})) // 输出object
console.log(type([])) // 输出array

function clone (source) {
  const t = type(source)
  if (t !== 'object' && t !== 'array') {
    return source
  }

  let target

  if (t === 'object') {
    target = {}
    for (let i in source) {
      if (source.hasOwnProperty(i)) {
        target[i] = clone(source[i]) // 注意这里
      }
    }
  } else {
    target = []
    for (let i = 0; i < source.length; i++) {
      target[i] = clone(source[i]) // 注意这里
    }
  }

  return target
}