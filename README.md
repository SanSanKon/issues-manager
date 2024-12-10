-----ENG-----
This is my first experience writing such files, so please do not judge strictly.

# Project name and brief description
issues-manager

React TypeScript application for working with issues on GitHub. Allows you to find issues by user nickname on GitHub and repository name.

Allows you to add comments to issues and displays the number of existing comments.

Also allows you to view the basic data of the repository owner when you go to the page with the basic data of the repository owner.

##Requirements:
- Node.js on the computer you are running

##Installation
1. Clone the repository:

git clone https://github.com/your-username/your-project.git

Or copy the code to your computer and open it in your IDE.

2. Go to the project directory:

cd your-project

3. Install dependencies:

npm install

Or open the terminal in your IDE for the folder containing the downloaded project files and install dependencies with the same command: npm install.
You will also need your GITHUB_ACCESS_TOKEN access key, which you will need to save in the root folder of the application in the .env file.

## Launch

1. Run the project in development mode:

npm run start

After running this command, the application should be available at http://localhost:3000.

## Project structure

The basic components are located in the root src folder, in separate folders - components, images, GraphQL queries, store Mobx, styles.
SCSS (SASS) was used to describe the styles.

Disadvantages:
- Mobx was not used for the entire project. because I didn't fully understand how to connect it with GraphQL queries, then I was just afraid to get confused, because otherwise the work would take longer.
- The implementation of the class component did not work, I understood the problem, but I did not find an adequate solution, so I commented out the implementation of the class component.
- When updating the page with the list of issues or the repository owner's profile page, an error appeared:
- "Cannot GET /issues/Zerointensity/view.py, Failed to load resource: the server responded with a status of 404 (Not Found)".
- The problem is clear, of all the available solutions, using HashRouter worked. I know that this is not recommended, but I have not found a more suitable solution, unfortunately.

-----RUS-----
Это мой первый опыт написания подобных файлов, поэтому не судите строго, пожалуйста.

# Название проекта и краткое описание проекта
issues-manager

React TypeScript приложение для работы с issues на GitHub. Позовляет находить issues по нику пользователя на GitHub и названию репозитория. 
Позволяет добавлять комментарии к issues и отображает количество уже имеющихся комментариев. 
Также позволяет просмотреть основные данные владельца репозитория при переходе на страницу с основными данными владельца репозитория.

##Требования:
- Наличие на запускаемом компьютере Node.js

##Установка
1. Склонируйте репозиторий:

    git clone https://github.com/your-username/your-project.git

Или скопируйте код на свой компьютер и откройте в используемой вами IDE.

2. Перейдите в каталог проекта:

    cd your-project

3. Установите зависимости:

    npm install

Или откройте terminal в вашей IDE для папки, содержащей скачанные файлы проекта и установите зависимости той же командой: npm install.
Также вам понадобится ваш ключ доступа GITHUB_ACCESS_TOKEN, который вам нужно будет сохранить в корневой папке приложения в файле .env.

## Запуск

1. Запустите проект в режиме разработки:

    npm run start

    После выполнения этой команды, приложение должно быть доступно по адресу http://localhost:3000.

## Структура проекта

Базовые компоненты расположены в корневой папке src, в отдельных папках - компоненты, изображения, запросы GraphQL, store Mobx, стили.
Для описания стилей использован SCSS(SASS).

Из недостатков:
- Mobx использовал не для всего проекта. т.к. не разобрался до конца, как его можно соединить с запросами GraphQL, далее просто побоялся запутаться, т.к. иначе время выполнения работы затянулось бы.
- Реализация классового компонента не сработала, в чем проблема понял, но не нашел адекватного решения, поэтому реализацию классового компонента закомментировал.
- При обновлении страницы со списком issues или страницы профиля владельца репозитория, появлялась ошибка:
- "Cannot GET /issues/Zerointensity/view.py, Failed to load resource: the server responded with a status of 404 (Not Found)".
- Проблема понятна, из всех имеющихся решений сработало использование HashRouter. Я знаю, что так не рекомендуют делать но более подходящего решения я не нашел, к сожалению.
