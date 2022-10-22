const copyToClipboard = (text) => {
  return navigator.clipboard.writeText("https://homepokerapp.herokuapp.com/sala/" + text)
}

export default copyToClipboard;