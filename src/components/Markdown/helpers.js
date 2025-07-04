import { COMPONENT_MAP, PLUGINS_MAP } from './constants'

/**
 * Maps component a component config object to a set of predefined Element > Component overrides
 * 
 * @param {object} components A component config file matching the format { el: Component, ... }
 * @returns {object} The available mapped components
 */
export const getComponents = (components = {}) =>
  Object
    .entries(components)
    .reduce((a, [key, component]) => {
      const mappingAvailable = COMPONENT_MAP[component]

      return { ...a, ...(mappingAvailable ? { [key]: COMPONENT_MAP[component] } : {}) }
    }, {})

/**
 * Maps a list of plugin names to the actual plugins
 * 
 * @param {array} plugins A list of plugins names matching the format ['plugin1', ...]
 * @returns {array} The available mapped plugins
 */
export const getPlugins = (plugins = []) => plugins
  ?.map(plugin => PLUGINS_MAP[plugin] || null)
  .filter(p => p) || []
