import { describe, it, expect } from 'vitest'
import { removeProperty, removeProperties, removeDeepProperties } from './removeProperties'

describe('removeProperty', () => {
  it('should remove the property for the provided key', () => {
    const originalObject = { name: "Felix", food: "Cat food", toy: "Laser Pointer" }
    const expectedObject = { name: "Felix", food: "Cat food" }

    expect(removeProperty(originalObject, 'toy')).toEqual(expectedObject)
  })
})

describe('removeProperties', () => {
  it('should remove properties for all keys provided', () => {
    const originalObject = { name: "Felix", food: "Cat food", toy: "Laser Pointer" }
    const expectedObject = { name: "Felix" }

    expect(removeProperties(originalObject, ['food', 'toy'])).toEqual(expectedObject)
  })
})

describe('removeDeepProperties', () => {
  it('should remove deep properties', () => {
    const originalObject = {
      cat: { name: "Felix", food: "Cat food", toy: "Laser Pointer" },
      dog: {
        name: "Rufus", food: "Dog food", toy: "Ball",
        puppy: { name: "Fluffy", food: "Puppy Chow" }
      },
      duck: { name: "Quack", food: "Snails" }
    }
    const expectedObject = {
      cat: { name: "Felix" },
      dog: { name: "Rufus", puppy: { name: "Fluffy" } },
      duck: { name: "Quack" }
    }

    expect(removeDeepProperties(originalObject, ['food', 'toy'])).toEqual(expectedObject)
  })
})
