import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempoRestante: ''
    };
  }

  componentDidMount() {
    this.atualizarTempo();
    this.intervalId = setInterval(this.atualizarTempo, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  transformTempo() {
    var horaFinal = new Date();
    horaFinal.setDate(horaFinal.getDate() + 1);
    horaFinal.setHours(0, 0, 0, 0);

    var agora = new Date();
    var tempoAte = horaFinal - agora;
    var conta = 1000 * 60 * 60;
    var conta2 = 1000 * 60;

    var hrs = Math.floor(tempoAte / conta);
    var min = Math.floor((tempoAte % conta) / conta2);
    var seg = Math.floor((tempoAte % conta2) / 1000);

    return hrs + 'hrs ' + min + 'min ' + seg + 's';
  }

  atualizarTempo = () => {
    const tempo = this.transformTempo();
    this.setState({ tempoRestante: tempo });
  };

  render() {
    return (
      <div className="index">
        <div className="divimagem">
          <img
            alt="imagem de doces"
            className="docesindex"
            src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3262847:1659460365/Doce.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=bf75be3"
          />
        </div>
        <div id="divcount">
          <h4 id="titlecount">As ofertas exclusivas terminam em:</h4>
          <p id="contagem">{this.state.tempoRestante}</p>
        </div>
      </div>
    );
  }
}

export default Home;
