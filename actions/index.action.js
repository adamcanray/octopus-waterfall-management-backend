/**
 * API is a set of functions that allows applications to access data and interact with external software components, operating systems, or microservices.
 */

const { findOneAndUpdate } = require("../models/agent.model")

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
    } catch (error) {
      throw error
    }
  }

  async show(query, population){
    try {
      const data = await this.model
        .findOne(query || {})
        .populate(population)
      return data
    } catch (error) {
      throw error
    }
  }

  async create(request_data){
    try {
      const data = new this.model(request_data)
      await data.save()
      return { data }
    } catch (error) {
      throw error
    }
  }

  async update(query, request_data, options){
    try {
      const data = await this.model
        .findOneAndUpdate(
          query,
          request_data,
          options,
        )
      return data
    } catch (error) {
      throw error
    }
  }

  async delete(query){
    try {
      const data = await this.model.findOneAndDelete(query)
      return data
    } catch (error) {
      throw error
    }
  }
}

module.exports = API