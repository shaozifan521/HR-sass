/*
 * @Author: shaohb
 * @Date: 2021-11-25 16:59:00
 * @LastEditors: shaohb
 * @LastEditTime: 2021-11-26 16:35:02
 * @Description: 一个专门存放校验工具方法的文件
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 校验手机号
 * **/
export function validMobile(str) {
  return /^1[3-9]\d{9}$/.test(str) // 校验手机号
}
