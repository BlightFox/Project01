//Основний модуль
import gulp from "gulp";
//Імпорт шляхів
import { path } from "./gulp/config/path.js";

//Передача значень у глобальну змінну
global.app = {
   path: path,
   gulp: gulp 
}

//Імпорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";

//Спостерігач за змінами у файлах
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
}


const mainTasks = gulp.parallel(copy, html);

//Побудова сценарієв виконання задач
const dev = gulp.series(reset, mainTasks, watcher);

//Сценарій за замовчуванням 
gulp.task('default', dev);