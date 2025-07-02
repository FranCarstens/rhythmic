/**
 * @vitest-environment jsdom
 */
import { vi, describe, it, expect, afterAll } from 'vitest'
import setLanguage from './setLanguage'
import setConfig from './setConfig'

vi.mock('./setConfig', () => ({
  default: vi.fn(),
}))

const dispatch = vi.fn()

afterAll(() => {
  vi.restoreAllMocks()
})

describe('setLanguage', () => {
  it('should call setConfig and dispatch with the selected language values if language is passed ', () => {
    
    const lang = 'en'
    setLanguage(dispatch, lang)

    expect(setConfig).toHaveBeenCalledWith(dispatch, lang)
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_LANG', payload: lang })
  })

  it('call setConfig and dispatch with the available language values if no language is passed and the system language is supported', () => {
    vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('af')

    setLanguage(dispatch)
    expect(setConfig).toHaveBeenCalledWith(dispatch, 'af')
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_LANG', payload: 'af' })
  })

  it('call setConfig and dispatch with the default language values if no language is passed and the system language is not supported', () => {
    vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('es')

    setLanguage(dispatch)
    expect(setConfig).toHaveBeenCalledWith(dispatch, 'en')
    expect(dispatch).toHaveBeenCalledWith({ type: 'SET_LANG', payload: 'en' })
  })
})
