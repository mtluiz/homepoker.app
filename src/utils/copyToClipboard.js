const copyToClipboard = (text) => {
  return navigator.clipboard.writeText("localhost:3000/sala/" + text)
}

export default copyToClipboard;