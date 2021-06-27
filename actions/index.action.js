/**
 * API is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices.
 */

class API {
  constructor(model){
    this.model = model
  }
  async list(query, population){
    try {
      const data = await this.model
        .find(query || {})
        .populate(population)
      return data
    } catch (err) {
      throw err
    }
  }
}

module.exports = API