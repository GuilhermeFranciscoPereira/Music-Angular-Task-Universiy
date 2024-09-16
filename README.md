# Desafio Angular - Listador de músicas! 🌟

### Commit: 16/09/2024 - 12:01 (Criado o novo componente, um componente chamado button-delete. Ele é responsável por apagar as músicas que o usuário escolher)

#

> 🎓 Desafio proposto na faculdade Fatec Itu/SP.

> 👨‍🏫 Desafio proposto pelo professor: Glauco Toledo. 

# 

## 🖥️ Como o site está no momento atual no computador:
!['Site atual no computador'](src/assets/musicTablePhoto-PC.png)
## 📱 Como o site está no momento atual no celular:
!['Site atual no celular'](src/assets/musicTablePhoto-Mobile.png)

## ✔️ Alterações deste commit:

## Alterações na pasta: ( src / db.json )

## Alterações nas pastas de ( src ): ( app / assets / components / services / types )

### app:
- app > musics-table > musics.table-component.css: Pequena alteração na estilização quando está com o width de 480px para menos. (celulares)

- app > musics-table > musics.table-component.html: Adicionado o campo "opções" que possui o botão de deletar.

- app > musics-table > musics-table.component.ts: Adicionado a função "delete".

- app > app.module.ts: Adicionado a declaração do ButtonDeleteComponent.

- assets: Adicionado as duas novas fotos de como está o site no atual momento com os botões de delete (fotos para usar neste readme).

- components: Criado a pasta components e dentro a pasta button-delete.

- components > button-delete: Criado o componente do botão de deletar, junto da sua estilização.

- services > getMusics.service.ts: Adicionado a função "delete" e também o alerta de que se o usuário estiver usando a versão do navegador não será possível usar o botão de deletar. Além de também ter adicionado os IDs nos valores defaults.

- types > musicsTableProps.ts: Adicionado o ID como tipagem da tabela de músicas.

## Alterações no arquivo de ( db.json ):
- db.json: Adicionado o ID em casa objeto. Pois o Json-server faz o delete com o ID - (Informação encontrada na documentação do Json-Server no NPM. Link da documentação: https://www.npmjs.com/package/json-server)

##

### ❤️ Créditos:

#### 🎉 Créditos dos emojis:
> 🔗 <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>