/**
 * @vitest-environment jsdom
 */
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest'
import { save, load, remove } from './storage'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('storage', () => {
  const setSaving = vi.fn()
  const value = { value: 'value' }

  describe('save', () => {
    it('should set the value in localStorage', () => {
      save('test', value, setSaving)
      expect(JSON.parse(localStorage.getItem('test'))).toEqual(value)
    })

    it('should call setSaving twice', () => {
      save('test', value, setSaving)
      expect(setSaving).toHaveBeenCalledWith(true)
      vi.advanceTimersByTime(500)
      expect(setSaving).toHaveBeenCalledWith(false)
    })
  })

  describe('load', () => {
    it('should get the value from localStorage', () => {
      save('test', value, setSaving)
      expect(load('test')).toEqual(value)
    })
  })

  describe('remove', () => {
    it('should delete the value from localStorage', () => {
      save('test', value, setSaving)
      remove('test')
      expect(localStorage.getItem('test')).toBe(null)
    })
  })
})