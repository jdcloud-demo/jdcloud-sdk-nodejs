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
 * 快照相关接口
 * 快照相关接口，提供创建快照，查询快照信息，删除快照，修改快照信息等功能。
 *
 * OpenAPI spec version: v1
 * Contact:
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../lib/node_loader')
var JDCloud = require('../lib/core')
var Service = JDCloud.Service
var serviceId = 'disk'
Service._services[serviceId] = true

/**
 * disk service.
 * @version 0.3.1
 */

JDCloud.DISK = class DISK extends Service {
  constructor (options = {}) {
    options._defaultEndpoint = {}
    options._defaultEndpoint.protocol =
      options._defaultEndpoint.protocol || 'https'
    options._defaultEndpoint.host =
      options._defaultEndpoint.host || 'disk.jdcloud-api.com'
    options.basePath = '/v1' // 默认要设为空""
    super(serviceId, options)
  }

  /**
         *  查询云硬盘列表
         * @param {Object} opts - parameters
         * @param {integer} [opts.pageNumber] - 页码, 默认为1, 取值范围：[1,∞)  optional
         * @param {integer} [opts.pageSize] - 分页大小，默认为20，取值范围：[10,100]  optional
         * @param {filter} [opts.filters] - diskId - 云硬盘ID，精确匹配，支持多个
diskType - 云硬盘类型，精确匹配，支持多个，取值为 ssd 或 premium-hdd
instanceId - 云硬盘所挂载主机的ID，精确匹配，支持多个
instanceType - 云硬盘所挂载主机的类型，精确匹配，支持多个
status - 可用区，精确匹配，支持多个
az - 云硬盘状态，精确匹配，支持多个
name - 云硬盘名称，模糊匹配，支持单个
  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param disk disks
         * @param integer totalCount  查询的云硬盘数目
      */

  describeDisks (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeDisks"
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

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  disk/0.3.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeDisks with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/disks',
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
         *  云硬盘信息详情
         * @param {Object} opts - parameters
         * @param {string} opts.diskId - 云硬盘ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param disk disk
      */

  describeDisk (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeDisk"
      )
    }

    opts = opts || {}

    if (opts.diskId === undefined || opts.diskId === null) {
      throw new Error(
        "Missing the required parameter 'opts.diskId' when calling describeDisk"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      diskId: opts.diskId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  disk/0.3.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeDisk with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/disks/{diskId}',
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
         *  从已有快照恢复一块云硬盘
         * @param {Object} opts - parameters
         * @param {string} opts.diskId - 云硬盘ID
         * @param {string} opts.snapshotId - 用于恢复云盘的快照ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
      */

  restoreDisk (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  restoreDisk"
      )
    }

    opts = opts || {}

    if (opts.diskId === undefined || opts.diskId === null) {
      throw new Error(
        "Missing the required parameter 'opts.diskId' when calling restoreDisk"
      )
    }
    if (opts.snapshotId === undefined || opts.snapshotId === null) {
      throw new Error(
        "Missing the required parameter 'opts.snapshotId' when calling restoreDisk"
      )
    }

    let postBody = {}
    if (opts.snapshotId !== undefined && opts.snapshotId !== null) {
      postBody['snapshotId'] = opts.snapshotId
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      diskId: opts.diskId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  disk/0.3.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call restoreDisk with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/disks/{diskId}:restore',
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
         *  查询云硬盘快照列表
         * @param {Object} opts - parameters
         * @param {integer} [opts.pageNumber] - 页码, 默认为1, 取值范围：[1,∞)  optional
         * @param {integer} [opts.pageSize] - 分页大小，默认为20，取值范围：[10,100]  optional
         * @param {filter} [opts.filters] - snapshotId - 云硬盘快照ID，支持多个
diskId - 生成快照的云硬盘ID，支持多个
status - 快照状态，精确匹配，支持多个,取值为 creating、available、in-use、deleting、error_create、error_delete
name - 快照名称，模糊匹配，支持单个
  optional
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param snapshot snapshots
         * @param integer totalCount  查询的快照数目
      */

  describeSnapshots (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeSnapshots"
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

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  disk/0.3.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeSnapshots with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/snapshots',
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
         *  为指定云硬盘创建快照调用成功返回后，新生成的快照的状态为 creating
         * @param {Object} opts - parameters
         * @param {snapshotSpec} opts.snapshotSpec - 创建快照规格
         * @param {string} opts.clientToken - 幂等性校验参数
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param string snapshotId  创建的快照ID
      */

  createSnapshot (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  createSnapshot"
      )
    }

    opts = opts || {}

    if (opts.snapshotSpec === undefined || opts.snapshotSpec === null) {
      throw new Error(
        "Missing the required parameter 'opts.snapshotSpec' when calling createSnapshot"
      )
    }
    if (opts.clientToken === undefined || opts.clientToken === null) {
      throw new Error(
        "Missing the required parameter 'opts.clientToken' when calling createSnapshot"
      )
    }

    let postBody = {}
    if (opts.snapshotSpec !== undefined && opts.snapshotSpec !== null) {
      postBody['snapshotSpec'] = opts.snapshotSpec
    }
    if (opts.clientToken !== undefined && opts.clientToken !== null) {
      postBody['clientToken'] = opts.clientToken
    }

    let queryParams = {}

    let pathParams = {
      regionId: regionId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  disk/0.3.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call createSnapshot with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/snapshots',
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
         *  云硬盘快照信息详情
         * @param {Object} opts - parameters
         * @param {string} opts.snapshotId - 快照ID
         * @param {string} regionId - ID of the region
         * @param {string} callback - callback
         @return {Object} result
         * @param snapshot snapshot
      */

  describeSnapshot (opts, regionId = this.config.regionId, callback) {
    if (typeof regionId === 'function') {
      callback = regionId
      regionId = this.config.regionId
    }

    if (regionId === undefined || regionId === null) {
      throw new Error(
        "Missing the required parameter 'regionId' when calling  describeSnapshot"
      )
    }

    opts = opts || {}

    if (opts.snapshotId === undefined || opts.snapshotId === null) {
      throw new Error(
        "Missing the required parameter 'opts.snapshotId' when calling describeSnapshot"
      )
    }

    let postBody = null
    let queryParams = {}

    let pathParams = {
      regionId: regionId,
      snapshotId: opts.snapshotId
    }

    let headerParams = {
      'User-Agent': 'JdcloudSdkNode/1.0.0  disk/0.3.1'
    }

    let formParams = {}

    let contentTypes = ['application/json']
    let accepts = ['application/json']

    let returnType = null

    this.config.logger(
      `call describeSnapshot with params:\npathParams:${JSON.stringify(
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
      '/regions/{regionId}/snapshots/{snapshotId}',
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
module.exports = JDCloud.DISK
