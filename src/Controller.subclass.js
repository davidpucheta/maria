/**

A function that makes subclassing maria.Controller more compact.

The following example creates a checkit.TodoController constructor
function equivalent to the more verbose example shown in
the documentation for maria.Controller.

    maria.Controller.subclass(checkit, 'TodoController', {
        properties: {
            onClickCheck: function () {
                this.getModel().toggleDone();
            },
            onDblclickDisplay: function () {
                this.getView().showEdit();
            },
            onKeyupInput: function () {
                var view = this.getView();
                if (checkit.isBlank(view.getInputValue())) {
                    view.hideToolTip();
                } else {
                    view.showToolTip();
                }
            },
            onKeypressInput: function (evt) {
                if (evt.keyCode === 13) {
                    this.onBlurInput();
                }
            },
            onBlurInput: function () {
                var view = this.getView();
                var value = view.getInputValue();
                view.hideToolTip();
                view.showDisplay();
                if (!checkit.isBlank(value)) {
                    this.getModel().setContent(value);
                }
            }
        }
    });

*/
maria.Controller.subclass = function () {
    maria.subclass.apply(this, arguments);
};
