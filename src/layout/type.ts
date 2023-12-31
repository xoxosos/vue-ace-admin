/*
 * @Author: LinRenJie xoxosos666@gmail.com
 * @Date: 2023-10-25 23:47:18
 * @Description:
 */
import type { InjectionKey } from 'vue'
import type { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router'

export interface LayoutProviderData {
  currentRoute: RouteLocationNormalizedLoaded // 根据你的实际情况定义 currentRoute 的类型
  routes: RouteRecordRaw[]
  menus: RouteRecordRaw[]
}
export type InjectType = InjectionKey<LayoutProviderData>
export const layoutProviderKey = Symbol() as InjectType
// 页面局部刷新
export type RefreshFn = () => void
export const refreshKey: InjectionKey<RefreshFn> = Symbol('refresh')
export type MatchPattern = string | RegExp | (string | RegExp)[]
