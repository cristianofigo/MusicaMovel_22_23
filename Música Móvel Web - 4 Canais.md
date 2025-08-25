# Música Móvel Web - 4 Canais

## Visão Geral

O **Música Móvel Web** é uma aplicação web interativa de produção musical desenvolvida como parte do projeto de extensão da UFBA (Universidade Federal da Bahia). Esta versão expandida oferece **4 canais de áudio simultâneos**, ampliando significativamente as possibilidades criativas em relação à versão original de 2 canais.

## Sobre o Projeto Original

O projeto original **MusicaMovel_22_23** foi desenvolvido como uma ferramenta educativa e criativa para produção musical colaborativa. A aplicação permite que usuários criem música de forma intuitiva através de uma interface web moderna, combinando elementos de sequenciamento, síntese de áudio e manipulação de samples.

### Características da Versão Original (2 Canais)
- 2 canais de áudio independentes
- Sequenciador de 8x8 steps por canal
- Visualização de waveform com regiões editáveis
- Controles de BPM, distorção e filtros
- Sistema de cenas pré-configuradas
- Interface baseada em NexusUI

## Nova Versão: 4 Canais

Esta versão expandida mantém toda a funcionalidade original enquanto adiciona capacidades significativamente ampliadas:

### Principais Melhorias

#### 🎵 **Expansão de Canais**
- **4 canais de áudio simultâneos** (versus 2 da versão original)
- Cada canal com controles independentes de volume, pan e seleção de samples
- Visualização de waveform individual para cada canal
- Cores distintas para fácil identificação dos canais

#### 🎛️ **Interface Aprimorada**
- Layout responsivo em grid 2x2 para os 4 canais
- Design moderno com efeitos de glassmorphism
- Gradientes e animações suaves
- Compatibilidade mobile e desktop

#### 🎹 **Sequenciamento Expandido**
- 4 sequenciadores independentes de 8x8 steps
- Cores diferenciadas para cada sequenciador
- Sincronização perfeita entre todos os canais
- Capacidade de criar arranjos mais complexos

#### 🔊 **Controles de Áudio**
- Mixer com 4 faders independentes
- Controles de pan para cada canal
- Efeitos globais de distorção e filtro
- Sistema de roteamento de áudio otimizado

## Tecnologias Utilizadas

### Bibliotecas de Áudio
- **Tone.js**: Síntese e processamento de áudio em tempo real
- **WaveSurfer.js**: Visualização e manipulação de waveforms
- **NexusUI.js**: Controles de interface para aplicações musicais

### Tecnologias Web
- **HTML5**: Estrutura semântica da aplicação
- **CSS3**: Estilização moderna com gradientes e efeitos
- **JavaScript ES6+**: Lógica da aplicação e manipulação de áudio
- **p5.js**: Framework para programação criativa

### Recursos de Áudio
- **Web Audio API**: Processamento de áudio nativo do navegador
- **Arquivos JSON**: Configuração de cenas e presets
- **Samples de áudio**: Biblioteca de sons pré-gravados

## Funcionalidades Detalhadas

### 1. Controles Globais
- **Play/Pause**: Controle de reprodução global
- **BPM**: Ajuste de tempo de 60 a 200 BPM
- **Loop Sample**: Ativação de loop contínuo
- **Distorção**: Efeito de saturação ajustável
- **Filtro**: Filtro passa-banda com frequência controlável

### 2. Canais de Áudio (4x)
Cada canal possui:
- **Waveform**: Visualização gráfica do áudio
- **Regiões**: Áreas editáveis para slicing de samples
- **Radiobuttons**: Seleção entre 8 samples diferentes
- **Pan**: Controle de posicionamento estéreo
- **Checkbox**: Ocultar/mostrar waveform

### 3. Sequenciadores (4x)
- **Matriz 8x8**: 64 steps por canal
- **Modo Toggle**: Ativação/desativação de steps
- **Cores Distintas**: Identificação visual dos canais
- **Sincronização**: Todos os sequenciadores em sync

### 4. Sistema de Cenas
- **3 cenas pré-configuradas**: Diferentes conjuntos de samples
- **Troca dinâmica**: Mudança de cena sem interrupção
- **Configurações salvas**: Cada cena mantém suas configurações

### 5. Mixer
- **4 faders independentes**: Controle de volume por canal
- **Valores em dB**: Precisão profissional (-100dB a +6dB)
- **Modo barra**: Visualização intuitiva dos níveis

## Estrutura de Arquivos

```
musica_movel_4_canais/
├── index.html                 # Interface principal
├── style.css                  # Estilos modernos
├── sketch_4_canais.js         # Lógica principal da aplicação
├── padroes_4_canais.js        # Funções auxiliares e configurações
├── sequencia.js               # Lógica do sequenciador
├── live.js                    # Funcionalidades de performance
├── p5.js                      # Biblioteca p5.js
├── Tone.js                    # Biblioteca Tone.js
├── NexusUI.js                 # Biblioteca NexusUI
├── wavesurfer.js              # Biblioteca WaveSurfer
├── wavesurfer.regions.min.js  # Plugin de regiões
├── celular3105.json           # Configuração cena 1
├── bibibi.json                # Configuração cena 2
├── novasamples.json           # Configuração cena 3
├── novo.json                  # Configuração adicional
└── tetetete.json              # Configuração adicional
```

## Como Usar

### Iniciando a Aplicação
1. Abra o arquivo `index.html` em um navegador moderno
2. Aguarde o carregamento das bibliotecas e samples
3. A aplicação iniciará automaticamente na Cena 2

### Criando Música
1. **Selecione samples**: Use os radiobuttons para escolher diferentes sons
2. **Edite regiões**: Clique e arraste nas waveforms para criar loops
3. **Programe sequências**: Clique nos sequenciadores para ativar steps
4. **Ajuste o mix**: Use o mixer para balancear os volumes
5. **Controle efeitos**: Ajuste distorção e filtros ao gosto
6. **Pressione Play**: Inicie a reprodução e experimente!

### Dicas de Uso
- **Experimente diferentes cenas** para variar os sons disponíveis
- **Use o controle de pan** para criar espacialização estéreo
- **Combine diferentes samples** nos 4 canais para texturas ricas
- **Varie o BPM** para diferentes estilos musicais
- **Salve suas criações** usando o botão "Salvar"

## Compatibilidade

### Navegadores Suportados
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Dispositivos
- 💻 **Desktop**: Experiência completa
- 📱 **Mobile**: Interface adaptada para toque
- 📱 **Tablet**: Layout otimizado

### Requisitos
- Conexão com internet (para carregamento inicial)
- Navegador com suporte a Web Audio API
- Recomendado: Fones de ouvido ou sistema de som

## Melhorias Implementadas

### Design e UX
- **Interface moderna**: Gradientes e efeitos visuais
- **Layout responsivo**: Adaptação automática a diferentes telas
- **Feedback visual**: Animações e transições suaves
- **Organização clara**: Agrupamento lógico dos controles

### Performance
- **Otimização de áudio**: Roteamento eficiente dos 4 canais
- **Carregamento inteligente**: Preload de samples essenciais
- **Gestão de memória**: Limpeza automática de recursos não utilizados

### Funcionalidades
- **Dobro de canais**: Capacidade criativa expandida
- **Controles independentes**: Flexibilidade total por canal
- **Sincronização perfeita**: Timing preciso entre canais
- **Salvamento expandido**: Suporte a configurações de 4 canais

## Desenvolvimento Futuro

### Próximas Funcionalidades
- 🎤 **Gravação de áudio**: Captura de performances ao vivo
- 🌐 **Colaboração online**: Múltiplos usuários simultâneos
- 📊 **Análise espectral**: Visualização avançada de frequências
- 🎨 **Temas personalizáveis**: Diferentes esquemas de cores
- 💾 **Exportação de áudio**: Renderização para WAV/MP3

### Melhorias Técnicas
- ⚡ **WebAssembly**: Processamento de áudio mais eficiente
- 🔄 **Service Workers**: Funcionamento offline
- 📱 **PWA**: Instalação como aplicativo nativo
- 🎹 **MIDI**: Suporte a controladores externos

## Créditos e Licença

### Desenvolvimento
- **Projeto Original**: cristianofigo (GitHub)
- **Versão 4 Canais**: Adaptação e expansão
- **CSS**: Letícia Mayni (design original)

### Instituição
- **UFBA**: Universidade Federal da Bahia
- **Proext**: Programa de Extensão Universitária

### Bibliotecas Utilizadas
- Tone.js - Licença MIT
- WaveSurfer.js - Licença BSD
- NexusUI.js - Licença MIT
- p5.js - Licença LGPL

---

## Conclusão

A versão expandida do **Música Móvel Web** representa uma evolução significativa do projeto original, oferecendo o dobro de capacidade criativa através de 4 canais independentes. Com interface moderna, funcionalidades ampliadas e performance otimizada, esta ferramenta continua servindo seu propósito educativo enquanto proporciona uma experiência musical mais rica e envolvente.

A aplicação demonstra o potencial das tecnologias web modernas para criação de ferramentas musicais acessíveis, mantendo o espírito colaborativo e educativo do projeto original da UFBA.

**Experimente, crie e compartilhe sua música!** 🎵

