import React from "react";
import Header from "./Header";
import Tab from "./Tab";

export default function ShowScreen() {
  const initialItems = [
    { title: "Tab 1", content: "Content of Tab 1", key: 0 },
    { title: "Tab 2", content: "Content of Tab 2", key: 1 },
    {
      title: "Tab 3",
      content: "Content of Tab 3",
      key: 2,
    },
    {
      title: "Tab 4",
      content: "Content of Tab 4",
      key: 3,
    },
    { title: "Tab 5", content: "Content of Tab 1", key: 4 },
    { title: "Tab 6", content: "Content of Tab 2", key: 5 },
    {
      title: "Tab 7",
      content: "Content of Tab 3",
      key: 6,
    },
    {
      title: "Tab 8",
      content: "Content of Tab 4",
      key: 7,
    },
  ];

  var currentKey = initialItems[0].key;
  const addTab = {
    title: "New Tab",
    content: "Content of new Tab",
  };
  return (
    <div className="wrapper">
      <Header />
      <Tab tabItems={initialItems} currentKey={currentKey} addTab={addTab} />
    </div>
  );
}
