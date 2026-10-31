const input = document.querySelector(".input");
const output = document.querySelector(".output");
const commands = [
    "<p>> <span class='green'>help</span> - показать список команд</p>",
    "<p>> <span class='green'>about</span> - о проекте</p>",
    "<p>> <span class='green'>ls</span> - список доступных глав</p>",
    "<p>> <span class='green'>clear</span> - очистить терминал</p>",
];
const ls = [
    "<p>> <span class='green'>ch.1</span> - глава 1: unit-07</p>",
    "<p>> <span class='green'>ch.2</span> - глава 2: breathing</p>"
]

output.insertAdjacentHTML("beforeend", "<p>> <span class='green'>добро пожаловать, для навигации используйте команду help</p>");
output.insertAdjacentHTML("beforeend", `
<pre>

 ▓▓▓  ▓   ▓ ▓▓▓▓    
▓     ▓▓ ▓▓ ▓   ▓ 
▓     ▓ ▓ ▓ ▓   ▓   
▓     ▓   ▓ ▓   ▓    
 ▓▓▓  ▓   ▓ ▓▓▓▓  

разработка проекта
▰═════════ 1%
</pre>
`);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const command = input.value.toLowerCase();
        if (command === "help") {
            output.insertAdjacentHTML("beforeend", "<p>> доступные команды:</p>");
            for (const commandName of commands) {
            output.insertAdjacentHTML("beforeend", "<p>" + commandName + "</p>");
            output.scrollTop = output.scrollHeight;
        }
        }

        else if (command === "about") {
            output.insertAdjacentHTML("beforeend", "<p>> <span class='orange'>пишу я книгу/рассказ, но markdown формата, как в .fb2 файлах, на большинстве сайтов по типу wattpad, fickbook и telegra.ph меня вообще не устраивают и не дают нужной творческой свободы. личный сайт же решит эту проблему, и я смогу оформлять книгу/рассказ как угодно. ну, например я сделал консоль, из которой пользователь будет попадать на нужную главу путем использования команды ch.(вставьте нужное число). весело же!</span></p>");
            output.scrollTop = output.scrollHeight;
        }

        else if (command === "ls") {
            output.insertAdjacentHTML("beforeend", "<p>> доступные главы: <span class='orange'>(тестовая команда, еще ничего не доступно)</span></p>");
            for (const commandName of ls) {
            output.insertAdjacentHTML("beforeend", "<p>" + commandName + "</p>");
            output.scrollTop = output.scrollHeight;
        }
        }

        else if (command === "clear") {
            output.innerHTML = "";
            output.insertAdjacentHTML("beforeend", "<p>> <span class='green'>добро пожаловать, для навигации используйте команду help</p>");
        }

        else if (command === "sv.cheats 1") {
            output.insertAdjacentHTML("beforeend", "<p class='red'>> для чего тебе здесь читы? чего ты хочешь, псих?</p>");
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }

        else if (command === "/gamemode 1") {
            output.insertAdjacentHTML("beforeend", "<p class='red'>> ага, /give @s minecraft:diamond_block 64</p>");
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }

        else output.insertAdjacentHTML("beforeend", "<p class='red'>> Неизвестная команда</p>");
            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
});

