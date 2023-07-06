// ==UserScript==
// @name         Zendesk Active Tab Color Change
// @namespace    your-namespace
// @version      1.0
// @description  Changes the background color of the active Zendesk ticket tab
// @match        https://example.zendesk.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    // Adjust the CSS class selector below to target the correct element
    // You can find the CSS class of the active ticket tab by inspecting the element using your browser's developer tools
    // 1. Right-click on the active tab in Zendesk.
    // 2. Select "Inspect" or "Inspect Element" from the context menu.
    // 3. In the developer tools, locate the element corresponding to the active tab.
    // 4. Look for the "class" attribute of that element.
    // 5. Copy the CSS class from the "class" attribute and replace ".sc-lzuyri-0.gOXeKF" below with the copied class.

    .sc-lzuyri-0.gOXeKF {
        // Adjust the RGB color below to your preferred color for the background
        // The format is: background-color: rgb(R, G, B)
        // Replace the values (216, 227, 227) with your desired RGB color
        background-color: rgb(216, 227, 227) !important;
    }
`);
