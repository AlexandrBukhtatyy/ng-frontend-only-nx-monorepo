# ng-frontend-only-nx-monorepo
The repository was created for fixing experience of working on many identical frontend projects

## Technologies
* NX
* Angular
* Docker
* Gitlab CI/CD

## Console commands
```shell
# Create nx workspace
nx serve [PROJECT_NAME]

# Create nx workspace
npx create-nx-workspace@latest --preset angular --directory ./

# Generate frontend application - angular
nx g @nrwl/angular:app --directory=frontend --name=[NAME]

# Generate frontend library - angular
nx g @nrwl/angular:library --directory=frontend/[PATH] --name=[NAME] --simpleModuleName
nx g @nrwl/angular:library --directory=frontend/ui/[PATH] --name=[NAME] --simpleModuleName
nx g @nrwl/angular:library --directory=frontend/utils/[PATH] --name=[NAME] --simpleModuleName
nx g @nrwl/angular:library --directory=frontend/modules/[PATH] --name=[NAME] --simpleModuleName

nx generate @nrwl/angular:component layouts/[NAME] --standalone --project=[PROJECT_NAME]
nx generate @nrwl/angular:component pages/[NAME] --standalone --project=[PROJECT_NAME]
nx generate @nrwl/angular:component components/[NAME] --standalone --project=[PROJECT_NAME]
nx generate @nrwl/angular:directive directives/[NAME] --standalone --project=[PROJECT_NAME]
nx generate @nrwl/angular:service services/[NAME] --project=[PROJECT_NAME]

# Form module generator commands
nx generate @nrwl/angular:directive directives/[NAME] --standalone --project=frontend-angular-modules-form
nx generate @nrwl/angular:component form-contrls/form-contrl-[NAME] --standalone --project=frontend-angular-modules-form
nx generate @nrwl/angular:component form-fields/form-field-[NAME] --standalone --project=frontend-angular-modules-form
```

## Additional material
* [Links](./docs/links.md)
