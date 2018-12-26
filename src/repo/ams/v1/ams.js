/*
 * Copyright 2018 JDCLOUD.COM
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
 * 应用管理平台API (仅对授权用户使用)
 * 应用管理平台API
 *
 * OpenAPI spec version: v1
 * Contact: 
 *
 * NOTE: This class is auto generated by the jdcloud code generator program.
 */

require('../../../lib/node_loader');
var JDCloud = require('../../../lib/core');
var Service = JDCloud.Service;
var serviceId = "ams"
Service._services[serviceId] = true;

/**
* ams service.
* @version 1.0.0
*/

JDCloud.AMS= class AMS extends Service {
    constructor(options = {}) {
            options._defaultEndpoint = {};
            options._defaultEndpoint.protocol = options._defaultEndpoint.protocol || 'https';
            options._defaultEndpoint.host = options._defaultEndpoint.host || 'ams.jdcloud-api.com';
            options.basePath = '/v1'; //默认要设为空""
            super( serviceId , options);
    }

      /**
      *  获取收流基础数据查询
      * @param {Object} opts - parameters
      * @param {string} opts.streamId - 流ID 
      * @param {string} [opts.startTime] - 起始时间  optional 
      * @param {string} [opts.endTime] - 结束时间  optional 
      * @param {string} callback - callback
      @return {Object} result
      * @param streamInputData streamInputDatas  
      */

    describeStreamsInput(opts, callback){

         opts = opts || {};

          if (opts.streamId === undefined || opts.streamId === null) {
               throw new Error('Missing the required parameter \'opts.streamId\' when calling describeStreamsInput');
          }

          let postBody = null;
          let queryParams = {
          };
           if (opts.startTime !== undefined && opts.startTime !== null) {
               queryParams['startTime'] = opts.startTime
           }
           if (opts.endTime !== undefined && opts.endTime !== null) {
               queryParams['endTime'] = opts.endTime
           }

          let pathParams = {
               'regionId': 'jdcloud',
               'streamId': opts.streamId 
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  ams/1.0.0',
          };
          
          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

          // 扩展自定义头
          if (opts['x-extra-header']) {
            for (let extraHeader in opts['x-extra-header']) {
              headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
            }

            if (Array.isArray(opts['x-extra-header']['content-type'])) {
              contentTypes = opts['x-extra-header']['content-type']
            } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
              contentTypes = opts['x-extra-header']['content-type'].split(',')
            }

            if (Array.isArray(opts['x-extra-header']['accept'])) {
              accepts = opts['x-extra-header']['accept']
            } else if (typeof opts['x-extra-header']['accept'] === 'string') {
              accepts = opts['x-extra-header']['accept'].split(',')
            }
          }

          let formParams = {};

          let returnType = null;

          this.config.logger(`call describeStreamsInput with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/streams/{streamId}/inputs', 'GET', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
            if (callback && typeof callback === 'function') {
              return callback(null, result);
            }
            return result
            }, function (error) {
               if (callback && typeof callback === 'function') {
                 return callback(error);
               }
               return Promise.reject(error)
          });
    }

      /**
      *  客户端鉴权查询
      * @param {Object} opts - parameters
      * @param {string} opts.pId - PinId 
      * @param {integer} [opts.ver] - 版本  optional 
      * @param {string} callback - callback
      @return {Object} result
      * @param string pId  PinId
      * @param integer ver  版本
      * @param number blacklist  集合
      * @param integer status  状态
      * @param string license  授权号
      */

    describeAuthenticate(opts, callback){

         opts = opts || {};

          if (opts.pId === undefined || opts.pId === null) {
               throw new Error('Missing the required parameter \'opts.pId\' when calling describeAuthenticate');
          }

          let postBody = null;
          let queryParams = {
          };
           if (opts.ver !== undefined && opts.ver !== null) {
               queryParams['ver'] = opts.ver
           }

          let pathParams = {
               'regionId': 'jdcloud',
               'pId': opts.pId 
          };

         let headerParams = {
               'User-Agent': 'JdcloudSdkNode/1.0.0  ams/1.0.0',
          };
          
          let contentTypes = ['application/json'];
          let accepts = ['application/json'];

          // 扩展自定义头
          if (opts['x-extra-header']) {
            for (let extraHeader in opts['x-extra-header']) {
              headerParams[extraHeader] = opts['x-extra-header'][extraHeader]
            }

            if (Array.isArray(opts['x-extra-header']['content-type'])) {
              contentTypes = opts['x-extra-header']['content-type']
            } else if (typeof opts['x-extra-header']['content-type'] === 'string') {
              contentTypes = opts['x-extra-header']['content-type'].split(',')
            }

            if (Array.isArray(opts['x-extra-header']['accept'])) {
              accepts = opts['x-extra-header']['accept']
            } else if (typeof opts['x-extra-header']['accept'] === 'string') {
              accepts = opts['x-extra-header']['accept'].split(',')
            }
          }

          let formParams = {};

          let returnType = null;

          this.config.logger(`call describeAuthenticate with params:\npathParams:${JSON.stringify(pathParams)},\nqueryParams:${JSON.stringify(queryParams)}, \nheaderParams:${JSON.stringify(headerParams)}, \nformParams:${JSON.stringify(formParams)}, \npostBody:${JSON.stringify(postBody)}`,"DEBUG");

          let request = this.makeRequest('/appManager/{pId}/authenticates', 'GET', pathParams, queryParams,
                          headerParams, formParams, postBody, contentTypes, accepts, returnType, callback);

          return request.then(function (result) {
            if (callback && typeof callback === 'function') {
              return callback(null, result);
            }
            return result
            }, function (error) {
               if (callback && typeof callback === 'function') {
                 return callback(error);
               }
               return Promise.reject(error)
          });
    }

};
module.exports = JDCloud.AMS