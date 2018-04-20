/*
 * Copyright 2018-2025 JDCLOUD.COM
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http:#www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * 缓存Redis配额接口
 * 缓存Redis配额相关接口
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../lib/node_loader')
var JDCloud = require('../lib/core')
var Service = JDCloud.Service
var serviceId = 'redis'
Service._services[serviceId] = true

/**
 * redis service.
 * @version 1.0.0
 */

JDCloud.REDIS = class REDIS extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'redis.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
         *  查询缓存Redis实例列表
         * @param {Object} opts - parameters
         * @param {integer} [opts.pageNumber] - 页码；默认为1  optional
         * @param {integer} [opts.pageSize] - 分页大小；默认为20；取值范围[10, 100]  optional
         * @param {filter} [opts.filters] - cacheInstanceId -实例Id，精确匹配，支持多个
cacheInstanceName - 实例名称，模糊匹配，支持单个
cacheInstanceStatus - redis状态，精确匹配，支持多个(running：运行，error：错误，creating：创建中，changing：变配中，deleting：删除中)
  optional
         * @param {sort} [opts.sorts] - createTime - 创建时间(asc：正序，desc：倒序)
  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param cacheInstance cacheInstances
         * @param integer totalCount
      */

  describeCacheInstances (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeCacheInstances"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}
    if (opts.pageNumber !== undefined && opts.pageNumber !== null) {
      queryParams['pageNumber'] = opts.pageNumber
    }
    if (opts.pageSize !== undefined && opts.pageSize !== null) {
      queryParams['pageSize'] = opts.pageSize
    }
    Object.assign(queryParams, this.buildFilterParam(opts.filters, 'filters'))
    Object.assign(queryParams, this.buildSortParam(opts.sorts, 'sorts'))

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeCacheInstances with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/cacheInstance',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  创建一个指定配置的缓存Redis实例
         * @param {Object} opts - parameters
         * @param {cacheInstanceSpec} opts.cacheInstance
         * @param {chargeSpec} [opts.charge]   optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param string cacheInstanceId
         * @param string orderNum
      */

  createCacheInstance (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createCacheInstance"
      )
    }

    opts = opts || {}

    if (opts.cacheInstance === undefined || opts.cacheInstance === null) {
      throw new Error(
        "Missing the required parameter 'opts.cacheInstance' when calling createCacheInstance"
      )
    }

    let postBody = {}
    if (opts.cacheInstance !== undefined && opts.cacheInstance !== null) {
      postBody['cacheInstance'] = opts.cacheInstance
    }
    if (opts.charge !== undefined && opts.charge !== null) {
      postBody['charge'] = opts.charge
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createCacheInstance with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/cacheInstance',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询缓存Redis实例详情
         * @param {Object} opts - parameters
         * @param {string} opts.cacheInstanceId - 缓存Redis实例ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param cacheInstance cacheInstance
      */

  describeCacheInstance (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeCacheInstance"
      )
    }

    opts = opts || {}

    if (opts.cacheInstanceId === undefined || opts.cacheInstanceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.cacheInstanceId' when calling describeCacheInstance"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      cacheInstanceId: opts.cacheInstanceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeCacheInstance with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/cacheInstance/{cacheInstanceId}',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  修改缓存Redis实例的资源名称、描述，二者至少选一
         * @param {Object} opts - parameters
         * @param {string} opts.cacheInstanceId - 缓存Redis实例ID
         * @param {string} [opts.cacheInstanceName] - 缓存Redis实例资源名称  optional
         * @param {string} [opts.cacheInstanceDescription] - 缓存Redis实例资源描述  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  modifyCacheInstanceAttribute (
    opts,
    regionId = this.config.regionId,
    callback
  ) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  modifyCacheInstanceAttribute"
      )
    }

    opts = opts || {}

    if (opts.cacheInstanceId === undefined || opts.cacheInstanceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.cacheInstanceId' when calling modifyCacheInstanceAttribute"
      )
    }

    let postBody = {}
    if (
      opts.cacheInstanceName !== undefined &&
      opts.cacheInstanceName !== null
    ) {
      postBody['cacheInstanceName'] = opts.cacheInstanceName
    }
    if (
      opts.cacheInstanceDescription !== undefined &&
      opts.cacheInstanceDescription !== null
    ) {
      postBody['cacheInstanceDescription'] = opts.cacheInstanceDescription
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      cacheInstanceId: opts.cacheInstanceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call modifyCacheInstanceAttribute with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/cacheInstance/{cacheInstanceId}',
      'PATCH',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  删除单个缓存Redis实例
         * @param {Object} opts - parameters
         * @param {string} opts.cacheInstanceId - 缓存Redis实例ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  deleteCacheInstance (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  deleteCacheInstance"
      )
    }

    opts = opts || {}

    if (opts.cacheInstanceId === undefined || opts.cacheInstanceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.cacheInstanceId' when calling deleteCacheInstance"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      cacheInstanceId: opts.cacheInstanceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call deleteCacheInstance with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/cacheInstance/{cacheInstanceId}',
      'DELETE',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  变更缓存Redis实例配置
         * @param {Object} opts - parameters
         * @param {string} opts.cacheInstanceId - 缓存Redis实例ID
         * @param {string} opts.cacheInstanceClass - 变更后的缓存Redis&lt;a herf&#x3D;&quot;https://www.jdcloud.com/help/detail/411/isCatalog/1&quot;&gt;实例规格代码&lt;/a&gt;
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param string orderNum
      */

  modifyCacheInstanceClass (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  modifyCacheInstanceClass"
      )
    }

    opts = opts || {}

    if (opts.cacheInstanceId === undefined || opts.cacheInstanceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.cacheInstanceId' when calling modifyCacheInstanceClass"
      )
    }
    if (
      opts.cacheInstanceClass === undefined ||
      opts.cacheInstanceClass === null
    ) {
      throw new Error(
        "Missing the required parameter 'opts.cacheInstanceClass' when calling modifyCacheInstanceClass"
      )
    }

    let postBody = {}
    if (
      opts.cacheInstanceClass !== undefined &&
      opts.cacheInstanceClass !== null
    ) {
      postBody['cacheInstanceClass'] = opts.cacheInstanceClass
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      cacheInstanceId: opts.cacheInstanceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call modifyCacheInstanceClass with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/cacheInstance/{cacheInstanceId}:modifyCacheInstanceClass',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  重置缓存Redis实例密码
         * @param {Object} opts - parameters
         * @param {string} opts.cacheInstanceId - 缓存Redis实例ID
         * @param {string} opts.password - 密码，必须包含且只支持字母及数字，不少于8字符不超过16字符
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  resetCacheInstancePassword (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  resetCacheInstancePassword"
      )
    }

    opts = opts || {}

    if (opts.cacheInstanceId === undefined || opts.cacheInstanceId === null) {
      throw new Error(
        "Missing the required parameter 'opts.cacheInstanceId' when calling resetCacheInstancePassword"
      )
    }
    if (opts.password === undefined || opts.password === null) {
      throw new Error(
        "Missing the required parameter 'opts.password' when calling resetCacheInstancePassword"
      )
    }

    let postBody = {}
    if (opts.password !== undefined && opts.password !== null) {
      postBody['password'] = opts.password
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      cacheInstanceId: opts.cacheInstanceId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call resetCacheInstancePassword with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/cacheInstance/{cacheInstanceId}:resetCacheInstancePassword',
      'POST',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询某区域下的实例规格列表
         * @param {Object} opts - parameters
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param instanceClass instanceClasses
         * @param integer totalCount
      */

  describeInstanceClass (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeInstanceClass"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeInstanceClass with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/instanceClass',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
  /**
         *  查询账户配额信息
         * @param {Object} opts - parameters
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param quota quota
      */

  describeUserQuota (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeUserQuota"
      )
    }

    opts = opts || {}

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  redis/1.0.0'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeUserQuota with params:\npathParams:${JSON.stringify(
        pathParams
      )},\nqueryParams:${JSON.stringify(
        queryParams
      )}, \nheaderParams:${JSON.stringify(
        headerParams
      )}, \nformParams:${JSON.stringify(
        formParams
      )}, \npostBody:${JSON.stringify(postBody)}`,
      'DEBUG'
    )

    let request = this.makeRequest(
      '/regions/{regionId}/quota',
      'GET',
      pathParams,
      queryParams,
      headerParams,
      formParams,
      postBody,
      contentTypes,
      accepts,
      returnType,
      callback
    )

    return request.then(
      function (result) {
        if (callback) {
          callback(null, result)
        }
        return result
      },
      function (error) {
        if (callback) {
          callback(error)
        }
        return Promise.reject(error)
      }
    )
  }
}
module.exports = JDCloud.REDIS
