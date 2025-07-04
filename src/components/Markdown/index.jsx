import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import { getComponents, getPlugins } from './helpers'

const Markdown = ({ className, components, rehypePlugins, remarkPlugins, children }) => {
  return (
    <ReactMarkdown
      className={className}
      components={components ? getComponents(components) : {}}
      rehypePlugins={rehypePlugins ? getPlugins(rehypePlugins) : []}
      remarkPlugins={remarkPlugins ? getPlugins(remarkPlugins) : []}
    >
      {children}
    </ReactMarkdown>
  )
}

export default Markdown

Markdown.propTypes = {
  className: PropTypes.string,
  components: PropTypes.object,
  rehypePlugins: PropTypes.array,
  remarkPlugins: PropTypes.array,
  children: PropTypes.node
}
