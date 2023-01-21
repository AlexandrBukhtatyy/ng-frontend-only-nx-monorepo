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
npm run start start:[PROJECT_NAME]

# Create nx workspace
npx create-nx-workspace@latest --preset angular --directory ./

# Generate frontend application - angular
nx g @nrwl/angular:app --directory=frontend --name=[NAME]

# Generate frontend library - angular
nx g @nrwl/angular:library --directory=frontend/[PATH] --name=[NAME]
nx g @nrwl/angular:library --directory=frontend/ui/[PATH] --name=[NAME]
nx g @nrwl/angular:library --directory=frontend/utils/[PATH] --name=[NAME]
nx g @nrwl/angular:library --directory=frontend/modules/[PATH] --name=[NAME]

nx generate @nrwl/angular:component layouts/[NAME] --project=[PROJECT_NAME]
nx generate @nrwl/angular:component components/[NAME] --project=[PROJECT_NAME]
nx generate @nrwl/angular:directive directives/[NAME] --project=[PROJECT_NAME]
nx generate @nrwl/angular:service services/[NAME] --project=[PROJECT_NAME]
```

## Additional material
* [Links](./docs/links.md)
