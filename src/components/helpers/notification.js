import "./index.css"

let container = null

const createContainer = () => {
  if (container) return

  container = document.createElement("div")
  container.classList.add("react-notification-container")
  document.body.append(container)
}

const createNotification = (title, description = "", type) => {
  createContainer()

  let timeoutRefs = []

  const noti = document.createElement("div")

  noti.addEventListener("click", function removeElement() {
    this.remove()
    timeoutRefs.forEach(clearTimeout)
    timeoutRefs = []
  })

  noti.classList.add("react-notification")
  noti.classList.add(`react-notification--${type}`)

  let notificationHTML = `<p class="react-notification__title">${title}</p>`

  if (notificationHTML) {
    notificationHTML += `<p class="react-notification__content">${description}</p>`
  }

  noti.insertAdjacentHTML("afterbegin", notificationHTML)

  container.append(noti)

  timeoutRefs[0] = setTimeout(() => {
    timeoutRefs[1] = setTimeout(() => {
      container.removeChild(noti)
    }, 500)
  }, 6000)
}

export default {
  success: (title, description = "") => {
    createNotification(title, description, "success")
  },
  error: (title, description = "") => {
    createNotification(title, description, "error")
  },
}
