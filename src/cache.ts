import { BoxPropValue } from "./types/enhancers";

type CacheValue = BoxPropValue;
let cache = new Map<string, string>();

function getCacheKey(
  property: string,
  value: CacheValue,
  type?: string
): string {
  // We need to differentiate between strings and numbers because
  // the property may add units (like px) only for number types
  const valueType = type || typeof value;
  return property + (valueType === "string" ? `"${value}"` : value);
}

export function get(property: string, value: CacheValue) {
  return cache.get(getCacheKey(property, value));
}

export function set(
  property: string,
  value: CacheValue | object,
  className: string
) {
  const valueType = typeof value;

  if (process.env.NODE_ENV !== "production") {
    if (
      valueType !== "boolean" &&
      valueType !== "number" &&
      valueType !== "string"
    ) {
      const encodedValue = JSON.stringify(value);
      throw new TypeError(
        `📦 ui-box: invalid cache value “${encodedValue}”. Only booleans, numbers and strings are supported.`
      );
    }
  }

  cache.set(getCacheKey(property, value as CacheValue, valueType), className);
}

export function entries() {
  return [...cache];
}

type CacheEntry = [/** key */ string, /** value */ string];
export function hydrate(newEntries: CacheEntry[]) {
  cache = new Map<string, string>([...cache, ...newEntries]);
}

export function clear() {
  cache.clear();
}
