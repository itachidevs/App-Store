import './index.css'

const TabItem = props => {
  const {tabDetails, onclicking, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTab = isActive ? 'active-tab' : ''
  const ontheclick = () => {
    onclicking(tabId)
  }
  return (
    <li>
      {' '}
      <button
        className={`tabButton ${activeTab}`}
        type="button"
        onClick={ontheclick}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
