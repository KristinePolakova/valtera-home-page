import getExibitions from "./getExibitions"


function getExibitionByIndex(index) {
  const exibitions  = getExibitions()
  return exibitions[index]
}

export default getExibitionByIndex
