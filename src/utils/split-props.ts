type Omit<T extends Dictionary<any>, K extends keyof T> = Pick<
  T,
  Exclude<keyof T, K>
>

interface Dictionary<T> {
  [key: string]: T
}

export interface SplitProps<P, K extends keyof P> {
  matchedProps: Pick<P, K>
  remainingProps: Omit<P, K>
}

/**
 * Utility to split props based on an array of keys
 */
export default function splitProps<
  P extends Dictionary<any>,
  K extends keyof P
>(props: P, keys: K[]): SplitProps<P, K> {
  const matchedProps = {} as Pick<P, K>
  const remainingProps = {} as P
  const propKeys = Object.keys(props) as K[]

  for (let i = 0; i < propKeys.length; i++) {
    const propKey = propKeys[i]
    const propValue = props[propKey]

    if (keys.includes(propKey)) {
      matchedProps[propKey] = propValue
    } else {
      remainingProps[propKey] = propValue
    }
  }

  return { matchedProps, remainingProps }
}
