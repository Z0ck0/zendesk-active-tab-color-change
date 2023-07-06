// ==UserScript==
// @name         Zendesk Active Tab Color Change
// @namespace    your-namespace
// @version      1.0
// @description  Changes the background color of the active Zendesk ticket tab
// @match        https://example.zendesk.com/* // Replace the domain in the @match metadata with your company's Zendesk domain
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    // Adjust the CSS class selector below to target the correct element
    // You can find the CSS class of the active ticket tab by inspecting the element using your browser's developer tools
    // Replace ".sc-lzuyri-0.gOXeKF" with the appropriate CSS class

    .sc-lzuyri-0.gOXeKF {
        // Adjust the RGB color values (216, 227, 227) with your desired RGB color
        background-color: rgb(216, 227, 227) !important;
    }
`);
