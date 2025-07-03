import { describe, it, expect } from "vitest"
import clstr from "./clstr"

describe("clstr", () => {
  it("should return a string of classes from an array", () => {
    expect(clstr(["class1", "class2", "class3"])).toBe("class1 class2 class3")
  })

  it("should return a string of classes from a string", () => {
    expect(clstr("class1 class2 class3")).toBe("class1 class2 class3")
  })

  it("should return a string of classes from an object", () => {
    expect(clstr({ class1: true, class2: false, class3: true })).toBe("class1 class3")
  })

  it("should return an empty string for falsy values", () => {
    expect(clstr(null)).toBe("")
    expect(clstr(undefined)).toBe("")
    expect(clstr("")).toBe("")
    expect(clstr([])).toBe("")
  })

  it("should return an empty string for an empty object", () => {
    expect(clstr({})).toBe("")
  })

  it("should return a string of classes from an array with falsy values", () => {
    expect(clstr(["class1", "", "class3", null])).toBe("class1 class3")
  })

  it("should return a combination of strings, arrays, and objects as a class", () => {
    const stringClasses = 'class1 class2'
    const arrayClasses = ['class3', 'class4', null]
    const objectClasses = { class5: true, class6: false, class7: undefined }

    expect(clstr(stringClasses, arrayClasses, objectClasses)).toBe("class1 class2 class3 class4 class5")
  })
})
