import { constants } from '../constants/constants'

const getURL = (srcName) => {
    return `${constants.url}/${constants.organization}/${constants.repoName}/${constants.branch}/${srcName}`
}
  
const getSource = async (srcName) => {
    const response = await fetch(getURL(srcName))
    return await response.json()
}

export {
    getSource,
    getURL
}