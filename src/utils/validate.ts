// TODO we should add a check if nickname and username exist
export const isValidUsername = (str: string) => ['admin', 'editor'].indexOf(str.trim()) >= 0

// TODO we should add a check if email exist
export const isValidEmail = (str: string) => {
  const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
  return reg.test(str)
}

export const isValid8Size = (str: string) => {
  const reg = /.{8,}/
  return reg.test(str)
}

export const isValid4Size = (str: string) => {
  const reg = /.{4,}/
  return reg.test(str)
}

export const hasLowerCase = (str: string) => {
  const reg = /[a-z]+/
  return reg.test(str)
}

export const hasUpperCase = (str: string) => {
  const reg = /[A-Z]+/
  return reg.test(str)
}

export const hasOneNumber = (str: string) => {
  const reg = /[0-9]+/
  return reg.test(str)
}

// TODO we should add a check if nickname and nickname exist
export const isValidNickname = (str: string) => {
  const reg = /.{4,}/
  return reg.test(str)
}

export const isExternal = (path: string) => /^(https?:|mailto:|tel:)/.test(path)

export const isArray = (arg: any) => {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export const isValidURL = (url: string) => {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}
