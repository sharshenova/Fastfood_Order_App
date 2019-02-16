// функция для массового импорта
// получает объект контекста и преобразует его в словарь
// ключами будут названия файлов, а значениями - пути к ним

function importAll(context) {
    console.log(context);
    console.log(context.keys());

    let files = {};
    // обрезаем ./ в начале названия каждого файла
    context.keys().forEach(key => {files[key.replace('./', '')] = context(key)});

    console.log(files);
    return files;
}


export {importAll}