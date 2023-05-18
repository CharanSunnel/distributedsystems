
function makeNormal() {
  var editor = document.getElementById("myText");
  var selection = window.getSelection();

  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var content = range.extractContents();
    var textNode = document.createTextNode(content.textContent);

    // Check if the selected text has any formatting applied
    var isFormatted = false;
    var currentNode = range.commonAncestorContainer;

    while (currentNode && currentNode !== editor) {
      if (
        currentNode.nodeName === "B" ||
        currentNode.nodeName === "I" ||
        currentNode.nodeName === "U"
      ) {
        isFormatted = true;
        break;
      }
      currentNode = currentNode.parentNode;
    }

    if (isFormatted) {
      // If the selected text has formatting applied, replace it with the plain text node
      var parentElement = range.startContainer.parentNode;
      parentElement.parentNode.replaceChild(textNode, parentElement);
    }
    else{
      //range.deleteContents();
      range.insertNode(textNode);
    }

    // Update the range to include the modified text
    range = document.createRange();
    range.selectNodeContents(editor);
    selection.removeAllRanges();
    selection.addRange(range);
    
  }
}





function makeBold() {
  var editor = document.getElementById("myText");
  var selection = window.getSelection();

  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var boldTag = document.createElement("b");

    // Check if the selected text is already bold
    var isBold = document.queryCommandState("bold");

    if (isBold) {
      // If the selected text is already bold, remove the bold formatting
      document.execCommand("bold", false, null);
    } else {
      // If the selected text is not bold, apply bold formatting
      document.execCommand("bold", false, null);
    }

    // Update the range to include the modified bold formatting
    range = document.createRange();
    range.selectNodeContents(editor);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

function makeItalic() {
  var editor = document.getElementById("editor");
  var selection = window.getSelection();

  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var italicTag = document.createElement("i");

    // Check if the selected text is already italic
    var isItalic = document.queryCommandState("italic");

    if (isItalic) {
      // If the selected text is already italic, remove the italic formatting
      document.execCommand("italic", false, null);
    } else {
      // If the selected text is not italic, apply italic formatting
      document.execCommand("italic", false, null);
    }

    // Update the range to include the modified italic formatting
    range = document.createRange();
    range.selectNodeContents(editor);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
function makeUnderline() {
  var editor = document.getElementById("editor");
  var selection = window.getSelection();

  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    var underlineTag = document.createElement("u");

    // Check if the selected text is already underlined
    var isUnderline = document.queryCommandState("underline");

    if (isUnderline) {
      // If the selected text is already underlined, remove the underline formatting
      document.execCommand("underline", false, null);
    } else {
      // If the selected text is not underlined, apply underline formatting
      document.execCommand("underline", false, null);
    }

    // Update the range to include the modified underline formatting
    range = document.createRange();
    range.selectNodeContents(editor);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}



function leftalign() {
  var element = document.getElementById("myText");
  if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(0);
      var newNode = document.createElement("i");
      range.surroundContents(newNode);
    }
  } else if (document.selection && document.selection.createRange) {
    var range = document.selection.createRange();
    range.execCommand("left-align");
  }
}

function leftAlignSelection() {
  const editor = document.getElementById("editor");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const div = document.createElement("div");
  div.className = "left-align";
  div.appendChild(range.extractContents());
  range.insertNode(div);

  selection.removeAllRanges();
  selection.addRange(range);
}

function centerAlignSelection() {
  const editor = document.getElementById("editor");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const div = document.createElement("div");
  div.className = "center-align";
  div.appendChild(range.extractContents());
  range.insertNode(div);

  selection.removeAllRanges();
  selection.addRange(range);
}

function rightAlignSelection() {
  const editor = document.getElementById("editor");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const div = document.createElement("div");
  div.className = "right-align";
  div.appendChild(range.extractContents());
  range.insertNode(div);

  selection.removeAllRanges();
  selection.addRange(range);
}

function convertSelectionToList() {
  const editor = document.getElementById("editor");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const list = document.createElement("ol");
  const listItems = range.extractContents();
  list.appendChild(listItems);
  range.insertNode(list);

  selection.removeAllRanges();
  selection.addRange(range);
}

function convertSelectionTounList() {
  const editor = document.getElementById("editor");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const list = document.createElement("ul");
  const listItems = range.extractContents();
  list.appendChild(listItems);
  range.insertNode(list);

  selection.removeAllRanges();
  selection.addRange(range);
}

function indentSelection() {
  const editor = document.getElementById("editor");
  const selection = window.getSelection();
  const range = selection.getRangeAt(0);

  const blockquote = document.createElement("blockquote");
  const selectedContent = range.extractContents();
  blockquote.appendChild(selectedContent);
  range.insertNode(blockquote);

  selection.removeAllRanges();
  selection.addRange(range);
}

function unindentSelection() {
    const editor = document.getElementById("editor");
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
  
    const blockquote = document.createElement("blockquote");
    const selectedContent = range.extractContents();
    blockquote.appendChild(selectedContent);
    
    // Check if the selected content is already in a blockquote
    const parentBlockquote = range.commonAncestorContainer.closest("blockquote");
    if (parentBlockquote) {
      // If it is, move the selected content outside of it
      parentBlockquote.parentNode.insertBefore(blockquote, parentBlockquote.nextSibling);
      parentBlockquote.remove();
    } else {
      // Otherwise, just replace the selected content with the new blockquote
      range.insertNode(blockquote);
    }
  
    selection.removeAllRanges();
    selection.addRange(range);
  }
  



  /*function makeBold() {
  var element = document.getElementById("myText");
  if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(0);
      var newNode = document.createElement("b");
      range.surroundContents(newNode);
    }
  } else if (document.selection && document.selection.createRange) {
    var range = document.selection.createRange();
    range.execCommand("bold");
  }
}
/*
function makeBold() {
  var boldTag = document.createElement("b");
  var paraTag = document.createElement("p");
  var editor = document.getElementById("myText");
  var selection = window.getSelection();
  var isBold = false;
  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);

    var parentElement = range.commonAncestorContainer.parentElement;
    while (parentElement !== editor) {
      if (parentElement.nodeName === 'B' || parentElement.tagName === 'B') {
        isBold = true;
        break;
      }
      parentElement = parentElement.parentElement;
    }
    //var boldTag = document.createElement("b");
    
    // Check if the selected text is already bold
    //var isBold = range.startContainer.parentNode.nodeName === "B";

    // If the selected text is already bold, remove the bold formatting
    if (isBold) {
      var text = range.extractContents();
      boldTag.innerHTML = text.textContent;
      range.insertNode(paraTag);
      alert("The text is in bold.");
    } 
    // If the selected text is not bold, apply bold formatting
    else {
      boldTag.appendChild(range.extractContents());
      range.insertNode(boldTag);
    }

    // Restore the selection
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

*/

/*
function makeItalic() {
  var element = document.getElementById("myText");
  if (window.getSelection) {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(0);
      var newNode = document.createElement("i");
      range.surroundContents(newNode);
    }
  } else if (document.selection && document.selection.createRange) {
    var range = document.selection.createRange();
    range.execCommand("italic");
  }
}
*/

/*
function makeNormal() {
  var element = document.getElementById("myText");
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  var text = range.toString();
  var parent = range.commonAncestorContainer;
  parent.innerHTML = parent.innerHTML.replace(
    text,
    '<span style="font-weight:normal;">' + text + "</span>"
  );
}
*/