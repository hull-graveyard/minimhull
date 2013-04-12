/**
 * A very simple widget.
 * Once it has been instanciated (see `index.html`), it compiles its templates (`hullo.hbs` here)
 * and renders it into its root element (the <div> declaring the widget in `index.html`)
 * 
 * The name of the widget must be the name of the directory in which the file `main.js` is located
 */
Hull.widget("hullo", {
  /**
   * The `templates` property defines which templates have to be used for this widget.
   * The templates must be located in the same directory as the `main.js` file declaring the widget
   */
  templates: ['hullo'],
  /**
   * The `refreshEvents` property automatically triggers the `render` method of the widget,
   * with the effect of redrawing the whole widget.
   * It takes an array as parameter, each element of which being the name of an event.
   *
   * In this case, `model.hull.me.change` is an event triggered every time the user is changed
   * (update an attribute, login, logout)
   */
  refreshEvents: ['model.hull.me.change']
});

