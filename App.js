import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { header, main, footer } from './src/styles/index'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tempo: 0,
      botao1: 'Vai!',
      botao2: 'Zerar',
      listaTempo: []
    }
    this.timer = null
    this.iniciarContagem = this.iniciarContagem.bind(this)
    this.limparContagem = this.limparContagem.bind(this)
  }

  iniciarContagem () {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
      this.setState({ botao1: 'Vai!' })
    } else {
      this.timer = setInterval(() => this.setState({ tempo: this.state.tempo + 0.1 }), 100)
      this.setState({ botao1: 'Pausar' })
      this.setState({ botao2: 'Salvar e Zerar' })
    }
  }

  limparContagem () {
    let tempoSalvo = this.state.listaTempo
    tempoSalvo.push(<Text>{this.state.tempo.toFixed(1)}s</Text>)
    this.setState({ listaTempo: [tempoSalvo] })
    clearInterval(this.timer)
    this.timer = null
    this.setState({ tempo: 0 })
    this.setState({ botao1: 'Vai!' })
    this.setState({ botao2: 'Zerar' })
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={header.background}>
          <View style={header.container}>
            <Text style={header.title}>NH Sports</Text>
          </View>
        </View>
        <View style={main.background}>
          <View style={main.container}>
            <Image style={main.art} source={require('./src/images/cronometro.webp')} />
            <Text style={main.chronometer}>{this.state.tempo.toFixed(1)}s</Text>
            <View style={main.areaButton}>
              <TouchableOpacity style={main.button} onPress={this.iniciarContagem}>
                <Text style={main.textButton}>{this.state.botao1}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={main.button} onPress={this.limparContagem}>
                <Text style={main.textButton}>{this.state.botao2}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={footer.background}>
          <View style={footer.container}>
            <Text style={footer.text}>Registro de Tempo</Text>
            {this.state.listaTempo}
          </View>
        </View>
      </View>
    )
  }
}

export default App
