import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
    const object = {
        content: content,
        votes: 0
    }
    console.log(object)
    const response = await axios.post(baseUrl, object)
    console.log(response)
    return response.data
}

const updateLikes = async (anec) => {
  const obj = {
    content: anec.content,
    votes: anec.votes +1
  }

  const url = baseUrl + '/' +anec.id
  console.log(url)
  const resp = await axios.put(url, obj)
  return resp.data
}

export default { getAll, createNew, updateLikes }