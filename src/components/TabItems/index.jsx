import "./index.css";

const TabItems = (props) => {
  let { tabDetails, updateActiveTab, isActive } = props;
  let { displayText, tabId } = tabDetails;

  const onClickTab = () => {
    updateActiveTab(tabId);
  };

  const tabBtnClassName = isActive ? "tab-button active" : "tab-button";
  return (
    <li className="tab-item">
      <button type="button" className={tabBtnClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  );
};

export default TabItems;
