import { useAppStore } from '@/stores/modules/app'
import { useI18n } from 'vue-i18n'

export default function useLocalI18n() {
  const i18n = useI18n()
  // 根据当前的语言环境来翻译
  function tt(text: string) {
    if (!text) return ''
    // 如果找不到对应的翻译，则返回原始的 text
    return i18n.te(text) ? i18n.t(text) : text
  }
  // 监听语言切换
  function watchSwitchLang(...cbs: any[]) {
    const useAppConfig = useAppStore()
    watch(
      () => useAppConfig.getLanguage,
      () => {
        // 根据当前语言做点什么
        cbs.forEach((cb) => cb(useAppConfig.getLanguage))
      }
    )
  }

  function changeLanguage(lang: string) {
    const useAppConfig = useAppStore()
    i18n.locale.value = lang
    useAppConfig.appConfig.defaultLanguage = lang
  }

  function getLanguage() {
    const useAppConfig = useAppStore()
    return computed(() => useAppConfig.getLanguage)
  }

  return {
    tt,
    watchSwitchLang,
    changeLanguage,
    getLanguage
  }
}
