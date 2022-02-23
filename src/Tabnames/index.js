import './index.css'

const Tabnames = props => {
  const {tabDetails, category, changeTab} = props
  const {tabId, displayText} = tabDetails

  const newClass = category === tabId ? 'button1' : ''

  const tabChange = () => {
    changeTab(tabId)
  }

  return (
    <li>
      <button
        className={`button ${newClass}`}
        type="button"
        onClick={tabChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tabnames
