'use babel';

import MyPackageView from './andre-tools-view';
import { CompositeDisposable } from 'atom';

export default {

  myPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    /*
    this.myPackageView = new MyPackageView(state.myPackageViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.myPackageView.getElement(),
      visible: false
    });
*/
    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'andre-tools:oneline': () => this.oneline(),
      'andre-tools:test': () => this.test()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.myPackageView.destroy();
  },

  serialize() {
    return {
      myPackageViewState: this.myPackageView.serialize()
    };
  },

  oneline() {
    console.log('andre-tools was toggled!');

    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let reversed = selection.split('\n').join(',')
      editor.insertText(reversed)
    }

/*
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
    */
  },

  test() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      let reversed = selection.split('\n').join(',')
      editor.insertText(reversed)
    }
  }

};
