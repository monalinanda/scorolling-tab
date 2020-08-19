import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import TabContent from "./TabContent";

const Tab = (props) => {
  let currentKey = props.currentKey;
  let [tabData, setTabData] = useState(props.tabItems);
  const [activeKey, setActiveKey] = useState(currentKey);
  const [content, setContent] = useState(null);
  const tab_buttons = useRef();
  let clickedIndex = 0;
  let tabContainerScrollableWidth = null;

  useEffect(() => {
    tabContainerScrollableWidth = tab_buttons.current.scrollWidth;
  });

  const scorollRight = () => {
    if (tab_buttons.current.clientWidth >= tabContainerScrollableWidth) {
      return;
    }
    clickedIndex = clickedIndex + 1;
    tab_buttons.current.style.marginLeft = -180 * clickedIndex + "px";
  };
  const scorollLeft = () => {
    if (clickedIndex > 0) {
      clickedIndex = clickedIndex - 1;
      tab_buttons.current.style.marginLeft = -180 * clickedIndex + "px";
    }
  };

  //onClick
  const handleClick = (index) => {
    setActiveKey(index);
    tabData.filter((contentItem, i) =>
      contentItem.key === index ? setContent(contentItem.content) : " "
    );
  };
  //Add Tabs
  var lastObj = tabData[tabData.length - 1];

  const addTabs = () => {
    setActiveKey(activeKey);
    const newItems = [...tabData];
    var { [Object.keys(lastObj).pop()]: lastItem } = lastObj;
    console.log(lastItem, "tryt");
    props.addTab.key = lastItem + 1;
    newItems.push(props.addTab);
    console.log(newItems);
    setTabData(newItems);
  };
  //remove
  const removeTab = (key) => {
    tabData = tabData.filter((item) => item.key !== key);
    setTabData(tabData);
    console.log(key, tabData, "td");
  };
  return (
    <div className="tab_wrapper">
      <div className="tabs_wrapper">
        <div className="tab_buttons" ref={tab_buttons}>
          {tabData.map((item, index) => (
            <>
              <div
                className={`tab_selector ${
                  activeKey === index ? "active" : ""
                }`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {item.title}
              </div>

              <FontAwesomeIcon
                className="close_Tab"
                icon={faTimes}
                onClick={() => {
                  removeTab(item.key);
                }}
              />
            </>
          ))}
        </div>
        <FontAwesomeIcon
          className={`chevron_left  chevron_position ${
            activeKey === 0 ? "hidden" : ""
          }`}
          icon={faChevronLeft}
          onClick={scorollLeft}
        />
        <FontAwesomeIcon
          className={`chevron_right  chevron_position ${
            activeKey === tabData.length - 1 ? "hidden" : ""
          }`}
          icon={faChevronRight}
          onClick={scorollRight}
        />
        <FontAwesomeIcon
          className={
            tabData.length > 10 ? "hidden" : "plus_right chevron_position"
          }
          icon={faPlus}
          onClick={addTabs}
        />
      </div>
      <TabContent content={content} />
    </div>
  );
};
export default Tab;
