# Ronda (nome provisório) · app de rotinas do restaurante

Protótipo que já funciona no celular: `gestaopontes.com/rotinas/` (depois de publicado).
Dá para "instalar" pela opção **Adicionar à tela de início** do navegador.

## O que já faz
- **Rede de lojas:** o gestor (master) cria cada rotina uma vez e escolhe em quais lojas
  (todas ou algumas) e em qual turno ela vale. Em cada loja, o gerente do turno recebe a missão.
- **Gestor:** vê em tempo real o que está atrasado em cada loja ("Loja Centro: Carla ainda não fez…"),
  problemas relatados, fotos, gráfico da rede, insights (melhor e pior loja, rotina que mais atrasa,
  lojas com gás baixo) e o **ranking das lojas**.
- **Ranking das lojas:** índice de preenchimento (no horário vale 1, atrasada ½, esquecida 0),
  por hoje, 7 dias ou mês. Também tem o ranking dos gerentes da rede por XP.
- **Gerente:** recebe as rotinas como missões, com lembrete na hora, e comprova com
  foto, sim/não, número (com alerta se ficar abaixo do mínimo), texto ou checklist.
  Vê a posição da loja dele e quanto falta para passar a próxima.
- **Jogo:** XP, bônus por pontualidade, combo, 7 níveis, sequência de dias (🔥) e 10 conquistas.
  Os pontos só acumulam; não há prêmio definido.
- **Notificações:** sininho no topo, com botão "Testar notificação" (chega em 5 segundos).
  Também fica em Lojas › Configurações.

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
