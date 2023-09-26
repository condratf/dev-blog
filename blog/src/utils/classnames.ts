export function classNames(...args: (string | {[key: string]: boolean})[]): string {
  const classes: string[] = []
  args.forEach(arg => {
    if (typeof arg === 'string') {
      classes.push(arg)
    } else {
      for (const key in arg) {
        if (arg.hasOwnProperty(key) && arg[key]) {
          classes.push(key)
        }
      }
    }
  })
  return classes.join(' ')
}
