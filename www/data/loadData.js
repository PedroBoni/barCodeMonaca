var data = {
  products:
  [
    {
      productCode: "0012020-AAA",
      productName: 'Smartphone Samsung Galaxy A10s 32GB Azul - 4G 2GB RAM 6,2” Câm. Dupla + Selfie 8MP',
      productValue: 999.00,
      description: 'O Display Infinito de 6,2" vai redefinir seu entretenimento para que você não perca nenhum detalhe seja jogando seus games ou assistindo seus vídeos favoritos. O smartphone Galaxy A10s é elegante e ao mesmo tempo durável, além de ter acabamento sofisticado e ergonômico. Conta com sensor de impressão digital na tela para maior segurança. Ele é composto por câmera dupla. Tudo com um campo de visão semelhante ao olho humano. Com um telefone tão inteligente como este suas fotos se tornam incríveis. A câmera frontal de 8MP oferece fotos nítidas de alta resolução. E com o Foco da Selfie que desfoca suavemente o fundo seu rosto se torna o destaque. Agora você tem ainda mais maneiras de se expressar. Com uma bateria de 4.000mAh pronta para durar o dia todo você aproveita ao máximo cada momento. E não precisa se preocupar em recarregar este smartphone tem carregamento rápido de 7,5W para que você volte ao que estava fazendo sem perder seu tempo. O processador octa-core trabalha com conteúdos e recursos na ponta dos seus dedos para que você acesse tudo rapidamente. O modo Noturno oferece uma experiência confortável no escuro e os recursos visuais claros e intuitivos fazem com que seu telefone mostre a você uma segunda natureza. Possui ainda um armazenamento interno de 32GB para guardar suas fotos e músicas, mais memória RAM de 2GB. É 4G para não perder nada nas redes sociais e é dual chip para você poder usar com duas operadoras da sua escolha. Nesta versão disponível na cor azul.',
      productImageURL: 'https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-a10s-32gb-azul-4g-2gb-ram-62-cam-dupla-selfie-8mp/magazineluiza/155568400/b128295b1b31c05f5a20a3229b18ac5a.jpg'
    },
    {
      productCode: "0022020-AAA",
      productName: 'Smart TV Crystal UHD 4K LED 50” Samsung - 50TU8000 Wi-Fi Bluetooth HDR 3 HDMI 2 USB',
      productValue: 2298.05,
      description: 'Tenha uma tela de cinema no conforto da sua sala com a Smart TV, modelo 50TU8000, da Samsung. Ela traz resolução 4K, que oferece uma experiência única com imagens mais realistas para você não perder nenhum detalhe, além de frequência 60Hz e tecnologia Crystal UHD. Com o HDR 10+ ela oferece cores mais apuradas e vivas e design superior com cabos escondidos e a tela mais fina. Com a tecnologia da tela LED, com 50", ela permite uma verdadeira imersão, independente da onde se olhe e a borda ultrafina com o design sofisticado com 3 bordas proporciona elegância ao ambiente. Suas 3 entradas HDMI, 2 de USB, Wi-Fi e Bluetooth possibilitam entretenimento ilimitados por horas e horas. Ela possui, ainda, múltiplos assistentes pessoais com compatibilidade com Alexia e Bixby e controle remoto único para controlar diversos aparelhos conectados à TV. Ela também é perfeita para você que gosta de jogar, pois como o modo game, oferece o melhor tempo de resposta possível!',
      productImageURL: 'https://images.samsung.com/is/image/samsung/br-uhd-tu7000-un50tu7000gxzd-Titan-Gray-1--246680995?$PD_GALLERY_L_JPG$'
    },
    {
      productCode: "0032020-AAA",
      productName: 'Forno Elétrico de Embutir Consul COB84AR 84 litros',
      productValue: 1521.30,
      description: 'Tenha praticidade e eficiência para cozinhar com os produtos da Consul!O Forno Elétrico de Embutir Consul COB84AR 84 litros conta com a maior litragem do segmento* e vem com Timer Auto desligamento, que ao final do tempo programado, desliga o forno sozinho.Seu Menu Controle Fácil ajuda a ajustar a temperatura, função e nível de prateleira ideais para cada tipo de preparo. Além disso, conta com o maior espaço interno com duas prateleiras e 7 níveis de ajustes para cada tipo de receita.',
      productImageURL: 'https://a-static.mlcdn.com.br/618x463/forno-eletrico-de-embutir-consul-cob84ar-84-litros/so1clic/729/316bf5a31d4ec99b07554da8d698b801.jpg'
    },
    {
      productCode: "0042020-AAA",
      productName: 'Rack para TV até 42 Polegadas 1 Porta Retrô Jade Móveis Bechara Preto',
      productValue: 159.90,
      description: 'O Rack Jade é ideal para sua sala! Seu estilo vintage retrô com certeza irá agregar muito mais charme e requinte ao seu ambiente. Ele possui pés em madeira maciça e foi elaborado em MDP e MDF, essas características garantem ao móvel maior resistência e qualidade. Possui também uma prateleira que forma dois nichos com amplo espaço que certamente irá acomodar perfeitamente qualquer objeto de decoração, aparelho eletrônico que complemente sua TV, dentre muitos outros aparatos que deseje acomodar no rack. Possui também uma porta com amplo espaço interno que é ideal para armazenar qualquer objeto que deseje.',
      productImageURL: 'https://a-static.mlcdn.com.br/618x463/rack-para-tv-ate-42-polegadas-1-porta-retro-jade-moveis-bechara-preto/madeiramadeira-openapi/278852/7ca508b3c84f16affeb15792d5728c84.jpg'
    }
  ] 
}
if(!localStorage.getItem("data")){
  localStorage.setItem("data", JSON.stringify(data));
}
