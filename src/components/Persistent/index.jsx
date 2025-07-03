import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Save } from '../Icons';
import { save, load } from '@/utils/storage'

import './persistent.css'

const Persistent = ({ state, children, dispatch, i18 }) => {
  const [init, setInit] = useState(false)
  const [saving, setSaving] = useState(false)
  const hasSavedState = !!localStorage.getItem('rhythmic')

  useEffect(() => {
    if (hasSavedState && !init) {
      const data = load('rhythmic')

      dispatch({ type: 'INIT', data })
    }

    setTimeout(() => {
      setInit(true)
    }, 250);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (init) {
      save('rhythmic', state, setSaving)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(state)])

  if (!init) {
    return <div className="persistent__loader"><div></div></div>
  }

  return <>
    {children}
    {saving && (
      <div className="persistent">
        <Save className="persistent__icon" />
        <span className="sr-only">{i18?.persistent?.saving}</span>
      </div>
    )}
  </>
}

export default Persistent

Persistent.propTypes = {
  state: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  dispatch: PropTypes.func.isRequired,
  i18: PropTypes.object.isRequired
}
