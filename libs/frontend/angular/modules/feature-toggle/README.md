# angular feature toggle module
## Описание

## Примеры
### Инициализация модуля
FeatureFlagsStorageService - сервис ответственный за хранение и проверку переключателя фичи, который реализуется клиентом модуля.
```
imports: [
...,
importProvidersFrom(
FeatureToggleModule.forRoot({
featuresStorageService: FeatureFlagsStorageService,
guardFailureUri: '404',
})
),
],
providers: [
...,
FeatureFlagsStorageService,
]
```

### Гуард - для роутинга
```
{{"canMatch: [featureToggleGuard({ key: 'SOME_KEY' })"}}
{{"canMatch: [featureToggleGuard({ key: 'SOME_KEY', redirectTo: ['404'] })"}}
```

### Директива - для html-шаблонов
```
<a routerLink="/path"
*appFeatureToggle="'SOME_KEY'; else elseTpl"
>path</a>

<ng-template #elseTpl>
<a routerLink="/new-path"
>new-path</a>
</ng-template>
```

### Сервис - для програмного переключения фич
```
if (this.featureToggleService.isEnabled('SOME_KEY')) {...
```

### Обновление флагов через аргументы строки запроса
```
URL?eft=SOME_KEY_1,SOME_KEY_2&dft=SOME_KEY_3,SOME_KEY_4
```
