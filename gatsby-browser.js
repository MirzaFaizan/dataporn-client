import React from "react"
import Apollo from "./src/apollo/provider"

export const wrapRootElement = ({ element }) => <Apollo>{element}</Apollo>
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
