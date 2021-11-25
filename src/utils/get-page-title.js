/*
 * @Author: shaohb
 * @Date: 2021-11-25 16:59:00
 * @LastEditors: shaohb
 * @LastEditTime: 2021-11-25 17:06:18
 * @Description:
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || '人力资源管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
