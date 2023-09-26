const config = {
  options: new Map<string, string | null>([['token', null]])
}

export const setToken = (
  data: {token: string}
) => {
  config.options.set('token', data.token)
}

export const unsetToken = () => {
  config.options.set('token', null)
}

export const getToken = () => {
  return config.options.get('token')
}
