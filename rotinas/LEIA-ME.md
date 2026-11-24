# Ronda (nome provisório) · app de rotinas do restaurante

Protótipo que já funciona no celular: `gestaopontes.com/rotinas/` (depois de publicado).
Dá para "instalar" pela opção **Adicionar à tela de início** do navegador.

## O que já faz
- **Dono (master):** cria rotinas (horário, dias, responsável, tipo de comprovação, pontos),
  vê em tempo real o que está atrasado ("Carla ainda não fez…"), problemas relatados,
  fotos, gráfico de pontualidade, insights automáticos e define o prêmio do mês.
- **Gerente:** recebe as rotinas como missões, com lembrete na hora, e comprova com
  foto, sim/não, número (ex.: % do gás, com alerta se ficar baixo), texto ou checklist.
- **Jogo:** XP, bônus por pontualidade, combo, 7 níveis, sequência de dias (🔥),
  9 conquistas, ranking semanal/mensal e prêmio real do mês.

## Limite desta versão (importante antes de vender)
Os dados ficam **no próprio aparelho**. Para o dono ver no celular dele o que o gerente
fez no celular do gerente, falta ligar a um servidor (ex.: Firebase ou Supabase), com:
login por restaurante, sincronização, fotos na nuvem e notificações mesmo com o app fechado.
Hoje os lembretes aparecem com o app aberto ou em segundo plano recente.
No iPhone, notificações só funcionam com o app adicionado à tela de início (iOS 16.4+).

## Arquivos
- `index.html` — o app inteiro (nome em `const APP` no topo do script)
- `sw.js` — funciona sem internet e trata os toques nas notificações
- `manifest.webmanifest`, `icon-*.png` — instalação no celular
