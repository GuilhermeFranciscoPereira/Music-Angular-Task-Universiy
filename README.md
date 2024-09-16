# Desafio Angular - Listador de músicas! 🌟

### Commit: 16/09/2024 - 10:21 (Criado o nosso "back-end falso" usando o json-server para nossas músicas e caso aconteça algum erro ao fazer a requisição get (Caso a pessoa não tenha colocado o programa no computador ou se estiver no celular) ele irá mostrar o valor padrão (os mesmos dados do json-server))

#

> 🎓 Desafio proposto na faculdade Fatec Itu/SP.

> 👨‍🏫 Desafio proposto pelo professor: Glauco Toledo. 

# 

## 🖥️ Como o site está no momento atual no computador:
!['Site atual no computador'](src/assets/musicTablePhoto-PC.png)
## 📱 Como o site está no momento atual no celular:
!['Site atual no celular'](src/assets/musicTablePhoto-Mobile.png)

## ✔️ Alterações deste commit:

## Alterações na pasta: ( src / db.json)

## Alterações nas pastas de ( src ): ( app / services / types )

### app:
- app > musics-table > musics.table-component.spec.ts: Arquivo criado neste commit para fazer um teste básico para garantir que o MusicsTableComponent seja instanciado corretamente.

- app > musics-table > musics-table.component.ts: adicionamos o código necessário para que ao iniciar o site, pegue os nossos produtos no back-end e retorne para o array para assim mostrar na tabela. (caso ocorra um erro na requisição ao json-server retorna um valor default).

- app > app.module.ts: Adicionado a importação do HttpClientModule.

- services > getMusics.service.ts: É onde está o código responsável por fazer a requisição ao back-end e retornar os dados. Como já dito anteriormente, caso não exista os dados ele irá retornar um valor default.

- types > musicsTableProps.ts: Exporta a tipagem da tabela de músicas.

## Alterações no arquivo de ( db.json ):
- db.json: Criado o nosso back-end falso usando o json-server e adicionando neste arquivo os nossos dados de músicas.

##

### ❤️ Créditos:

#### 🎉 Créditos dos emojis:
> 🔗 <a href="https://emojipedia.org" target="_blank">https://emojipedia.org</a>