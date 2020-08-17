console.log('Chatter Extension enabled.');

// Listen for message from background
chrome.runtime.onMessage.addListener(
  (request) => {
    console.log(request)
    doTheThing({});
  });

const doTheThing = ({ colorFromStorage, classNameFromStorage }) => {
  setTimeout(() => {
    const getChatType = (value) => {
      const typeNode = document.querySelector(value);
      return typeNode?.innerText;
    };
    
    const setBackgroundColor = (nodeArray, color) => {
      nodeArray.forEach(
        node => node?.setAttribute('style', `background-color:${color}`)
      );
    };
    
    const getNodeArray = (className) => {
      const nodeCollection = document.getElementsByClassName(className);
      return [...nodeCollection];
    };
    
    const chatType = getChatType('.css-103tagr');
    const newColor = colorFromStorage || '#b7dae8';
    const classToBeChanged = classNameFromStorage || 'lc-1uohnvk'|| 'css-14yy7yi';
    const nodesToBeChanged = getNodeArray(classToBeChanged)
    const isCapterraChat = (chatType === 'Capterra');
    
    console.table({
      chatType,
      newColor,
      classToBeChanged,
      nodesToBeChanged,
      isCapterraChat
    });
    
    isCapterraChat ? setBackgroundColor(nodesToBeChanged, newColor) : null;
    console.log(isCapterraChat);
  }, 50);
};


