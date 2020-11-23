var CDEditor = function (textarea) {
    this.textarea = textarea;
    
    var textareaSource = null;
    var container = null;
    var toolbar = [];
    var iframe = null;
    
   
    var fonts = ['Arial', 'Calibri', 'Comic Sans MS', 'Impact', 'Trebuchet MS', 'Times New Roman'];
    var sizes = [1, 2, 3, 4, 5, 6, 7];
    var colors = ['#000000', '#333333', '#666666', '#999999', '#CCCCCC', '#FFFFFF',
        '#0000FF', '#00FF00', '#FF0000', '#00FFFF', '#FFFF00', '#FF00FF'
    ];
    var self = this;

    var init = function () {
        textareaSource = document.querySelector(self.textarea);
        textareaSource.style.display = 'none';
        container = textareaSource.parentElement;
        initToolbar(container, toolbar);
        initIframe(container, textareaSource);
    };

    this.save = function () {
        textareaSource.value = CDEditorIframe.document.body.innerHTML;
    };

    var Component = function (commandName, element, event) {
        this.commandName = commandName;
        this.element = document.createElement('li');
        this.element.appendChild(element);
        this.recoverValue = function () {
            return null;
        };

        var selfComponent = this;
        this.element.addEventListener(event, function () {
            CDEditoIframe.document.execCommand(commandName, false, selfComponent.recoverValue());
        });
    };

    var ComponentButton = function (commandName, icon) {
        var button = document.createElement('button');
        var buttonIcon = document.createElement('i');
        buttonIcon.classList.add('fa', 'fa-', + icon);
        button.appendChild(buttonIcon);
        Component.call(this,commandName, button, 'click');
    };

    var ComponentSelect = function (commandName, valeus) {
        var select = document.createElement('select');
        valeus.forEach(function (value) {
            var option = document.createElement('option');
            option.value = value;
            option.appendChild(document.createTextNode(value));
            select.appendChild(option);
        });

        Component.call(this, commandName, select, 'change');

        var selfComponentSelect = this;
        this.recoverValue = function () {
            return selfComponentSelect.element.firsChild.value;
        };
    };

    var Space = function () {
        this.element = document.createElement('li');
        this.element.classList.add('space');
        this.element.innerHTML = '&nbsp;';
    };

    var selectedNode = function () {
        return CDEditorIframe.getSelection().anchorNode.parentNode; 
    };

var initToolbar = function (container, toolbar) {
    //HIGNLIGHTER BUTTON
    var highlighter = new ComponentButton('backColor', 'highlighter');
    highlighter.recoverValue = function () {
        return selectedNode().style.backgroundColor === 'yellow' ? 'white' : 'yellow';
    };
    
};
