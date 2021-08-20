'use strict';

const e = React.createElement;

class EnviarButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: false };
  }

  render() {
    if (this.state.click) {
      return 'Agradecemos sua colaboração!';
    }

    return e(
      'submit',
      { onClick: () => this.setState({ click: true }) },
      'ENVIAR!'
    );
  }
}
const domContainer = document.querySelector('#enviar_button');
ReactDOM.render(e(EnviarButton), domContainer);