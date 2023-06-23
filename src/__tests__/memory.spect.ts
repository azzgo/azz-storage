import { expect, describe, it } from 'vitest';
import {Memory} from '../internal';

describe("Memory impl globalThis.Storage", () => {
  it("should able set & get", () => {
    const store = new Memory()
    store.setItem('foo', 'foz')
    expect(store.getItem('foo')).toEqual('foz')
  })

  it("able remove item", () => {
    const store = new Memory()
    store.setItem('foo', 'foz')
    expect(store.getItem('foo')).not.toBeNull()
    store.removeItem('foo')
    expect(store.getItem('foo')).toBeNull()
  })

  it('able to clear all item', () => {
    const store = new Memory()
    store.setItem('foo', 'foz')
    store.setItem('zoo', 'zoz')
    expect(store.length).toEqual(2)
    store.clear()
    expect(store.length).toEqual(0)
  })
})
