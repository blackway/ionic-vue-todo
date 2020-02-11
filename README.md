
  

# ionic-vue-todo

  

Todo App using ionic/vue

<img  src="https://github.com/sgflores/ionic-vue-todo/blob/master/public/Capture3.PNG"  />

## Code Coverage

  

1. basic ionic components such as (ion-header, ion-footer, ion-footer, ion-content, ion-list, ion-item-sliding, ion-input, ion-checkbox etc..)

2. ionic vue model binding

3. vuex store

4. IonicVueRouter

5. localStorage

  

## Project setup

  

```

  

npm install

  

```

  

  

### Compiles and hot-reloads for development

  

```

  

npm run serve

  

```

  

  

### Compiles and minifies for production

  

```

  

npm run build

  

```

  

  

### Lints and fixes files

  

```

  

npm run lint

  

```

  

  

### Customize configuration

  

See [Configuration Reference](https://cli.vuejs.org/config/).

  

## Build Android / IOS Platform on command line

1. initialize ionic project
		`ionic init`

2.  paste this code to package.json   `"ionic:build": "vue-cli-service build",`  and then run  
		 `ionic build`

3. add android/ios platform of choice 
		`ionic capacitor add android`

4. copy build assets to android/ios platform
		 `ionic capacitor copy android`

5.  open IDE 
		`ionic capacitor open android	`
		
6.  run application on emulator
	` ionic capacitor run android`
