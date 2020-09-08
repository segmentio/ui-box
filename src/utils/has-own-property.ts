/**
 * Test existence of a property on an object in a Typescript-friendly way
 */
export default function hasOwnProperty<UnknownObject extends {}, Prop extends PropertyKey>
  (obj: UnknownObject, prop: Prop): obj is UnknownObject & Record<Prop, unknown> {
  return Object.prototype.hasOwnProperty.call(obj, prop)
}
