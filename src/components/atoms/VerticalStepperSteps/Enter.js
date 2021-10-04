import React, { useEffect } from 'react'
import { useCurrent } from '../../../core/contexts/Current'
import { useGlobal } from '../../../core/contexts/Global'

function Enter({ shouldSave }) {
  const { setCurrent } = useCurrent()
  const { user } = useGlobal()

  useEffect(() => {
    if (shouldSave) {
      setCurrent(prev => ({
        ...prev,
        id: user.enterExits.length + 1,
        start: Date.now()
      }))
    }
  }, [shouldSave])


  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  )
}

export default Enter