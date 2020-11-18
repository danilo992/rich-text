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
};