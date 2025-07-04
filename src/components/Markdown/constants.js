import { Fragment } from 'react'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import remarkHeadingId from 'remark-heading-id'

export const COMPONENT_MAP = {
  fragment: Fragment
}

export const PLUGINS_MAP = {
  rehypeRaw,
  remarkGfm,
  remarkHeadingId
}
