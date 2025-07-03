import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import './typo.css'

const Typography = ({ children, dispatch, markdown, i18 }) => {
  const [editing, setEditing] = useState(false)
  const [backup, setBackup] = useState(markdown)
  const textareaRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (editing) {
      textareaRef.current.focus()
    } else {
      buttonRef.current.focus()
    }
  }, [editing])

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_VALUE', payload: { id: 'markdown', value: e.target.value } })
  }

  const handleEdit = () => {
    setEditing(true)
    setBackup(markdown)
  }

  const handleCancel = (e) => {
    if (e.key === 'Escape') {
      setEditing(false)
      dispatch({ type: 'UPDATE_VALUE', payload: { id: 'markdown', value: backup } })
    }
  }

  return (
    <div className="Typo">
      <div className="Typo__selectors">
        <div className="typography">
          <h1>{i18?.typography?.heading} 1</h1>
          <h2>{i18?.typography?.heading} 2</h2>
          <h3>{i18?.typography?.heading} 3</h3>
          <h4>{i18?.typography?.heading} 4</h4>
          <h5>{i18?.typography?.heading} 5</h5>
          <h6>{i18?.typography?.heading} 6</h6>
          <p>{i18?.typography?.paragraph}</p>
          <small>{i18?.typography?.small}</small>
        </div>
      </div>

      <div className="Typo__editor">
        <div
          className="Typo__edit"
          style={{ display: editing ? 'block' : 'none' }}
        >
          <button onClick={() => setEditing(false)}><span className="sr-only">Save</span></button>
          <label className="Typo__textarea-label" htmlFor="markdown">{i18?.typography?.textareaLabel}</label>
          <textarea id="markdown" name="markdown" ref={textareaRef} value={markdown} onChange={handleChange} onKeyDown={e => handleCancel(e)} />
        </div>

        <button
          className="Typo__markdown Typo__open  typography"
          ref={buttonRef}
          onClick={handleEdit}
          style={{ display: editing ? 'none' : 'flex' }}
          aria-label={i18?.typography?.buttonAriaLabel}
        >
          {children}
        </button>
      </div>
    </div >
  )
}

export default Typography

Typography.propTypes = {
  dispatch: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired,
  i18: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}
